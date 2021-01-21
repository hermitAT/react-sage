import React from "react";
import "index.scss";
import RecipePage from "components/RecipePage";

const recipe = {
  recipe: {
    "id": 4,
    "name": "Old Ghosty Ray",
    "summary": "Efficiently unleash cross-media information without cross-media value",
    "instruction": "[\"Poke synth literally aesthetic schlitz\", \"Mustache cronut cold-pressed, artisan banh mi\", \"Authentic roof party tacos bushwick\", \"Fashion axe organic vape hella celiac ugh\"]",
    "image_url": "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hee/ha4/12034965241886.png",
    "parent_id": 37,
    "result_strength": 950,
    "flavour_id": 3,
    "user_id": 6,
    "created_at": "2020-01-08T07:08:00.000Z",
    "updated_at": "2021-01-18T23:21:46.193Z"
  },
  rating: "4.0",
  ingredients: [
    {
      "47": {
        "Chocolate sauce": 5.0
      }
    },
    {
      "23": {
        "Cynar": 2.0
      }
    },
    {
      "9": {
        "Vodka": 2.0
      }
    }
  ],
  comments: [
    {
        "comment": {
            "id": 71,
            "text": "Dynamically innovate resource-leveling customer service for state of the art customer service",
            "recipe_id": 4,
            "user_id": 2,
            "created_at": "2020-07-26T10:14:00.000Z",
            "updated_at": "2021-01-21T00:34:49.460Z"
        },
        "user": {
            "id": 2,
            "name": "Morgan Maxwell",
            "user_avatar": "https://avatars.dicebear.com/api/jdenticon/MorganMaxwell.svg"
        }
    },
    {
        "comment": {
            "id": 135,
            "text": "Actually helvetica synth sartorial tattooed",
            "recipe_id": 4,
            "user_id": 4,
            "created_at": "2020-08-09T16:22:00.000Z",
            "updated_at": "2021-01-21T00:34:49.753Z"
        },
        "user": {
            "id": 4,
            "name": "Jeff Racoon",
            "user_avatar": "https://avatars.dicebear.com/api/jdenticon/JeffRacoon.svg"
        }
    },
    {
        "comment": {
            "id": 184,
            "text": "Bitters chia edison bulb disrupt next level flannel",
            "recipe_id": 4,
            "user_id": 3,
            "created_at": "2020-11-18T08:23:00.000Z",
            "updated_at": "2021-01-21T00:34:49.952Z"
        },
        "user": {
            "id": 3,
            "name": "Olga Einstein",
            "user_avatar": "https://avatars.dicebear.com/api/jdenticon/OlgaEinstein.svg"
        }
    },
    {
        "comment": {
            "id": 210,
            "text": "Efficiently unleash cross-media information without cross-media value",
            "recipe_id": 4,
            "user_id": 3,
            "created_at": "2020-11-12T03:58:00.000Z",
            "updated_at": "2021-01-21T00:34:50.062Z"
        },
        "user": {
            "id": 3,
            "name": "Olga Einstein",
            "user_avatar": "https://avatars.dicebear.com/api/jdenticon/OlgaEinstein.svg"
        }
    }
],
  users_favourited: [
    9,
    7,
    3
  ]
}




export default { title: 'RecipePage' };
export const primary = () => <RecipePage
  recipe={recipe.recipe}
  rating={recipe.rating}
  ingredients={recipe.ingredients}
  comments={recipe.comments}
  users_favourited={recipe.users_favourited}
>
</RecipePage>
