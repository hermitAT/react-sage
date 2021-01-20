import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import IngredientPage from "components/IngredientPage";


const recipes = [
  {
      "id": 11,
      "name": "Disloyal Sunrise",
      "rating": 3.0
  },
  {
      "id": 13,
      "name": "Disloyal Galaxy",
      "rating": 2.0
  },
  {
      "id": 16,
      "name": "Black Daring Sunrise",
      "rating": 3.0
  },
  {
      "id": 32,
      "name": "Gloomy Apple",
      "rating": 2.5
  },
  {
      "id": 42,
      "name": "Daring Broccoli",
      "rating": 4.0
  },
  {
      "id": 49,
      "name": "Daring Garden",
      "rating": 3.5
  },
  {
      "id": 54,
      "name": "Shady Apple",
      "rating": 4.0
  },
  {
      "id": 82,
      "name": "Sparkling Beach",
      "rating": 5.0
  }
];

const ingredient = {
  name: 'Gin',
  image_url: "https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2019/06/thumbnail_Kopparberg-Premium-Gin-e1556727105773.png",
  strength: 450,
  flavour: 'Bitter',
  category: 'Spirits',
  description: `Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries (Juniperus communis). Gin originated as a medicinal liquor made by monks and alchemists across Europe, particularly in southern France, Flanders and the Netherlands, to provide aqua vita from distillates of grapes and grains. It then became an object of commerce in the spirits industry. Gin emerged in England after the introduction of the jenever, a Dutch and Belgian liquor that was originally a medicine. Although this development had been taking place since the early 17th century, gin became widespread after the William of Orange-led 1688 Glorious Revolution and subsequent import restrictions on French brandy.`,
  top5: recipes.sort((a, b) => (b.rating > a.rating) ? 1: -1).slice(0, 5),
}

export default { title: 'IngredientPage' };
export const primary = () => <IngredientPage
    name={ingredient.name}
    image_url={ingredient.image_url}
    strength={ingredient.strength}
    flavour={ingredient.flavour}
    category={ingredient.category}
    description={ingredient.description}
    top5={ingredient.top5}
  >
  </IngredientPage>