import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './Dropdown.scss';

import useHomeData from "hooks/useHomeData";


export default function Dropdown(props) {

  const { state } = useHomeData();
  const { categories } = state;

  const MenuIngredients = function (props) {
    console.log(props)
    return (
      <div>
        {props.ingredients.map(ingredient => (
          <mark key={ingredient.id}>
            <a href={`/ingredients/${ingredient.id}`}>{ingredient.name}</a>
          </mark>)
        )}</div>
    )
  }
  //<section onMouseEnter={(() => showIngredients(categories[1]))}  id="dropmenu__liqueurs" className='dropmenu__ingredients-container'></section>

  const showIngredients = function (category) {
    { console.log(category.ingredients) }
    ReactDOM.render(<MenuIngredients ingredients={category.ingredients}></MenuIngredients>, document.getElementById('dropmenu__liqueurs'))
    //ReactDOM.render(<DropM           x={pageX} y={pageY}               ></DropM>,           document.getElementById('drop-menu-container'))
  }

  return (
    <ul className='top-level-menu'>
      <li>Browse by...
      <ul className='second-level-menu'>
          <li>Flavour
          <ul className='third-level-menu'>
              <li>Sweet</li>
              <li>Sour</li>
              <li>Salty</li>
              <li>Spicy</li>
              <li>Bitter</li>
            </ul>
          </li>
          <li className="dropmenu__ingredients_li">Ingredients
          <section className="dropmenu__categories__container">
              {categories.map(category => (
                <div key={category.id} className="dropmenu__categories__list">
                  <div className="dropmenu__categories__list__name">{category.name}</div>

                  <section className="dropmenu__ingredients__container">
                    {category.ingredients.map(ingredient => (
                      <Link className="dropmenu__ingredients__list" to={`/ingredients/${ingredient.id}`}>{ingredient.name}</Link>
                      //<a key={ingredient.id} href={`/ingredients/${ingredient.id}`} className="dropmenu__ingredients__list">{ingredient.name}</a>
                      // Not sure which to use, Link remains on screen after click
                    ))}
                  </section>
                </div>
              ))}
            </section>
          </li>
          <li>Strength
          <ul className='third-level-menu'>
              <li>Non-Alcoholic</li>
              <li>Weak</li>
              <li>Mild</li>
              <li>Medium</li>
              <li>Strong</li>
              <li>Very Strong</li>
            </ul>
          </li>
          <li>Popularity
          <ul className='third-level-menu'>
              <li>Highest Rating</li>
              <li>Most Comments</li>
              <li>Most Favorites</li>
              <li>Most reMixes</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  )
};