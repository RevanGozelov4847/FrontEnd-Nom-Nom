// SearchInput.js

import React, { useContext } from "react";
import { CartContext } from "../cartContext";

const SearchInput = () => {
  const { searchTerm, setSearchTerm } = useContext(CartContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="forme">
      <input
        className="searchInput"
        type="text"
        placeholder="Find what you need..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="searchIcon" type="submit">
        {" "}
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
    </form>
  );
};

export default SearchInput;
