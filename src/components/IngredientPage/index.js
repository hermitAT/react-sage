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
    description: "",
    top5: "",
    flavours: "",
    categories: ""
  })

  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      axios.get(`/api/ingredients/${id}`),
      axios.get(`/api`)
    ]).then(all => {
        dispatch({ type: SET_INGREDIENT_DATA, all });
      })
      .catch((e) => console.error(e));
  }, [id]);

  const {
    strength,
    flavour_id,
    category_id,
    name,
    image_url,
    description,
    top5,
    flavours,
    categories
  } = state;

  return (
    <div id="ingredient-page">
      {top5 && (
      <>
      <div id="name-brief-image" class="row-group">
        <div id="name-brief">
          <h1 class="text-container">{name}</h1>
          <BriefInfo
            strength={strength}
            flavour_id={flavour_id}
            category_id={category_id}
            flavours={flavours}
            categories={categories}
          >
          </BriefInfo>
        </div>
        <img src={image_url} alt={name}></img>
      </div>
      <DescTop
        name={name}
        description={description}
        top5={top5}
      ></DescTop>
      </>
      )}
    </div>
  );
}