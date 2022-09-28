import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

//im starving
function App() {
  const[searchTerm, setSearchTerm] = useState("")
  return (
    <div className="app">
      <Header />
      <ListingsContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
