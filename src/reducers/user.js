export const SET_USER_RECIPES = "SET_USER_RECIPES";
export const SET_PAGES = "SET_PAGES";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_USER_RECIPES:
      return {
        ...state,
        user: action.user,
        created_recipes: action.user.my_recipes,
        favorite_recipes: action.user.my_favorites,
        pages: action.user.my_recipes
      };

    case SET_PAGES:
      return {
        ...state,
        pages: action.pages
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
