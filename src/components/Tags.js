/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useMediaQuery } from '@material-ui/core';

export default function Tags({tags, fixedOptions, value, setValue}) {

  const greaterThanMd = useMediaQuery( theme => theme.breakpoints.up('md'))


  return greaterThanMd && (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={tags}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500, marginLeft: 400, marginTop: 30 }}
      renderInput={(params) => (
        <TextField {...params} label="Fixed tag" variant="outlined" placeholder="Favorites" />
      )}
    />
  );
}

