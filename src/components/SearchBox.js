import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search by name"
        className="search-box"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
