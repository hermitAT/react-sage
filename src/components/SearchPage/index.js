import Button from 'components/Button';
import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './SearchPage.scss';

import useSearchData from "hooks/useSearchData";



export default function SearchPage(props) {
  
  const { state } = useSearchData();

  const { categories } = state;

  const [name, setName] = useState('');
  const [chosenIngredients, setIngredient] = useState({});
  const [searchResults, setSearchResults] = useState({});

  const getSearchResults = function(name, ingredients) {
    if (ingredients.length === 0 && name === '') return false
    if (ingredients.length !== 0) ingredients = ingredients.map(el => Number(el));
    
    console.log(name, ingredients);

    const query = `name=${name}&ingredient_id=[${ingredients.join(',')}]`
    console.log(query);

    setSearchResults(
      axios.get(`/api/recipes/search?${query}`)
      .then(all => {
        const result = all.data.result;
        console.log(result)
      })
      .catch(e => console.error(e))
    )
  }

  const onRemove = function(id){
    console.log(id)
    let newChosen = {...chosenIngredients}
    delete newChosen[id]
    setIngredient(newChosen)
  }

  const DropM = function () {
    const style = { float: 'left', position: 'absolute', top: 370 + 'px', left: 250 + 'px' }
    const ingredientsStyle = { float: 'left', position: 'absolute', top: 57 + 'px', left: 0 + 'px' }
    return (
      <div id="drop-menu" style={style}>
        {categories.map((category, index) => (
          <div key={index} className="category-element">
            {category.name}
            <div id="ingredients" style={ingredientsStyle}>{category.ingredients.map((ingredient, index) =>
              (!Object.keys(chosenIngredients).map(key => Number(key)).includes(ingredient.id)) && (
                <button key={index} className="ingredient-element" key={index} onClick={() =>
                  clickIngredient(ingredient.id, ingredient.name)}>{ingredient.name}</button>
              ))}</div>
          </div>))}

      </div>
    )
  }

  const clickIngredient = function (id, name) {
    setIngredient({ ...chosenIngredients, [id]: name })
    ReactDOM.unmountComponentAtNode(document.getElementById('drop-menu-container'))
  }

  const showMenu = function (e) {
    const { pageX, pageY } = e
    ReactDOM.render(<DropM x={pageX} y={pageY}></DropM>, document.getElementById('drop-menu-container'))
  }

  return (
    <div id="search-page">
      <form id="barthender" autoComplete="off" onSubmit={event => {
        event.preventDefault()
      }}>
        <h1 className="text-container">Hey Barthender! Pour me something...</h1>

        <div id="named-with" className="row-group">

          <div id="named">
            <h3 className="text-container">...named like...</h3>
            <input
              className="search-name-input"
              name="name"
              value={name}
              type="text"
              placeholder="mary"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div id="with-ingredients">
            <h3 className="text-container">...with...</h3>
            <div id="ingredients-list" className="text-container">
              <div id="add-button-container">
                <Button id="add-ingredient" onClick={(e) => showMenu(e)}>+ Add ingredient</Button>
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

        <Button onClick={() => getSearchResults(name, Object.keys(chosenIngredients))}>
          You know what I'm talking about, eh?
        </Button>
      </form>
      <section id="results">
        <h2 className="text-container">Here go results!</h2>
      </section>
    </div>
  )
};