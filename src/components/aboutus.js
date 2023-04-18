import React from "react";
import spoon from "../assets/images/spoon.svg";
import CustomButton from "../library/CustomButton";
import "../assets/css/aboutus.css";
import knife from "../assets/images/knife.svg";
// import gbackground from "../assets/images/G.svg";

const Aboutus = () => {
  return (
    <div>
      <div className="aboutus_container">
        <div className="g_background">
          <div className="our_history">
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

            <div>
              {/* <img src={gbackground} alt="gbackground" /> */}

              <img src={knife} alt="knife" />
            </div>
            <div>
              <p className="bg-10 new_flavour bg-yellow">About Us</p>
              <img src={spoon} alt="spoonimage" />
              <p className="flavour_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </p>
              <CustomButton>Know More</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
