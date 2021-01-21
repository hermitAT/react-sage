import React from 'react';

import './index.scss'

export default function Create(props) {

  return (
    <main className='recipe__form'>
      <h2>Create your recipe!</h2>
      <form autoComplete='off' onSubmit={e => e.preventDefault()}>
        <div className='recipe__form--header'>
          <div className='recipe__form--header_inputs'>
            <h4>Name of Recipe:</h4>
            <textarea className='recipe__form--text' type='text' name='name' placeholder='...' />
          </div>
          <div className='recipe__form--header_inputs'>
            <h4>Image URL:</h4>
            <input className='recipe__form--text' type='text' name='image_url' placeholder='http://...' />
          </div>
        </div>
        
        <h4>Summary:</h4>
        <textarea className='recipe__form--paragraph' name='summary' placeholder='Write something...'></textarea>
        
        <div className='recipe__form--selectors'>
        <h4>Select Flavour:</h4>
        <select className='recipe__form--flavour' name='flavour'>
          <option value='sweet'>Sweet</option>
          <option value='sour'>Sour</option>
          <option value='salty'>Salty</option>
          <option value='spicy'>Spicy</option>
          <option value='bitter'>Sweet</option>
        </select>
        </div>
        
        <h4>Instruction:</h4>
        <textarea className='recipe__form--paragraph' name='instruction' placeholder='Write something...'></textarea>

        <button type='submit'>Submit</button>

      </form>
    </main>

  )


};