import { useState, useEffect } from "react";
import axios from 'axios';

export default function useUserData() {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get('/api/users/1')
      .then(all => {
        setUser(prev => all.data)
      })
      .catch(e => console.error(e));
  }, []);
  console.log(user)
  return { user };
  
};
