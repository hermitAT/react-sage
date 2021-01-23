import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer, {
  ADD_TEXT_FIELD,
  ADD_INGREDIENT,
  RESET_INGREDIENTS,
  SET_INGREDIENT_LIST
} from 'reducers/create';

export default function useCreateForm() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    image_url: "",
    parent_id: "",
    flavour_id: "",
    summary: "",
    instruction: "",
    ingredients: "",
    ingredient_list: ""
  });

  useEffect(() => {
    return axios.get("/api")
      .then(all => {
        dispatch({ type: SET_INGREDIENT_LIST, ingredient_list: all.data.ingredient_list});
      })
      .catch(e => console.error(e));
  }, []);


  const onChangeValue = (e) => {
    dispatch({ type: ADD_TEXT_FIELD, field: e.target.name, value: e.target.value })
  };

  const onIngredient = (ingredient) => {
    dispatch({ type: ADD_INGREDIENT, ingredient: ingredient });
  };

  const resetIngredients = () => {
    dispatch({ type: RESET_INGREDIENTS });
  };

  const createRecipe = (recipe_fields, ingredients) => {

    const recipe = {
      ...recipe_fields
    };

    return axios.post("/api/recipes", { recipe, ingredients })
      .then(all => {
        return all.data;
      })
      .catch(e => console.error(e));
  };

  return { state, onChangeValue, onIngredient, resetIngredients, createRecipe };
};