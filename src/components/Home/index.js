import React from 'react';

import './index.scss';

import RecipeCard from '../RecipeCard';
import useHomeData from 'hooks/useHomeData';


export default function Home(props) {

  const { state } = useHomeData();

  const { daily_cocktail, most_pop_alc, most_pop_non, flavours } = state;

  return (
    <main className='home__layout'>
      {daily_cocktail.recipe && <RecipeCard recipe={daily_cocktail} flavours={flavours} />}
      {most_pop_alc.recipe && <RecipeCard recipe={most_pop_alc} flavours={flavours} />}
      {most_pop_non.recipe && <RecipeCard recipe={most_pop_non} flavours={flavours} />}
    </main>
  )
};