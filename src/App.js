import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipesContainer from './components/RecipesContainer';
import { makeStyles } from '@material-ui/core';
import PaginationPage from './components/PaginationPage';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(5);

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

  // get current recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={classes.app}>
        <SearchBar submit={searchRecipe} />
        <div> 
          <RecipesContainer recipeResult={currentRecipes} />
        </div>
        <PaginationPage recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate} />
    </div>
  );
}

export default App;
