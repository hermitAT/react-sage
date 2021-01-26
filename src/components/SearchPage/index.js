import Button from 'components/Button';
import SearchDropMenu from './SearchDropMenu';
import RecipeList from 'components/RecipeList';
import axios from 'axios';
import React, { useState } from 'react';
import './SearchPage.scss';

import useSearchData from "hooks/useSearchData";



export default function SearchPage(props) {
  const { state } = useSearchData();

  const { categories } = state;

  const [name, setName] = useState('');
  const [chosenIngredients, setIngredient] = useState({});
  const [searchResults, setSearchResults] = useState('');
  const [revealMenu, setRevealMenu] = useState(false);

  const getSearchResults = function(name, ingredients) {
    if (ingredients.length === 0 && name === '') return false
    if (ingredients.length !== 0) ingredients = ingredients.map(el => Number(el));
    
    const nameQuery = name && `name=${name}`
    const ingredientsQuery = ingredients && `ingredient_id=[${ingredients.join(',')}]`
    let query = ''
    if (name && ingredients) query = nameQuery + '&' + ingredientsQuery
    else query = nameQuery + ingredientsQuery

    axios.get(`/api/recipes/search?${query}`)
    .then(all => {
      setSearchResults(prev => null);
      setSearchResults(prev => all.data.result);
    })
      .catch(e => console.error(e));
  };

  const onRemove = function(id){
    let newChosen = {...chosenIngredients};
    delete newChosen[id];
    setIngredient(newChosen);
  }

  const clickIngredient = function (id, name) {
    setIngredient({ ...chosenIngredients, [id]: name })
  }

  const flipMenu = function() {
    setRevealMenu(prev => !revealMenu);
  }

  const clearIngredients = function() {
    const clearObject = {};
    setIngredient(prev => clearObject);
  }

  return (
    <div id="search-page">
      <form id="barthender" autoComplete="off" onSubmit={event => {
        event.preventDefault()
      }}>
        <h1 className="text-container">Hey Bartender! Pour me something . . .</h1>

        <div id="named-with" className="row-group">

          <div id="named">
            <h3 className="text-container">. . . named like . . .</h3>
            <input
              className="search-name-input"
              name="name"
              value={name}
              type="text"
              placeholder="Bloody Mary"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div id="with-ingredients">
            <h3 className="text-container">. . . with . . .</h3>
            <div id="ingredients-list" className="text-container">
              <div id="add-button-container" className="search__button__container">
                <Button id="add-ingredient" onClick={() => flipMenu()}>{!revealMenu && '+ Add ingredient'} {revealMenu && 'Cancel'}</Button>
                {revealMenu && <SearchDropMenu
                  onClick={clickIngredient}
                  categories={categories}
                  chosenIngredients={chosenIngredients}
                />}
                {<Button className="search__button__reset"
                onClick={() => clearIngredients()}>
                  Reset
                </Button>}
              </div>
              <div id="selected-ingredients">
                {Object.keys(chosenIngredients).map(id => {
                  return (
                    <div key={id} id="selected-name-remove">
                      <p>{chosenIngredients[id]}</p>
                      <Button onClick={(e) => onRemove(id)}>Remove</Button>
                    </div>
                  )
                })}
              </div>

              <div id="drop-menu-container">
              </div>
            </div>
          </div>
        </div>

        <button className="search__button" onClick={() => getSearchResults(name, Object.keys(chosenIngredients))}>
          You know what I mean?
        </button>
      </form>
      <section id="results">
        
        { searchResults && (searchResults !== "No results found") && (
          <>
            <h2 className="search__results__header">Yes, try this...</h2>
            <RecipeList pages={searchResults.relevance} user={props.user.user} />
          </>
        ) }
        {searchResults === "No results found" && <h2 className="search__results__header">. . . I have no idea what you're talkin' about!</h2>}
      </section>
    </div>
  )
};