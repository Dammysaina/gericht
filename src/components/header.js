import React from "react";
import Glogo from "../assets/images/Geríchtlogo.svg";
import "../assets/css/header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_contain">
        <div>
          <img src={Glogo} alt="Gerichtlogo" />
        </div>
        <div className="home_list">
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Landing</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Log in / Registration</li>
            <div className="border_line"> <li ></li></div>
           
            <li>Book table</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
