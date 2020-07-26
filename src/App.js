import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipesContainer from './components/RecipesContainer';
import { makeStyles } from '@material-ui/core';
require("dotenv").config();

const useStyles = makeStyles( theme => ({
  app: {
    textAlign: 'center',
  }
}))

function App() {

  const classes = useStyles();
  const APP_ID = '2b9b094c';
  const API_KEY = 'b78c0cd982cbaeeeb49c514faa135af1';

  const [recipes, setRecipes] = useState([]);

  let URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`;

  const fetchRecipes = async () => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => setRecipes(data.hits));
  }
  const searchRecipe = (e, input) => {
    e.preventDefault();
    URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${input.search}`;
    fetchRecipes();
  }
  return (
    <div className={classes.app}>
        <SearchBar submit={searchRecipe} />
        <div> 
          <RecipesContainer recipeResult={recipes} />
        </div>
    </div>
  );
}

export default App;
