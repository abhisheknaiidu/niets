import React from 'react'
import RecipeItem from './RecipeItem';

function RecipesContainer({recipeResult}) {

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
        <div>
            {recipeItems} 
        </div>
    )
}

export default RecipesContainer
