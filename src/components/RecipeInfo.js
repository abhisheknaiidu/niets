import React from 'react'

function RecipeInfo({title, url, healthLabels}) {
    let healthLabelsParticular = null;

    if(healthLabels) {
        healthLabelsParticular = healthLabels.map((label, i) => {
        return (<span key = {i} className = "health-label">{label}</span>);
      });
    }
    return (
      <div className = "recipe-info">
      <h2 className = "title">{title}</h2>
      <div className = "health-labels">{healthLabelsParticular}</div>
      <a target = "_blank" rel="noopener noreferrer" href = {url}>Get Recipe!</a>
     </div>
    )
}

export default RecipeInfo
