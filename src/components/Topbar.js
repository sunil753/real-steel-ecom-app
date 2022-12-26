import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="top-bar h-10 bg-slate-600 px-5">
      <div className="container m-auto h-10 flex justify-end items-center text-white gap-5">
        <Link to="/">Home</Link>
        <Link to="/articles"> Articles </Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Topbar;
