import { useReducer } from "react";
import axios from "axios";
import reducer, {
  SET_RATING,
  SET_FAVORITES
} from "reducers/rating_fav";

export default function useRatingFav() {
  const [state, dispatch] = useReducer(reducer, {
    avg_rating: "",
    favorites: ""
  })

  const sendRating = function(user_id, recipe_id, value) {
    return axios.post(`/api/recipes/${recipe_id}/ratings`, { user_id, value })
      .then(all => {
        const avg_rating = all.data.avg_rating;
        dispatch({ type: SET_RATING, avg_rating})
      })
      .catch(e => console.error(e));
  }

  const sendFavorite = function(user, recipe_id) {
    return axios.post(`/api/recipes/${recipe_id}/favorites`, { user_id: user})
      .then(all => {
        const favorites = all.data.num_of_favs;
        dispatch({ type: SET_FAVORITES, favorites})
      })
      .catch(e => console.error(e));
  }

  const updateInitial = function(avg_rating, favorites) {
    dispatch({ type: SET_RATING, avg_rating });
    dispatch({ type: SET_FAVORITES, favorites });
  }

  return { state, sendRating, sendFavorite, updateInitial };


}