import { Button } from "@mui/material";
import React from "react";
import Prodcut1 from "../assets/img/product-1.jpg";
const ProductCard = () => {
  return (
    <>
      <div className="wrapper flex items-center flex-col rounded-md border-2 p-2 w-64">
        <img src={Prodcut1} alt="" className="rounded-md" />
        <p className="text-slate-500 my-5">Polyethylene</p>
        <Button variant="contained">View Product</Button>
      </div>
    </>
  );
};

export default ProductCard;
