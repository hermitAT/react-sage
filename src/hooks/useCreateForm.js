import { useReducer } from 'react';
// import axios from 'axios';
import reducer from 'reducers/create';

export default function useCreateForm() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    image_url: "",
    flavour_id: "",
    summary: "",
    instruction: [],
    ingredients: []
  });

  const onChangeValue = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  return { state, onChangeValue };
};