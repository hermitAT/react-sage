import React from "react";
import "./UserPage.scss";
import Button from "components/Button";
import  { timeAgo } from "helpers/timeAgo";
import useUserData from "hooks/useUserData";
import RecipeList from "components/RecipeList";


const recipes = {
  "recipes": [
      {
          "recipe": {
              "id": 1,
              "name": "Disloyal Carrot",
              "summary": "Bitters chia edison bulb disrupt next level flannel",
              "instruction": "[\"YOLO asymmetrical taxidermy, knausgaard semiotics\", \"Fashion axe organic vape hella celiac ugh\", \"Bushwick cornhole pinterest migas disrupt\", \"Food truck direct trade lomo\", \"YOLO asymmetrical taxidermy, knausgaard semiotics\"]",
              "image_url": "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hee/ha4/12034965241886.png",
              "parent_id": 48,
              "result_strength": 394,
              "flavour_id": 1,
              "user_id": 9,
              "created_at": "2020-05-21T09:24:00.000Z",
              "updated_at": "2021-01-21T22:15:26.300Z"
          },
          "rating": "2.0",
          "ingredients": [
              {
                  "7": {
                      "Flavored Rum": 3.0
                  }
              },
              {
                  "9": {
                      "Vodka": 4.0
                  }
              },
              {
                  "11": {
                      "Scotch": 1.0
                  }
              }
          ],
          "comments": [
              {
                  "comment": {
                      "id": 142,
                      "text": "Banh mi keffiyeh put a bird on it whatever quinoa venmo, actually chicharrones lyft",
                      "recipe_id": 1,
                      "user_id": 5,
                      "created_at": "2020-09-02T22:24:00.000Z",
                      "updated_at": "2021-01-21T22:15:36.156Z"
                  },
                  "user": {
                      "id": 5,
                      "name": "Tyler Black",
                      "user_avatar": "https://avatars.dicebear.com/api/jdenticon/TylerBlack.svg"
                  }
              },
              {
                  "comment": {
                      "id": 165,
                      "text": "Vice cold-pressed activated charcoal williamsburg umami, tofu heirloom pug fingerstache banjo deep v plaid",
                      "recipe_id": 1,
                      "user_id": 9,
                      "created_at": "2020-09-14T15:58:00.000Z",
                      "updated_at": "2021-01-21T22:15:36.346Z"
                  },
                  "user": {
                      "id": 9,
                      "name": "Anna Sikorski",
                      "user_avatar": "https://avatars.dicebear.com/api/jdenticon/AnnaSikorski.svg"
                  }
              },
              {
                  "comment": {
                      "id": 194,
                      "text": "Dramatically visualize customer directed convergence without revolutionary ROI",
                      "recipe_id": 1,
                      "user_id": 1,
                      "created_at": "2020-07-23T05:40:00.000Z",
                      "updated_at": "2021-01-21T22:15:36.680Z"
                  },
                  "user": {
                      "id": 1,
                      "name": "John Black",
                      "user_avatar": "https://avatars.dicebear.com/api/jdenticon/JohnBlack.svg"
                  }
              }
          ],
          "users_favourited": [
              5,
              1,
              2
          ]
      }
  ]
}


export default function User(props) {

const { getUserRecipe, recipes } = useUserData();
 
  return (

    <div id="user-page">
      {props.user &&  (
      <>
      <div id="title-page" >
        <h2 class="text-container">Welcome back, {props.user.user.name}!</h2>
      </div>
      <div class="row-group">
        <div id="image-description">
          <img src={props.user.user.user_avatar} />
          <article class='text-container'>
            <p>joined CocktailSage {timeAgo(props.user.user.created_at)}</p>
            <p>created {props.user.recipes_id.length} recipe{props.user.recipes_id.length > 1 ? 's' : ''}</p>
            <p>{props.user.favorites_id.length} recipe{props.user.favorites_id.length > 1 ? 's are' : ' is'} favorite</p>
          </article>
        </div>
        <div className="recipe__list--container">
        <div id="recipe-favorite">
          <Button
            confirm
            onClick={() => getUserRecipe(props.user.recipes_id)}>
            My recipes
          </Button>
          <Button
            confirm
            onClick={() => getUserRecipe(props.user.favorites_id)}>
            Favorite recipes
          </Button>
        </div>
          { recipes && (
              <RecipeList recipes={recipes} />
          )}
        </div>
      </div>
      </> 
       )}
    </div>      
  );
}