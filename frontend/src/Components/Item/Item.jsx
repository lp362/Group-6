import React from "react";
import "./Item.css";

const Item = ({ id, image, name, concept }) => {
  return (
    <div className="item">
      <img
        src={image}
        alt={name}
        className="item-image"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = "/images/placeholder.png"; // Set fallback image
        }}
      />
      <h2>{name}</h2>
      <p>{concept}</p>
      <button className="item-button">Select</button>
    </div>
  );
};

export default Item;
