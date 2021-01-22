export const SET_HOME_DATA = "SET_HOME_DATA";

export default function reducer(state, action) {
  switch(action.type) {

    case SET_HOME_DATA:
      return {
        ...state,
        most_pop_alc: action.data.max_rating_alcohol,
        most_pop_non: action.data.max_rating_non_alcohol,
        daily_cocktail: action.data.recipe_of_the_day,
        flavours: action.data.flavours
      };
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}