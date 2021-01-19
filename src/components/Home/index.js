import React from 'react';

import RecipeCard from '../RecipeCard';

import './index.scss';

export default function Home(props) {
  return (
    <main className='home__layout'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </main>
  )
};