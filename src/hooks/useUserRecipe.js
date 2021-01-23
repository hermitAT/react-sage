import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserRecipe() {
  const [user, setUser] = useState("");
  const [userRecipe, setUserRecipe] = useState("");

  useEffect(() => {
    axios.get('api/recipes/fetch', { 'headers': { 'ids': user.recipe_id } })
      
      .then(all => {
        setUserRecipe(prev => all.data)
      })
      .catch(e => console.error(e));
  }, []);
  console.log("user", user)
  return { userRecipe };
  
};