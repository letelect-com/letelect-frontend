import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-onPrimary px-[5%] w-full flex justify-between items-center py-4">
      <NavLink className="font-volkhov italic font-black text-2xl text-primary">
        letelect.
      </NavLink>
      <div className="flex items-center gap-4">
        <NavLink>Features</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="bg-primary text-white font-bold px-4 py-1 rounded-md">
            Login
          </button>
        </Link>
        <button className="border text-primary border-primary rounded-md px-4 py-1">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
