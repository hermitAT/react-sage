import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useVisualMode from "hooks/useVisualMode";
import { formatStrength, formatFlavour, formatRating } from 'helpers/recipeFormatters';
import IngredientList from "./IngredientsList";
import Button from "components/Button";

import './FunFactCard.scss';
import 'components/Create/index.scss';

export default function FunFactCard(props) {

  const background = {
    backgroundImage: `url(${props.image_url})`
  };

  const handleClick = function(id) {
    //history.push(`/recipes/${id}`);
  };

  return (
    <div className='recipe__card'>
      <header>
        <div className='recipe__card--header' style={background} ></div>
        <div className='recipe__card--title did-you-know'>
          <h2 className='recipe__card--title-h2 did-you-know__h2'>Did you know? . . .</h2>
        </div>

      </header>
      <article className='recipe__card--list'>
        <div className='recipe__card--summary funfact-text' >
            <div>. . . that {props.text}.</div>
        </div>
      </article>
        
      <div className='recipe__card--badges'>
        <div className='recipe__card--details button-know-more' onClick={() => console.log('zzz')}>
          <FontAwesomeIcon icon='book-open' size='lg' />
          <p>What to know more?</p>
        </div>
        </div>
        
    </div>
  )
}