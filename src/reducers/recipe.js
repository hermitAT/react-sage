export const SET_RECIPE_DATA = "SET_HOME_DATA";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_RECIPE_DATA:
      return {
        ...state,
        recipe: action.recipe[0].recipe,
        rating: action.recipe[0].rating,
        ingredients: action.recipe[0].ingredients,
        comments: action.recipe[0].comments,
        users_favourited: action.recipe[0].users_favourited,
        parent: action.recipe[0].parent,
        users_rated: action.recipe[0].users_rated
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
