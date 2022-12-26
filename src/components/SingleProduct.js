import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button } from "@mui/material";
import Product1 from "../assets/img/product-1.jpg";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const items = useSelector((state) => state.cart);
  const [price, setPrice] = useState(null);

  const handlePriceCalculation = () => {
    setPrice(500);
  };
  return (
    <div>
      <p className="flex  items-center mb-5">
        <BsCheckLg className="text-green-600  mr-2" />
        <span className="font-bold pr-1"> 3 × “Acetal Round Bar”</span>
        have been added to your cart.
      </p>
      <div className="flex">
        <div className="flex-1  rounded-md">
          <img
            src={Product1}
            alt=""
            width={600}
            className="rounded-md border-2 p-2"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold uppercase text-3xl text-blue-600 mb-3">
            Acetal Round Bar
          </h1>
          <hr />

          <div className="flex flex-col w-40 ">
            <label for="steel" className="py-1">
              SIZE
            </label>

            <select id="steel" className="h-10 border-2 mt-2">
              <option value="80">80MM DIA</option>
              <option value="60">60MM DIA</option>
              <option value="40">40MM DIA</option>
            </select>
          </div>
          <div className="flex flex-col w-40">
            <label for="steel" className="py-2">
              LENGTH(MM)
            </label>

            <select id="steel" className="h-10 border-2 mt-2">
              <option value="1000">1 METER</option>
              <option value="2000">2 METER</option>
              <option value="3000">3 METER</option>
              <option value="4000">4 METER</option>
              <option value="5000">5 METER</option>
              <option value="6000">6 METER</option>
            </select>
          </div>
          <div className="flex flex-col w-40">
            <label for="steel" className="py-2">
              COLOR
            </label>

            <select id="steel" className="border-2 mt-2 h-10">
              <option value="black">BLACK</option>
              <option value="blue">BLUE</option>
              <option value="yellow">YELLOW</option>
            </select>
          </div>
          <div className="my-3">
            <Button onClick={handlePriceCalculation} variant="contained">
              Calculate Price
            </Button>
          </div>
          <div className=" ">
            <h1 className=" text-3xl font-brand">₹ {price}</h1>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center ">
              <AiOutlinePlus className="border-2 w-12 h-12 p-3 text=b" />
              <p className="border-2 flex items-center justify-center w-12 h-12 p-3">
                {items.qty}
              </p>
              <AiOutlineMinus className="border-2 w-12 h-12 p-3" />
            </div>

            <div className="my-5 flex gap-3">
              <Button variant="contained">
                Add To Cart
                <BsCheckLg className="text-white  ml-3" />
              </Button>
              <Button variant="contained">View Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
