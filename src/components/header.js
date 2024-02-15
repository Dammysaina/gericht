import React, {useState} from "react";
import Glogo from "../assets/images/Geríchtlogo.svg";
import "../assets/css/header.css";
import Spoon from "../assets/images/spoon.svg";
import CustomButton from "../library/CustomButton";
import fishfillet from "../assets/images/fishfillet.svg";
import headerborder from "../assets/images/headerline.svg";
import homeborder from "../assets/images/scrollline.svg";
// import numberline from "../assets/images/numberline.svg";

const Header = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMobileMenuOpen(false);
  };

  return (
    <div className="header_container">
      <div className="header_contain">
        <div>
          <img src={Glogo} alt="Gerichtlogo" />
        </div>
        {/* <MobileMenuIcon onClick={toggleMobileMenu}> */}
          {/* <FaBars /> */}
        {/* </MobileMenuIcon> */}
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
            <div>
              {" "}
              <li>
                <img src={headerborder} alt="" />
              </li>
            </div>
            <li>Book table</li>
          </ul>
        </div>
      </div>
      <div className="home_container">
        <div className="chase_flavour">
          <p className=" new_flavour">Chase The New Flavour</p>
          <img src={Spoon} alt="spoonimage" />
          <p className=" fine_dining">The key to Fine Dining</p>
          <p className="flavour_text">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <CustomButton buttonWidth="157px">Explore Menu</CustomButton>
        </div>
        <div className="fish_fillet">
          <div>
            <div className="topborder"></div>
            <img src={fishfillet} alt="fishfillet" />
            <div className="bottomborder"></div>
          </div>
          <div className="number_list">
            <ul>
              <li>01</li>
              <li className="number_border"></li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
            </ul>
          </div>
        </div>
        <div className="homeborder">
          <img src={homeborder} alt="homeborder" />
          <p>SCROLL</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
