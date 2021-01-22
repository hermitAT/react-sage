import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import reducer, {
  SET_INGREDIENT_DATA
} from "reducers/ingredient";

import BriefInfo from "./BriefInfo";
import DescTop from "./DescTop";

import "./IngredientPage.scss";

export default function IngredientPage(props) {
  const [state, dispatch] = useReducer(reducer, {
    strength: "",
    flavour: "",
    category: "",
    name: "",
    image_url: "",
    description: ""
  })

  const { id } = useParams();

  useEffect(() => {
    return axios.get(`/api/ingredients/${id}`)
      .then(all => {
        const ingredient = all.data.ingredient;
        console.log(ingredient);
        dispatch({ type: SET_INGREDIENT_DATA, ingredient });
      })
      .catch((e) => console.error(e));
  }, [id]);

  const {
    strength,
    flavour,
    category,
    name,
    image_url,
    description
  } = state;

  return (
    <div id="ingredient-page">
      <div id="name-brief-image" class="row-group">
        <div id="name-brief">
          <h1 class="text-container">{name}</h1>
          <BriefInfo
            strength={strength}
            flavour={flavour}
            category={category}
          >
          </BriefInfo>
        </div>
        <img src={image_url} alt={name}></img>
      </div>
      <DescTop
        name={name}
        description={description}
      ></DescTop>
    </div>
  );
}