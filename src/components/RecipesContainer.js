import React from 'react'
import RecipeItem from './RecipeItem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    recipesContainer: {
        width: '57em',
        display: 'block',
        position: 'relative',
        margin: '3.5em auto',
        marginBottom: 0,
        transition: 'margin 1s',
        zIndex : 99,
    }
  }))

function RecipesContainer({value, recipeResult}) {

    // const [filteredRecipes, setFilteredRecipes] = useState([]);
    let data = [];
    for(let i=0; i<value.length; i++) {
        data.push(value[i].title);
    }

    // useEffect(() => [
    //     setFilteredRecipes(
    //     recipeResult.filter(item => item.recipe.healthLabels.includes(data[0]))
    //     )
    // ], [value])

    const filteredRecipes = recipeResult.filter(item => item.recipe.healthLabels.includes(data[0]));
    console.log(filteredRecipes);


    const classes = useStyles();
    let recipeItems;

    recipeItems = filteredRecipes.map((item, i) => {
      return (
        <RecipeItem
        key = {i}
        title ={item.recipe.label}
        image = {item.recipe.image}
        url = {item.recipe.url}
        yields = {item.recipe.yield}
        healthLabels = {item.recipe.healthLabels}
        ingredients = {item.recipe.ingredientLines}
        calories= {item.recipe.calories}
        digest = {item.recipe.digest}
      />
      );
  
    });
    return (
        <div className={classes.recipesContainer}>
            {recipeItems} 
        </div>
    )
}

export default RecipesContainer
