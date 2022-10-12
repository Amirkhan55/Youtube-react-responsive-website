import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/wow balana.jpg" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="menu">
              Menu
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="shop">
              Delivery
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="prices">
              prices
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="clients">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
