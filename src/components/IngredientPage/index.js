import React from "react";
import classnames from "classnames";
import "./IngredientPage.scss";
import BriefInfo from "./BriefInfo";
import DescTop from "./DescTop"

export default function IngredientPage(props) {

const {
  strength,
  flavour,
  category,
  name,
  image_url,
  description,
  top5
} = props

  return (
    <div>
      <div id="name-brief-image">
        <div id="name-brief">
          <h1>{name}</h1>
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
        top5={top5}
      ></DescTop>
    </div>
  );
}