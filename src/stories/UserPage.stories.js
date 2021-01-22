import React from "react";
import UserPage from "components/UserPage";
export default {title: "user"};

const user = {
  "user": {
      "id": 1,
      "name": "John Black",
      "user_avatar": "https://avatars.dicebear.com/api/jdenticon/JohnBlack.svg",
      "created_at": "2018-10-21T10:27:00.000Z"
  },
  "recipes_id": [
      14,
      32,
      37,
      41,
      47
  ],
  "favorites_id": [
      29,
      12,
      84,
      78,
      57,
      16,
      44,
      1,
      34,
      76,
      8,
      41,
      6,
      47,
      64,
      69,
      21,
      49,
      7,
      5,
      81,
      2,
      19
  ]
}

export const primary = () => <UserPage
  name={user.user.name}
  user_avatar={user.user.user_avatar}
  created_at={user.user.created_at}
  recipes_id={user.recipes_id}
  favorites_id={user.favorites_id}
></UserPage>
