import React, { useState } from 'react';
require("dotenv").config();


function App() {


  const APP_ID = '2b9b094c';
  const API_KEY = 'b78c0cd982cbaeeeb49c514faa135af1';

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  let URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`;

  const fetchRecipes = async () => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => setRecipes(data.hits));
  }
  const searchRecipe = (e) => {
    e.preventDefault();
    URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${search}`;
    fetchRecipes();
  }
  return (
    <div>
      <form onSubmit={searchRecipe}>
        <input onChange={ e => setSearch(e.target.value)} />
        <ul>
        { recipes.map( recipe => (
          <li>
            {recipe.recipe.label}
          </li>
        ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
