export const ADD_TEXT_FIELD = "ADD_TEXT_FIELD";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const RESET_INGREDIENTS = "RESET_INGREDIENTS";
export const SET_INGREDIENT_LIST = "SET_INGREDIENT_LIST";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

export default function reducer(state, action) {
  switch(action.type) {

    case ADD_TEXT_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };

    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [ ...state.ingredients, action.ingredient ]
      };

    case REMOVE_INGREDIENT:
      const new_ingredients = state.ingredients.filter(i => i.id !== action.ingredient);

      return {
        ...state,
        ingredients: new_ingredients
      }

    case RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: ""
      };
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  };
};