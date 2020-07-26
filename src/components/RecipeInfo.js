import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    recipeInfo: {
        position: 'absolute',
        left: '29%',
        width: '40%',
        height: '100%',
        boxSizing: 'border-box',
        padding: '0 0.5em',
        margin: '0 0.5em',
    },
    healthLabel: {
        fontSize: 9,
        float: 'left',
        marginRight: '0.5em',
        marginTop: '0.5em',
        padding: 4,
        borderRadius: '10%',
        backgroundColor: 'green',
    },
    title: {
        marginTop: 0,
        marginBottom: 0,
        fontWeight: 200,
        position: 'relative',
        fontSize: '1.2em',
        textAlign: 'left',
        lineHeight: '1.5em',
    },
    link: {
        fontSize: '1em',
        position: 'absolute',
        left: '0',
        bottom: '0',
        margin: '0 0.5em',
        padding: '0.5em',
        textDecoration: 'none',
        borderRadius: '5%',
        backgroundColor: 'black',
    }
  }))

function RecipeInfo({title, url, healthLabels}) {
    
    const classes = useStyles();
    let healthLabelsParticular = null;

    if(healthLabels) {
        healthLabelsParticular = healthLabels.map((label, i) => {
        return (<span key = {i} className = {classes.healthLabel}>{label}</span>);
      });
    }
    return (
      <div className = {classes.recipeInfo}>
      <h2 className = {classes.title}>{title}</h2>
      <div style={{textAlign: 'left'}}>{healthLabelsParticular}</div>
      <a className={classes.link} target = "_blank" rel="noopener noreferrer" href = {url}>Get Recipe!</a>
     </div>
    )
}

export default RecipeInfo
