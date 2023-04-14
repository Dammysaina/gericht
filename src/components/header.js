import React from "react";
import Glogo from "../assets/images/Geríchtlogo.svg";
import "../assets/css/header.css";
import Spoon from "../assets/images/spoon.svg"
import CustomButton from "../library/CustomButton";
import fishfillet from "../assets/images/fishfillet.svg"

// import borderline from "../assets/images/"

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
        <div className="login_list">
          <ul>
            <li>Log in / Registration</li>
            <div className="border_line">
              {" "}
              <li></li>
            </div>
            <li>Book table</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
            <p>Chase The New Flavour</p>
            <img src={Spoon} alt="spoonimage"/>
            <p>The key to Fine Dining</p>
            <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            {/* <CustomButton buttonWidth="157px">Explore Menu</CustomButton> */}
        </div>
        <div>
            <div className="topborder"></div>
            <img src={fishfillet} alt="fishfillet" />
            <div className="bottomborder"></div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Header;
