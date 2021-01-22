export const SET_INGREDIENT_DATA = "SET_HOME_DATA";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_INGREDIENT_DATA:
      return {
        ...state,
        strength: action.ingredient[0].ingredient.strength,
        flavour: action.ingredient[0].ingredient.flavour,
        category: action.ingredient[0].ingredient.category,
        name: action.ingredient[0].ingredient.name,
        image_url: action.ingredient[0].ingredient.image_url,
        description: action.ingredient[0].ingredient.description
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
