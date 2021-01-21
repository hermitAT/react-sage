import React from "react";
import "./RecipePage.scss";
import { func } from "prop-types";
import NameAndControls from "./NameAndConrols";
import ImgDescrIngr from "./ImgDescrIngr";
import StatsInstruction from "./StatsInstruction"
import CommentsFeed from "./CommentsFeed"

export default function RecipePage(props) {

  const {
    recipe,
    rating,
    ingredients,
    comments,
    users_favourited,
  } = props

  const {
    name,
    summary,
    instruction,
    image_url,
    result_strength,
    flavour_id
  } = recipe

  return (
    <div id="recipe-page">

    <NameAndControls
      name={name}
    ></NameAndControls>

    <ImgDescrIngr
      name={name}
      image_url={image_url}
      summary= {summary}
      ingredients= {ingredients}
    ></ImgDescrIngr>


    <StatsInstruction
      flavour_id={flavour_id}
      result_strength={result_strength}
      instruction={instruction}
    ></StatsInstruction>  

    <CommentsFeed
      comments={comments}
    ></CommentsFeed>

    </div>
  );
}