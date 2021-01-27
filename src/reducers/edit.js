export const EDIT_TEXT_FIELD = "ADD_TEXT_FIELD";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const RESET_INGREDIENTS = "RESET_INGREDIENTS";
export const SET_INGREDIENTS = "SET_INGREDIENTS";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

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

      case REMOVE_INGREDIENT:
        const new_ingredients = state.ingredients_new.filter(i => i.id !== action.id);
  
        return {
          ...state,
          ingredients_new: new_ingredients
        }
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  };
};