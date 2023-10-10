import React, { useState } from "react";


const SearchBar = ({startSearching}) => {
  const [searchItem, setSearchItem] = useState("");
  

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

    

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search..."
        value={searchItem}
        onChange={handleChange}
        className="search-input"
      />
      <button className="search-button" onClick={()=>startSearching(true)}>Search</button>

      {/*  */}
    </div>
  )
  };

export default SearchBar;
