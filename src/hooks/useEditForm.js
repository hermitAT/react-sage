import axios from "axios";

export default function useEditForm() {
  const recipeForked = (recipe_fields, ingredients) => {
    const recipe = {
      ...recipe_fields
    };

    return axios
      .post("/api/recipes", { recipe, ingredients })
      .then((all) => {
        return all.data;
      })
      .catch((e) => console.error(e));
  };

  const recipeEdited = (id, recipe_fields, ingredients) => {
    const recipe = {
      ...recipe_fields
    };

    return axios
      .put(`/api/recipes/${id}`, { recipe, ingredients })
      .then((all) => {
        return all.data;
      })
      .catch((e) => console.error(e));
  };

  return { recipeForked, recipeEdited };
}
