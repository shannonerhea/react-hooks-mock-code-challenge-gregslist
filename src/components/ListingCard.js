import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFaved, setIsFaved] = useState(false);
  const { id, image, description, location} = listing;

 function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {
     onDelete(id);
    })
  } 


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        {isFaved ? (
          <button 
          onClick={() => setIsFaved(false)}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={() => setIsFaved(true)}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{ description }</strong>
        <span> · { location }</span>
        <button 
        onClick={ handleDelete }
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
