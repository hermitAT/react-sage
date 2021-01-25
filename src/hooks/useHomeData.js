import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer, {
  SET_HOME_DATA
} from 'reducers/home';

export default function useHomeData() {
  const [state, dispatch] = useReducer(reducer, {
    daily_cocktail: {},
    most_pop_alc: {},
    most_pop_non: {},
    flavours: [],
    categories: []
  });

  useEffect(() => {
    return axios.get('/api')
      .then(all => {
        const data = all.data;
        dispatch({ type: SET_HOME_DATA, data})
      })
      .catch(e => console.error(e));
  }, []);

  return { state };
};