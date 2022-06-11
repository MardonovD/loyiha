import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <div className="header ">
      <div className="header-left-icon">
        <Link to="/" className="header-left-icon-h2">
          Doston
        </Link>
      </div>
      <div className="header-right">
        <ul className="header-right-item">
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="json">Json</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
