import React,{useState} from "react";
import "./App.css";
import NewsComponent from "./components/newsComponent";
import { NavBar } from "./components/NavBar";
import SearchBar from "./components/searchBar";
import { FilterComponent } from "./components/FilterComponent";


function App() {
  const [searching, setSearching] = useState(false);


  return (
    <div>
      <NavBar />
      <SearchBar />
      <FilterComponent />
       <NewsComponent />
      
    </div>
  );
}

export default App;



