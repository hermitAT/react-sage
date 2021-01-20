import React from 'react';

import RecipeCard from '../RecipeCard';

import './index.scss';

export default function Home(props) {

  const { daily_cocktail, most_pop_alc, most_pop_non, flavours } = props.data;
  console.log(props.recipes);

  return (
    <main className='home__layout'>
      {daily_cocktail.recipe && <RecipeCard recipe={daily_cocktail} flavours={flavours} />}
      {most_pop_alc.recipe && <RecipeCard recipe={most_pop_alc} flavours={flavours} />}
      {most_pop_non.recipe && <RecipeCard recipe={most_pop_non} flavours={flavours} />}
    </main>
  )
};