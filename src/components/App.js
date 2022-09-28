import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

//im starving
function App() {
  const[searchTerm, setSearchTerm] = useState("")

  function handleSearch(newSearch) {
    setSearchTerm(newSearch)
  }
  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
