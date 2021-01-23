import { useState, useEffect } from "react";
import axios from 'axios';

export default function useUserData() {
  const [user, setUser] = useState("");
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    axios.get('api/users/1')
      .then(all => {
        setUser(prev => all.data)
      })
      .catch(e => console.error(e));
  }, []);

  const getUserRecipe = function(arr) {
    axios.get('api/recipes/fetch', { 'headers': { 'ids': arr } })
      .then(all => {
      setRecipes(prev => all.data.recipes)
      console.log("all", all.data)
    })
    .catch(e => console.error(e));
  }

  return { user, recipes, getUserRecipe };
  
};
