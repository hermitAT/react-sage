//import Button from 'components/Button';
import Button from 'components/Button';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './SearchPage.scss';

//import RecipeCard from '../RecipeCard';



export default function SearchPage(props) {

  const { categories } = props

  const [name, setName] = useState('');
  const [chosen_ingredients, setIngredient] = useState([]);

  const DropM = function(props) {
    let {x, y} = props;
    y += 50
    x -= 50
    const style = {float: 'left', position: 'absolute', top: y + 'px', left: x + 'px'}
    return (
      <div id="drop-menu" style={style}>
        {categories.map((category, index) => (
        <div key={index} className="category-element">
          <mark className="category">{category.name}</mark>
          <div id="ingredients">{category.ingredients.map((ingredient, index) => (
            <button className="ingredient-element" key={index} onClick={() => 
              clickIngredient(ingredient.id) }>{ingredient.name}</button>
          ))}</div>
        </div>))}
        
      </div>
    )
  }

  const clickIngredient = function(id) {
    setIngredient(chosen_ingredients => [...chosen_ingredients, id])
    ReactDOM.unmountComponentAtNode(document.getElementById('drop-menu-container'))
  }

  const showMenu = function(e) {
    const { pageX, pageY } = e
    ReactDOM.render(<DropM x={pageX} y={pageY}></DropM>, document.getElementById('drop-menu-container'))

  }
  return (
    <div id="search-page">
      <form id="barthender" autoComplete="off" onSubmit={event => {
        event.preventDefault()
        //console.log(event)
      }}>
        <h1 className="text-container">Hey Barthender! Pour me something...</h1>

        <div id="named-with" className="row-group">

          <div id="named">
            <h3 className="text-container">...named like...</h3>
            <input
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
              <div id="selected-ingredients">
                {chosen_ingredients.map(ingredient => (<p>{ingredient}</p>))}
              </div>

              <Button onClick={(e) => showMenu(e)}>+ Add ingredient</Button>
              <div id="drop-menu-container">
              </div>
            </div>
          </div>
        </div>

        <Button onClick={() => console.log(name, chosen_ingredients)}>You know what I'm talking about, eh?</Button>
      </form>
      <section id="results">
        <h2 className="text-container">Here go results!</h2>
      </section>
    </div>
  )
};