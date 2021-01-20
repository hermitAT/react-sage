import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer, {
  SET_HOME_DATA
} from 'reducers/home';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    daily_cocktail: {},
    most_pop_alc: {},
    most_pop_non: {},
    flavours: []
  });

  useEffect(() => {
    axios.get('/api')
      .then(all => {
        console.log(all);
        const data = all.data;
        dispatch({ type: SET_HOME_DATA, data})
      })
      .catch(e => console.error(e));
  }, []);

  return { state };
};