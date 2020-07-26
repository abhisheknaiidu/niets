import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  pagination: {
    padding: 20,
    marginBottom: 20,
  },
  page: {
    display: 'inline-block',
    padding: 8,
    marginRight: 4,
    borderRadius: 3,
    border: 'solid 1px #c0c0c0',
    background: '#e9e9e9',
    boxShadow: 'inset 0px 1px 0px rgba(255,255,255, .8), 0px 1px 3px rgba(0,0,0, .1)',
    fontSize: '.875em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#717171',
    textShadow: '0px 1px 0px rgba(255,255,255, 1)',
}

}))

const PaginationPage = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const classes = useStyles();
  return (
      <div className={classes.pagination}>
        {pageNumbers.map(number => (
          <li className={classes.page} key={number} >
            <a onClick={() => paginate(number)} href='!#' >
              {number}
            </a>
          </li>
        ))}
      </div>
  );
};

export default PaginationPage;
