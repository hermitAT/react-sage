import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './RecipeCard.scss';

export default function RecipeCard(props) {
  return (
    <div className='recipe__card'>
      <header>
        <div className='recipe__card--header'></div>
        <div className='recipe__card--title'>Old Fashioned</div>
        <div className='recipe__card--tags'>
          <div class='recipe__card--strength'>Strong</div>
          <div class='recipe__card--flavour'>Bitter, Balanced</div>
        </div>
      </header>
      <article className='recipe__card--list'>
        <ul className='recipe__card--ingredients'>
          <li>
            <div className='amount'>2oz</div>
            <div className='ingredient'>Whiskey</div>
          </li>
          <li>
            <div className='amount'>dash</div>
            <div className='ingredient'>Sugar</div>
          </li>
          <li>
            <div className='amount'>dash</div>
            <div className='ingredient'>Bitters</div>
          </li>
          <li>
            <div className='amount'>press</div>
            <div className='ingredient'>Water</div>
          </li>
        </ul>
        <div className='recipe__card--summary'>
            <div>A simple classic, with sugar and bitters mixed with a press of water adding additional characteristics to the whiskey. A favourite of Don Draper.</div>
        </div>
      </article>
      <div className='recipe__card--badges'>
        <FontAwesomeIcon icon='bookmark' size='lg' />
        <FontAwesomeIcon icon='star-half-alt' size='lg' />
        <FontAwesomeIcon icon='comments' size='lg'/>
      </div>
    </div>
  )
}