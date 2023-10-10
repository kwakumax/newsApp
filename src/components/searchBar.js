import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchArticles } from "../Redux/searchSlice";


const SearchBar = ({startSearching}) => {
  
  const dispatch=useDispatch()

  const [searchItem, setSearchItem] = useState("");
  

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

    const handleStartSearching =()=>{
      startSearching(true)
      dispatch(searchArticles(searchItem))
    }

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search..."
        value={searchItem}
        onChange={handleChange}
        className="search-input"
        query={searchItem}
      />
      <button className="search-button" onClick={handleStartSearching}>Search</button>

      {/*  */}
    </div>
  )
  };

export default SearchBar;
