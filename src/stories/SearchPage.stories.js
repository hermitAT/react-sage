import React from 'react';
import SearchPage from 'components/SearchPage';


const categories = [
  {
      "id": 1,
      "name": "Spirits",
      "ingredients": [
          {
              "id": 13,
              "name": "Rye"
          },
          {
              "id": 12,
              "name": "Bourbon"
          },
          {
              "id": 11,
              "name": "Scotch"
          },
          {
              "id": 10,
              "name": "Whiskey"
          },
          {
              "id": 9,
              "name": "Vodka"
          },
          {
              "id": 8,
              "name": "Tequila"
          },
          {
              "id": 7,
              "name": "Flavored Rum"
          },
          {
              "id": 6,
              "name": "Spiced Rum"
          },
          {
              "id": 5,
              "name": "Dark Rum"
          },
          {
              "id": 4,
              "name": "Gold Rum"
          },
          {
              "id": 3,
              "name": "Light Rum"
          },
          {
              "id": 2,
              "name": "Gin"
          },
          {
              "id": 1,
              "name": "Brandy"
          }
      ]
  },
  {
      "id": 2,
      "name": "Liquers",
      "ingredients": [
          {
              "id": 14,
              "name": "Amaretto"
          },
          {
              "id": 15,
              "name": "Aperol"
          },
          {
              "id": 16,
              "name": "Benedictine"
          },
          {
              "id": 17,
              "name": "Campari"
          },
          {
              "id": 18,
              "name": "Chambord"
          },
          {
              "id": 19,
              "name": "Chartreuse"
          },
          {
              "id": 20,
              "name": "Cointreau"
          },
          {
              "id": 21,
              "name": "Creme de Cacao"
          },
          {
              "id": 22,
              "name": "Creme de Menthe"
          },
          {
              "id": 23,
              "name": "Cynar"
          },
          {
              "id": 24,
              "name": "Frangelico"
          },
          {
              "id": 25,
              "name": "Galliano"
          },
          {
              "id": 26,
              "name": "Goldschlager"
          },
          {
              "id": 27,
              "name": "Grand Marnier"
          },
          {
              "id": 28,
              "name": "Jagermeister"
          },
          {
              "id": 29,
              "name": "Kahlua"
          },
          {
              "id": 30,
              "name": "Limoncello"
          },
          {
              "id": 31,
              "name": "Southern Comfort"
          },
          {
              "id": 32,
              "name": "Triple Sec"
          }
      ]
  },
  {
      "id": 3,
      "name": "Mixers",
      "ingredients": [
          {
              "id": 45,
              "name": "Grapefruit juice"
          },
          {
              "id": 44,
              "name": "Ginger beer"
          },
          {
              "id": 43,
              "name": "Sprite/7UP"
          },
          {
              "id": 42,
              "name": "Lemonade"
          },
          {
              "id": 41,
              "name": "Pineapple juice"
          },
          {
              "id": 40,
              "name": "Orange juice"
          },
          {
              "id": 39,
              "name": "Cranberry juice"
          },
          {
              "id": 38,
              "name": "Lime juice"
          },
          {
              "id": 37,
              "name": "Lemon juice"
          },
          {
              "id": 36,
              "name": "Ginger Ale"
          },
          {
              "id": 35,
              "name": "Tonic water"
          },
          {
              "id": 34,
              "name": "Soda water"
          },
          {
              "id": 33,
              "name": "Cola"
          }
      ]
  },
  {
      "id": 4,
      "name": "Grocery",
      "ingredients": [
          {
              "id": 56,
              "name": "Bitters"
          },
          {
              "id": 55,
              "name": "Worchestershire sauce"
          },
          {
              "id": 54,
              "name": "Hot sauce"
          },
          {
              "id": 53,
              "name": "Whipped cream"
          },
          {
              "id": 52,
              "name": "Tomato juice"
          },
          {
              "id": 51,
              "name": "Clamato juice"
          },
          {
              "id": 50,
              "name": "Egg whites"
          },
          {
              "id": 49,
              "name": "Grenadine"
          },
          {
              "id": 48,
              "name": "Olives"
          },
          {
              "id": 47,
              "name": "Chocolate sauce"
          },
          {
              "id": 46,
              "name": "Milk"
          }
      ]
  }
]


export default { title: 'SearchPage' };

export const Primary = () => <SearchPage categories={categories}></SearchPage>;