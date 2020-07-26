import React from 'react'
import RecipeInfo from './RecipeInfo'
import HealthInfo from './HealthInfo'
import { makeStyles, ListItem } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    recipeItem: {
        display:'grid',
        border: '50px solid rgba(0, 0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        minHeight: 320,
        position: 'relative',
        width: '100%',
        boxSizing:'border-box',
        overflow: 'hidden',
        marginTop: '2em',
        marginBottom: '1em',
    },
    img: {
        position: 'relative',
        bottom:'0',
        top: '0',
        float:'left',
        width: '47%',
        height: '100%',
        marginLeft: 0,
        boxSizing: 'border-box',
        borderRadius: '10%',
    }
  }))

function RecipeItem({image,url,title,healthLabels,yields,calories,digest}) {
    const classes = useStyles();
    return (
        <ListItem className={classes.recipeItem}>
        <img className={classes.img} src = {image} alt = "Recipe" />
        <RecipeInfo
          title = {title}
          url = {url}
          healthLabels = {healthLabels}
        />
        <HealthInfo calories = {calories} digest = {digest} yield = {yields} /> 
      </ListItem>
    )
}

export default RecipeItem
