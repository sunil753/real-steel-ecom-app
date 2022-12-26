import React from "react";
import RelatedProducts from "../components/RelatedProducts";
import SingleProduct from "../components/SingleProduct";

const ProductDetails = () => {
  return (
    <div className="container mx-auto my-20 ">
      <SingleProduct />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
