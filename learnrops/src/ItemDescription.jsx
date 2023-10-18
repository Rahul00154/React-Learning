import React from "react";

function ItemDescription({ name, description }) {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default ItemDescription;
