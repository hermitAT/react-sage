import { useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer, {
  SET_SEARCH_DATA
} from 'reducers/search';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    categories: []
  });

  useEffect(() => {
    axios.get('/api')
      .then(all => {
        const data = all.data;
        dispatch({ type: SET_SEARCH_DATA, data})
      })
      .catch(e => console.error(e));
  }, []);

  return { state };
};