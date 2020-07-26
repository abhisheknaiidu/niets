import React from 'react'
import RecipeInfo from './RecipeInfo'

function RecipeItem({image,url,title,healthLabels,ingredients}) {
    return (
        <li >
        <img src = {image} alt = "Recipe" />
        <RecipeInfo
          title = {title}
          url = {url}
          healthLabels = {healthLabels}
        />
      </li>
    )
}

export default RecipeItem
