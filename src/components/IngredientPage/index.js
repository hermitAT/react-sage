import React from "react";
import classnames from "classnames";
import "./IngredientPage.scss";
import BriefInfo from "./BriefInfo";

export default function IngredientPage(props) {


   return (
    <div id="name-brief-image">
      <div id="name-brief">
        <h1>{props.name}</h1>
        <BriefInfo
          strength={props.strength}
          flavour={props.flavour}
          category={props.category}
        >
        </BriefInfo>
      </div>
      <img src={props.image_url} alt={props.name}></img>
    </div>
    );
}