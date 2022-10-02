import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSeacrhTerm] = useState("");

  useEffect(() => {
    fetch(" http://localhost:6001/listings")
    .then((res) => res.json())
    .then(listingArr => {
      setListings(listingArr);
    })
  },[]);

  function handleDeleteListing(id) {
    const filteredListings = listings.filter(listing => listing.id === !id);
    setListings(filteredListings);

  };

  const displayListings = listings.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
  


  return (
    <div className="app">
      <Header setSeacrhTerm={setSeacrhTerm}/>
      <ListingsContainer 
      listings={displayListings} 
      handleDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
