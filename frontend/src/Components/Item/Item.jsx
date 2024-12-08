import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ id, image, name, concept }) => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate(`/apply/${id}`); // Navigate to the Apply page with the course ID
  };

  return (
    <div className="item">
      <img
        src={image || "https://via.placeholder.com/150"} // Fallback placeholder
        alt={name}
        className="item-image"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = "https://via.placeholder.com/150"; // Set fallback image
        }}
      />
      <h2>{name}</h2>
      <p>{concept}</p>
      <button onClick={handleEnroll} className="item-button">
        Select
      </button>
    </div>
  );
};

export default Item;
