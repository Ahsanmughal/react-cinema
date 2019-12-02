import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="cinema-header">
      <div className="cinema-header-content">
        <Link className="cinema-header-logo" to="/">
          YoYo Cinema
        </Link>
        <Link className="cinema-header-link" to="/favourites">
          Favourites
        </Link>
      </div>
    </div>
  );
};

export default Header;
