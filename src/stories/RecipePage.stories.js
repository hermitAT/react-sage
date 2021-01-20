import React from "react";
import "index.scss";
import RecipePage from "components/RecipePage";

const recipe = {
  recipe: {
    "id": 4,
    "name": "Old Ghosty Ray",
    "summary": "Efficiently unleash cross-media information without cross-media value",
    "instruction": "\n  1. Pharetra convallis posuere morbi leo. Dis parturient montes nascetur ridiculus mus mauris.\n  2. Adipiscing bibendum est ultricies integer quis auctor elit.\n  3. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.\n  4. Interdum velit laoreet id donec ultrices tincidunt.\n  ",
    "image_url": "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hee/ha4/12034965241886.png",
    "parent_id": 37,
    "result_strength": 167,
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
      "id": 157,
      "text": "Efficiently unleash cross-media information without cross-media value",
      "recipe_id": 4,
      "user_id": 10,
      "created_at": "2020-10-18T21:49:00.000Z",
      "updated_at": "2021-01-18T23:21:50.673Z"
    },
    {
      "id": 213,
      "text": "Williamsburg gentrify man bun fanny pack yuccie flexitarian master cleanse, keffiyeh iceland sustainable. VHS hammock YOLO health goth",
      "recipe_id": 4,
      "user_id": 2,
      "created_at": "2020-07-10T07:43:00.000Z",
      "updated_at": "2021-01-18T23:21:50.869Z"
    },
    {
      "id": 219,
      "text": "Dramatically maintain clicks-and-mortar solutions without functional solutions",
      "recipe_id": 4,
      "user_id": 10,
      "created_at": "2020-07-04T14:07:00.000Z",
      "updated_at": "2021-01-18T23:21:50.896Z"
    },
    {
      "id": 237,
      "text": "Dynamically innovate resource-leveling customer service for state of the art customer service",
      "recipe_id": 4,
      "user_id": 4,
      "created_at": "2020-07-23T07:34:00.000Z",
      "updated_at": "2021-01-18T23:21:50.953Z"
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
