import React from "react";

const GifItem = ({ title, image }) => {

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card img">
        <img src={image} alt={image} />
      </div>
    </div>
  );
};

export default GifItem;
