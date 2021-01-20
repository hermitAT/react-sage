import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import IngredientPage from "components/IngredientPage";


const ingredient = {
  name: 'Gin',
  image_url: "https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2019/06/thumbnail_Kopparberg-Premium-Gin-e1556727105773.png",
  strength: 450,
  flavour: 'Bitter',
  category: 'Spirits'
}

export default { title: 'IngredientPage' };
export const primary = () => <IngredientPage
    name={ingredient.name}
    image_url={ingredient.image_url}
    strength={ingredient.strength}
    flavour={ingredient.flavour}
    category={ingredient.category}
  >
  </IngredientPage>