export const EDIT_TEXT_FIELD = "ADD_TEXT_FIELD";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const RESET_INGREDIENTS = "RESET_INGREDIENTS";
export const SET_STATIC_DATA = "SET_INGREDIENT_LIST";

export default function reducer(state, action) {
  switch(action.type) {

    case EDIT_TEXT_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };

    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients_new: [ ...state.ingredients_new, action.ingredient ]
      };

    case RESET_INGREDIENTS:
      return {
        ...state,
        ingredients_new: ""
      };

    case SET_STATIC_DATA:
      return {
        ...state,
        ingredient_list: action.data.ingredient_list
      };
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  };
};