export const ADD_TEXT_FIELD = "ADD_TEXT_FIELD";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const RESET_INGREDIENTS = "RESET_INGREDIENTS";
export const SET_INGREDIENT_LIST = "SET_INGREDIENT_LIST";

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

    case RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: ""
      };

    case SET_INGREDIENT_LIST:
      return {
        ...state,
        ingredient_list: action.ingredient_list
      };
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  };
};