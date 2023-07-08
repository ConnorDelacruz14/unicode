import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ onSearch }) {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        placeholder="Search Projects"
        onChange={(event) => {
          const updatedQuery = event.target.value;
          if (updatedQuery.trim() !== "") {
            onSearch(updatedQuery);
          }
        }}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
}

export default SearchBar;
