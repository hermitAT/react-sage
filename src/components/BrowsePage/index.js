import Button from 'components/Button';
import RecipeList from 'components/RecipeList';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "./index.scss"
import { strengthWordize } from "helpers/recipeHelpers"

import useSearchData from "hooks/useSearchData";



export default function BrowsePage(props) {
  const { state } = useSearchData();

  //const { categories } = state;

  const history = useHistory();
  const { cat, val } = useParams();
  const [searchResults, setSearchResults] = useState('');

  useEffect(() => {
    
    let query = '';
    switch (cat) {
      case 'flavour':
        query += `flavour_id=${val}`;
      break;

      case 'strength':
        const strengthRange = strengthWordize(val, true)
        if (!Array.isArray(strengthRange)) {
          query += 'result_strength=0'
        } else {
          query += `result_strength=[${strengthRange[0]},${strengthRange[1]}]`
        }
      break;
      
      default:
        history.replace('/')
    }
    return axios.get(`/api/recipes/search?${query}`)
    .then(all => {
      setSearchResults(prev => all.data.result)
    })
      .catch(e => console.error(e))
  }, []);

  return (
    <div className="browse__page">
    {searchResults && (
      <>
      <h1 className="text-container" id="browse__page-head">Browse by {`${cat.slice(0, 1).toUpperCase()}${cat.slice(1)}`}</h1>
      <RecipeList user={props.user} pages={searchResults.relevance}/>
      </>
    )}
    </div>
  )
}