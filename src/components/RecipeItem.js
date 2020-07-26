import React from 'react'
import RecipeInfo from './RecipeInfo'
import HealthInfo from './HealthInfo'

function RecipeItem({image,url,title,healthLabels,yields,calories,digest}) {
    return (
        <li >
        <img src = {image} alt = "Recipe" />
        <RecipeInfo
          title = {title}
          url = {url}
          healthLabels = {healthLabels}
        />
        <HealthInfo calories = {calories} digest = {digest} yield = {yields} /> 
      </li>
    )
}

export default RecipeItem
