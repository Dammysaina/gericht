import React from "react";
import spoon from "../assets/images/spoon.svg";
import CustomButton from "../library/CustomButton";
import "../assets/css/aboutus.css";
import knife from "../assets/images/knife.svg";
import cocktail from "../assets/images/cocktail.svg";






const Aboutus = () => {
  return (
    <div>
      <div className="aboutus_container">
        <p className="g_background">G</p>
        <div className="text-right">
          <p className="bg-10 new_flavour bg-yellow ">About Us</p>
          <img src={spoon} alt="spoonimage" />
          <p className="flavour_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <CustomButton>Know More</CustomButton>
        </div>
        <div className="knife_bg">
          {/* <img className="g_bg" src={gbackground} alt="gbackground" /> */}
          <img className="knife_background" src={knife} alt="knife" />
        </div>
        <div>
          <p className="bg-10 new_flavour bg-yellow">Our History</p>
          <img src={spoon} alt="spoonimage" />
          <p className="flavour_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <CustomButton>Know More</CustomButton>
        </div>
      </div>
      <div>
        <div>
            <p>Menu That Fits You Palatte</p>
            <img src={spoon} alt="spoon"/>
            <p>Today&apos;s Special</p>
        </div>
        <div>
            <div>

            </div>
            <div>
                <img src={cocktail} alt="cocktail"/>
            </div>
            <div>

            </div>
        </div>
        <div><CustomButton>View More</CustomButton></div>
      </div>
    

    </div>
  );
};

export default Aboutus;
