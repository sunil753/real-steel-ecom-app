import React from "react";
import CardSlider from "./CardSlider";

const RelatedProducts = () => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl mb-2">RELATED PRODUCTS</h1>
      <hr />
      <div className="mt-10">
        <CardSlider />
      </div>
    </div>
  );
};

export default RelatedProducts;
