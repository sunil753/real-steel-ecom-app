import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { CardData } from "../assets/img/data";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(item);
  };

  const renderedItems = CardData.map((item) => {
    return (
      <div className=" flex flex-col items-center gap-3 border-2 p-2">
        <img
          src={item.cardimg}
          className="rounded-md duration-200  product-img overflow-hidden"
          width="600px"
          height="600px"
          alt=""
        />
        <p>{item.cartext}</p>
        <p>₹ {item.price}</p>
        <div className="flex gap-5 mb-3">
          <NavLink to="/articles">
            <Button variant="contained" color="primary" className="b-col">
              Know More
            </Button>
          </NavLink>

          <Button onClick={() => handleAddToCart(item)} variant="contained">
            Add To Cart
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div
      className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
 sm:px-0
    justify-center justify-items-center px-10 py-20"
    >
      {renderedItems}
    </div>
  );
};

export default Home;
