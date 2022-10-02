import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteListing }) {
  //console.log(listings)

  const displayListings = listings.map((listing) => (
    <ListingCard 
    listing={listing} 
    key={listing.id} 
    handleDeleteListing={handleDeleteListing} />
  ))


   
  return (
    <main>
      <ul className="cards">
        { displayListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
