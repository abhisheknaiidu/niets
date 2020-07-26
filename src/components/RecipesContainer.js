import React from 'react'

function RecipesContainer({recipeResult}) {

    let recipeItems;

    recipeItems = recipeResult.map((item, i) => {
      return (
        <li>
            {item.recipe.label}
        </li>
      );
  
    });
    return (
        <div>
            {recipeItems} 
        </div>
    )
}

export default RecipesContainer
