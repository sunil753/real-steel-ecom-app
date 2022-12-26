import React, { useEffect, useState, useCallback } from "react";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { Badge, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { removeFromCart } from "../redux/slices/cartSlice";

const Navbar = () => {
  const [price, setPrice] = useState(0);
  console.log(price);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = useCallback(() => {
    let price = 0;
    items.map((el, k) => {
      return (price = el.price * el.qty + price);
    });
    setPrice(price);
  }, [items]);

  useEffect(() => {
    total();
  }, [total]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container px-5 mx-auto mt-4 h-24 flex justify-between items-center">
      <div className="hidden ">
        <AiOutlineMenuFold className=" w-8 h-8  bg-slate-600 text-white rounded-sm p-1 cursor-pointer" />
      </div>
      <NavLink to="/">
        <div className="">
          <h2 className="text-3xl font-brand tracking-exwide leading-none ">
            Real Steel
          </h2>
          <h1 className="text-4xl font-bold tracking-exlwide font-brand leading-none">
            STORE
          </h1>
        </div>
      </NavLink>
      <form className=" w-1/2 md:w-full max-w-md  ">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <input
            type="text"
            name="search"
            placeholder="search..."
            className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 "
          />
          <BsSearch className="w-5 h-5 absolute ml-3 pointer-events-none " />
        </div>
      </form>
      <div className="flex items-center">
        <div className="hidden lg:block md:mr-10">
          <p className="text-xs text-gray-600">CALL US NOW</p>
          <h4 className="font-bold text-lg text-gray-600">+91 123 567 890</h4>
        </div>
        <span className="hidden lg:block w-px h-12 m-3 bg-gray-300 "></span>
        <div>
          <Badge
            badgeContent={items.length}
            color="error"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <BsCart2 className="w-12 h-12" />
          </Badge>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {items.length ? (
              <div className="w-96 p-2">
                <div className=" flex justify-around font-bold border-b-2">
                  <h2>{items.length} ITEMS</h2>
                  <h2>VIEW CART</h2>
                </div>
                <div>
                  {items.map((item) => {
                    return (
                      <>
                        <div className="flex justify-around mt-4 mb-4 ">
                          <div>
                            <p className="font-bold">{item.cartext}</p>
                            <p>Price:{item.price * item.qty}</p>
                            <p>Quantity: {item.qty}</p>
                          </div>
                          <div className="relative">
                            <NavLink to={`/singleproduct/${item.id}`}>
                              <img
                                style={{ width: "7rem", height: "5rem" }}
                                src={item.cardimg}
                                alt=""
                              />
                            </NavLink>
                            <GrFormClose
                              onClick={() => handleRemoveItem(item.id)}
                              className="font-bold"
                              style={{
                                borderRadius: "50%",
                                padding: "1px",
                                width: "20px",
                                height: "20px",
                                position: "absolute",
                                top: "-13",
                                right: "-15",
                                backgroundColor: "white",
                                color: "#222529",
                                cursor: "pointer",
                                boxShadow: "0 2px 6px rgb(0 0 0 / 40%) ",
                              }}
                            />
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })}
                </div>
                <div className="flex  flex-col gap-5">
                  <div className="flex justify-around mt-3 font-bold">
                    <h2>SUB TOTAL</h2>
                    <h2>{price}</h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button className="w-64" variant="contained">
                      CheckOut
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card_details flex justify-center items-center w-96">
                <AiOutlineClose
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 3,
                    right: 20,
                    cursor: "pointer",
                  }}
                />
                <p>No products in the cart.</p>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
