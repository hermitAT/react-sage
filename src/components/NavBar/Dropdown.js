import React from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.scss';


export default function Dropdown(props) {
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
        <li>Ingredients
          <ul className='third-level-menu'>
            <li>Spirits
              <ul className='fourth-level-menu'>
                <li>Vodka</li>
                <li>Gin</li>
                <li>Light Rum</li>
                <li>Gold Rum</li>
                <li>Dark Rum</li>
                <li>Spiced Rum</li>
              </ul>
              <ul className="fifth-level-menu">
                <li>Flavoured Rum</li>
                <li>Whiskey</li>
                <li>Scotch</li>
                <li>Bourbon</li>
                <li>Rye</li>
                <li>Brandy</li>
                <li>Tequila</li>
              </ul>
            </li>
            <li>Liqueurs
              <ul className='fourth-level-menu'>
                <li>Amaretto</li>
                <li>Aperol</li>
                <li>Benedictine</li>
                <li>Campari</li>
                <li>Chambord</li>
                <li>Chartreuse</li>
                <li>Cointreau</li>
                <li>Creme de Cacao</li>
                <li>Creme de Menthe</li>
              </ul>
              <ul className="fifth-level-menu">
                <li>Cynar</li>
                <li>Frangelico</li>
                <li>Galliano</li>
                <li>Goldschlager</li>
                <li>Grand Marnier</li>
                <li>Jagermeister</li>
                <li>Kahlua</li>
                <li>Limoncello</li>
                <li>Southern Comfort</li>
                <li>Triple Sec</li>
              </ul>
            </li>
            <li>Mixers
              <ul className='fourth-level-menu'>
                <li>Ginger Beer</li>
                <li>Ginger Ale</li>
                <li>Lemonade</li>
                <li>Cola</li>
                <li>7UP</li>
                <li>Tonic Water</li>
              </ul>
              <ul className="fifth-level-menu">
                <li>Soda Water</li>
                <li>Lemon Juice</li>
                <li>Lime Juice</li>
                <li>Cranberry Juice</li>
                <li>Orange Juice</li>
                <li>Pineapple Juice</li>
                <li>Grapefruit Juice</li>
              </ul>
            </li>
            <li>Grocery
              <ul className='fourth-level-menu'>
                <li>Milk</li>
                <li>Chocolate Sauce</li>
                <li>Olives</li>
                <li>Grenadine</li>
                <li>Egg Whites</li>
              </ul>
              <ul className="fifth-level-menu">
                <li>Clamato Juice</li>
                <li>Tomato Juice</li>
                <li>Whipped Cream</li>
                <li>Hot Sauce</li>
                <li>Worchestershire</li>
                <li>Bitters</li>
              </ul>
            </li>
          </ul>
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