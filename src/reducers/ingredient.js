export const SET_INGREDIENT_DATA = "SET_HOME_DATA";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_INGREDIENT_DATA:

      const top5 = action.all[0].data.ingredient[0].recipes.sort((a, b) => b.rating - a.rating).slice(0, 5);

      return {
        ...state,
        strength: action.all[0].data.ingredient[0].ingredient.strength,
        flavour_id: action.all[0].data.ingredient[0].ingredient.flavour_id,
        category_id: action.all[0].data.ingredient[0].ingredient.category_id,
        name: action.all[0].data.ingredient[0].ingredient.name,
        image_url: action.all[0].data.ingredient[0].ingredient.image_url,
        description: action.all[0].data.ingredient[0].ingredient.description,
        top5: top5,
        flavours: action.all[1].data.flavours,
        categories: action.all[1].data.categories
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
