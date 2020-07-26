
import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div className="row mainHeader">
      <div className="col-md-6 searchArea">
        <form
          className="searchForm"
          onSubmit={(e) => {
            props.submit(e, { search });
            setSearch("");
          }}
        >
          <button type="submit" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;