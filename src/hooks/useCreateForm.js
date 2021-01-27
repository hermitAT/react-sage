import { useReducer } from "react";
import axios from "axios";
import reducer, {
  ADD_TEXT_FIELD,
  ADD_INGREDIENT,
  RESET_INGREDIENTS,
  REMOVE_INGREDIENT
} from "reducers/create";

export default function useCreateForm() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    image_url: "",
    parent_id: "",
    flavour_id: "",
    summary: "",
    instruction: "",
    ingredients: ""
  });

  const onChangeValue = (e) => {
    dispatch({
      type: ADD_TEXT_FIELD,
      field: e.target.name,
      value: e.target.value
    });
  };

  const onIngredient = (ingredient) => {
    dispatch({ type: ADD_INGREDIENT, ingredient: ingredient });
  };

  const removeIngredient = (ingredient) => {
    dispatch({ type: REMOVE_INGREDIENT, ingredient: ingredient });
  };

  const resetIngredients = () => {
    dispatch({ type: RESET_INGREDIENTS });
  };

  const createRecipe = (recipe_fields, ingredients) => {
    const recipe = {
      ...recipe_fields
    };

    return axios
      .post("/api/recipes", { recipe, ingredients })
      .then((all) => {
        return all.data;
      })
      .catch((e) => console.error(e));
  };

  return {
    state,
    onChangeValue,
    onIngredient,
    resetIngredients,
    createRecipe,
    removeIngredient
  };
}
