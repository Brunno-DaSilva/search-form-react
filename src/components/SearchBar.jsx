import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);
    const resultsArray = posts.filter(({ name, region }) => {
      let wordToMatch = e.target.value;
      const regex = new RegExp(wordToMatch, "gi");
      return name.common.match(regex) || region.match(regex);
    });

    setSearchResults(resultsArray);
  };

  return (
    <header>
      <form className="search">
        <input
          className="search__input"
          id="search"
          type="text"
          onChange={handleSearchChange}
        />
        <button className="search__button">
          <FontAwesomeIcon
            onClick={() => {
              handleSubmit();
            }}
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
