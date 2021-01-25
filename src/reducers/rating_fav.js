export const SET_RATING = "SET_RATING";
export const SET_FAVORITES = "SET_FAVORITE";

export default function reducer(state, action) {
  switch(action.type) {

    case SET_RATING:
      return {
        ...state,
        avg_rating: action.avg_rating
      };
    
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites
      }
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}