import React from "react";
import "./App.css";
import NewsComponent from "./components/newsComponent";
import { NavBar } from "./components/NavBar";


function App() {
  return (
    <div>
        <NavBar />
        <NewsComponent />
      
    </div>
  );
}

export default App;
