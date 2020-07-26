import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    healthInf: {
        position: 'absolute',
        left: '65%',
        width: '35%',
        height: '100%',
        boxSizing: 'border-box',
    },
    nutrition: {
        textAlign: 'center',
        margin: 0,
        fontSize: '1em',
        color: '#33691e',
      },
      calories: {
        textAlign: 'center',
        marginTop: 0,
        color: '#7cb342',
        fontSize: '0.8em',
        marginLeft: 15,
        paddingTop: '1em',
      },
      chart: {
        position: 'absolute !important',
        top: '20% !important',
        left: '13% !important',
        width: '80% !important',
        height: '80% !important',
      }
  }))

const getChartInfo = (digest, numServings) => {
    if(numServings === undefined) numServings = 1;
  
    let data = [];
    for(var i = 0; i < 3; i++) {
      data.push(Math.round(digest[i].total/numServings));
    }
  
    let chartData = {
      labels: ["Fat (g)", "Carbs (g)", "Protein (g)"],
      datasets: [{
        backgroundColor: ["#FF7272", "#FFDF73", "#C4FF73"],
        data: data
      }]
    };
  
    let chartOptions = {
      legend: {
        labels: {
          boxWidth: 20,
          fontSize: 12,
          fontFamily: "Cabin",
          fontColor: "white"
        }
      },
      responsive: true,
      maintainAspectRatio: false
    };
  
    return [chartData, chartOptions];
  };

function HealthInfo({calories, digest, yields}) {

    let dataLabel = [];
    for(var i = 0; i < 3; i++) {
      dataLabel.push(digest[i].total);
    }

    let fat = dataLabel[0];
    let carbs = dataLabel[1];
    let protein = dataLabel[2];
    let ratio = (protein/(protein + carbs + fat))*100;
    let carbratio = ((carbs + fat)/(protein + carbs + fat)) * 100;
    // console.log(ratio2);
    const classes = useStyles();
   let caloriesInfo = null;

   if(calories && yields) {
     caloriesInfo = (<h3 className = {classes.calories}>{Math.round(calories/yields)} calories</h3>);
   } else if(calories) {
     caloriesInfo = (<h3 className = {classes.calories}>{Math.round(calories)} calories</h3>);
   }
 
 
   let nutritionChart = null;
 
   if(digest) {
     let chartInfo = getChartInfo(digest, yields);
     nutritionChart = (
       <div className = {classes.chart}>
         <Doughnut data = {chartInfo[0]} options = {chartInfo[1]}/>
       </div>
     );
   }

    return (
        <div className = {classes.healthInf}>
        <h3 className = {classes.nutrition}>{yields ? "Nutrition Per Serving" : "Nutrition (entire recipe)"}</h3>
        <li style={{ display: 'inline-flex'}}>
        {ratio>15 ?<h3 className = {classes.calories}>High Protein</h3> : (ratio >=12 && ratio<=15 ? <h3 className = {classes.calories}>Balanced</h3> : <h3 className = {classes.calories}>Regular</h3>)}
        {carbratio>50 ? <h3 className = {classes.calories}>High Carb</h3> : null }
        {caloriesInfo}
        </li>
        {digest ? null : <p>No additional health information.</p>}
        {nutritionChart}
      </div>

      
    )
}

export default HealthInfo
