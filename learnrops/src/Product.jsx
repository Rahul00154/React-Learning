import React from "react";
import App from "./App";
import ItemDescription from "./ItemDescription";

//we can destructure props like {attribute name}
function Product({ name, description, price }) {
  return (
    <div>
      <ItemDescription name={name} description={description} />
      <h4>${price}</h4>
    </div>
  );
}

export default Product;
