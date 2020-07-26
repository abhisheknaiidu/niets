
import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    searchbar: {
      display: '',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: 10,
        // paddingRight: theme.spacing(1),
        }
  }))

const SearchBar = (props) => {

    const classes = useStyles();
    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        props.submit(e, { search });
        setSearch("");
    }
  return (
      <div className={classes.searchbar}>
          <form 
          onSubmit={handleSubmit}>
              <FormControl>
              <InputLabel>
              Any Recipe Search
              </InputLabel>
              <Input type="text"
            className="search-bar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }} />
            </FormControl>
            <Button disabled={!search} className={classes.button} variant="contained" color="secondary" onClick={handleSubmit} >
                Search
            </Button>
          </form>
      </div>
  );
};

export default SearchBar;