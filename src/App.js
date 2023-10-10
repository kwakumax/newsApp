import React,{useState} from "react";
import "./App.css";
import NewsComponent from "./components/newsComponent";
import { NavBar } from "./components/NavBar";
import SearchBar from "./components/searchBar";
import { ResultsFromSearch } from "./components/ResultsFromSearch";
import  FilterComponent  from "./components/FilterComponent";
import { FilteredResults } from "./components/FilteredResults";


function App() {
  const [searching, setSearching] = useState(false);
  const [filtering, setFiltering] = useState(false);


  return (
    <div>
      <NavBar />
      <SearchBar  startSearching={setSearching}/>
      {searching? <ResultsFromSearch />:(<div>
        <FilterComponent startFiltering={setFiltering} />{
          filtering? <FilteredResults /> :
        <NewsComponent />
        }
      </div>)}
      
    </div>
  );
}

export default App;



