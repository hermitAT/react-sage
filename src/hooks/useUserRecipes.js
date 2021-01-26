import { useReducer, useEffect } from "react";

import axios from 'axios';
import { useParams } from "react-router-dom"; 
import reducer, {
  SET_USER_RECIPES,
  SET_PAGES
} from "reducers/user";

export default function useUserData() {
  const [state, dispatch] = useReducer(reducer, {
    user: "",
    created_recipes: "",
    favorite_recipes: "",
    pages: ""
  });

  const { id } = useParams();

  useEffect(() => {
    return axios.get(`/api/users/${id}`)
      .then(all => {
        const user = all.data;
        dispatch({ type: SET_USER_RECIPES, user })
      })
      .catch(e => console.error(e));
  }, [id]);

  const getMyRecipes = function() {
    const pages = state.created_recipes;
    dispatch({ type: SET_PAGES, pages });
  }

  const getMyFavorites = function() {
    const pages = state.favorite_recipes;
    dispatch({ type: SET_PAGES, pages });
  }

  return { state, getMyRecipes, getMyFavorites };
  
};
