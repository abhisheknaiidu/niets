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

    // let [filteredRecipes, setFilteredRecipes] = useState([])
    let data = [];
    for(let i=0; i<value.length; i++) {
        data.push(value[i].title);
    }

    // useEffect(() => {
    //     setFilteredRecipes(
    //   recipeResult.filter(item => {
    //     for(let i=0; i<data.length; i++) {
    //       if(item.recipe.healthLabels.includes(data[i])) {
    //         return item;
    //       }
    //     }
    //   })
    //  )
    // }, [value,data,recipeResult])

    let filteredRecipes = recipeResult.filter(item => {
      return item.recipe.healthLabels.some( (el) => data.includes(el));
  })
    // const filteredRecipes = recipeResult.filter( item => item.recipe.healthLabels.includes(data[0]));



    const classes = useStyles();
    let recipeItems;

    // filteredRecipes = filtered ? filtered : recipeResult;
    console.log(filteredRecipes);

    filteredRecipes = data.length>0 ? filteredRecipes : recipeResult;
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


    //   for(let i=0; i<data.length; i++) {
    //     if() {
    //       return item;
    //     }
    //   }
    // });