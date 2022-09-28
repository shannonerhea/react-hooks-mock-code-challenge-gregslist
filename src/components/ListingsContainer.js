import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then(listings => setListings(listings))
  },[]);

  function handleDelete(id) {
    const updatedListing = listings.filter(listing => listing.id !== id)
    setListings(updatedListing)
  };

  const filterListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const listingCards = listings.map((listing) => {
    return <ListingCard 
    key={ listing.id } 
    listing={ listing }
    onDelete={ handleDelete }
    />;
  })


  return (
    <main>
      <ul className="cards">{ listingCards }</ul>
    </main>
  );
}

export default ListingsContainer;
