import { useReducer } from 'react';
// import axios from 'axios';
import reducer, {
  ADD_TEXT_FIELD,
  ADD_INGREDIENT,
  RESET_INGREDIENTS
} from 'reducers/create';

export default function useCreateForm() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    image_url: "",
    flavour_id: "",
    summary: "",
    instruction: [],
    ingredients: ""
  });

  const onChangeValue = (e) => {
    dispatch({ type: ADD_TEXT_FIELD, field: e.target.name, value: e.target.value })
  }

  const onIngredient = (ingredient) => {
    dispatch({ type: ADD_INGREDIENT, ingredient: ingredient });
  }

  const resetIngredients = () => {
    dispatch({ type: RESET_INGREDIENTS });
  }

  return { state, onChangeValue, onIngredient, resetIngredients };
};