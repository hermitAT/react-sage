import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './Dropdown.scss';

import useHomeData from "hooks/useHomeData";


export default function Dropdown(props) {

  const { state } = useHomeData();
  const { categories } = state;

  return (
    <ul className='top-level-menu'>
      <li>Browse by...
      <ul className='second-level-menu'>
          <li>Flavour
          <ul className='third-level-menu'>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/flavour/1`}>Sweet</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/flavour/2`}>Sour</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/flavour/3`}>Salty</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/flavour/4`}>Spicy</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/flavour/5`}>Bitter</Link></li>
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
              <li><Link className="dropmenu__ingredients__list" to={`/browse/strength/non`}>Non-Alcoholic</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/strength/weak`}>Weak</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/strength/mild`}>Mild</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/strength/medium`}>Medium</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/strength/strong`}>Strong</Link></li>
              <li><Link className="dropmenu__ingredients__list" to={`/browse/strength/very_strong`}>Very Strong</Link></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  )
};