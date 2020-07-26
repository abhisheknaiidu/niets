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

function RecipesContainer({recipeResult}) {

    const classes = useStyles();
    let recipeItems;

    recipeItems = recipeResult.map((item, i) => {
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
