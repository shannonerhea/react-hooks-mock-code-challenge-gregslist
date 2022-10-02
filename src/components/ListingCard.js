import React, { useState } from "react";

function ListingCard({ listing, handleDeleteListing }) {
  //console.log({listing})
  const { id, description, image, location } = listing;
  const [faved, setFaved] = useState(false)


  const toggleFaved = () => {
    setFaved(faved => !faved)
  }

  const handleDelete = () => {
    fetch(` http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    handleDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {faved ? (
          <button 
          onClick={toggleFaved}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={toggleFaved}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
