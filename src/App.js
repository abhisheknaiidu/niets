import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipesContainer from './components/RecipesContainer';
import { makeStyles } from '@material-ui/core';
import PaginationPage from './components/PaginationPage';
import Tags from './components/Tags';
require("dotenv").config();

const useStyles = makeStyles( theme => ({
  app: {
    textAlign: 'center',
  },
  heading: {
    marginBottom: '3em',
    marginTop: '1.8em',
    color: 'white',
  },
  header: {
    fontSize: '5.3em',
    fontFamily: '"Hi Melody", sans-serif',
    lineHeight: 0,
    marginTop: '0.5em',
    marginBottom: '0.1em',
    display: 'inline-block',
  },
  para: {
    fontFamily: '"Hi Melody", sans-serif',
    fontWeight: '700',
    fontSize: '1.45em',
  }
}))

function App() {

  const classes = useStyles();
  const APP_ID = '2b9b094c';
  const API_KEY = 'b78c0cd982cbaeeeb49c514faa135af1';

  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(4);

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



  const fixedOptions = [];
  const [value, setValue] = React.useState([...fixedOptions, tags[1]]);

  // get current recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={classes.app}>
      <div className = {classes.heading}>
          <h1 className={classes.header}>NIETS</h1>
          <p className={classes.para}>Naidu's Diet Recipes</p>
        </div>
        <SearchBar submit={searchRecipe} />
        <Tags tags={tags} fixedOptions={fixedOptions} value={value} setValue={setValue}/>
        <div> 
          <RecipesContainer value={value} recipeResult={currentRecipes} />
        </div>
        <PaginationPage recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate} />
    </div>
  );
}

export default App;

const tags = [
  { title: 'Sugar-Conscious' },
  { title: 'Vegan' },
  { title: 'Vegetarian' },
  { title: 'Peanut-Free' },
  { title: 'Tree-Nut-Free' },
  { title: 'Alcohol-Free' },
  { title: 'Paleo'},
  { title: 'Dairy-Free'},
  { title: 'Gluten-Free'},
  { title: 'Wheat-Free'},
  { title: 'Fat-Free'},
  { title: 'Low-Sugar'},
  { title: 'Egg-Free'},
  { title: 'Peanut-Free'},
  { title: 'Tree-Nut-Free'},
  { title: 'Soy-Free'},
  { title: 'Fish-Free'},
  { title: 'Shellfish-Free'},
];