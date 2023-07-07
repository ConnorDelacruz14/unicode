import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        placeholder="Search Projects"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
}

export default SearchBar;
