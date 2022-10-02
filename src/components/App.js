import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:6001/listings")
    .then((r) => r.json())
    .then(listingArr => {
      setListings(listingArr);
    })
  },[]);


  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
