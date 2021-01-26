import RecipeList from 'components/RecipeList';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "./index.scss"
import { strengthWordize } from "helpers/recipeHelpers"


export default function BrowsePage(props) {

  const history = useHistory();
  const { cat, val } = useParams();
  const [searchResults, setSearchResults] = useState('');

  useEffect(() => {
    let query = '';
    switch (cat) {
      case 'flavour':
        query += `flavour_id=${val}`;
      break;
      case 'ingredient':
        query += `ingredient_id=${val}`;
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
  }, [cat, val, history]);

  return (
    <div className="browse__page">
      <h1 className="text-container" id="browse__page-head">Browse by {`${cat.slice(0, 1).toUpperCase()}${cat.slice(1)}`}</h1>
    {searchResults && (searchResults !== "No results found") && (
      <>
      <RecipeList user={props.user.user} pages={searchResults.relevance}/>
      </>
    )}
    {searchResults === "No results found" && <h2 className="search__results__header">There are no recipes of this type to browse</h2>}
    </div>
  )
}