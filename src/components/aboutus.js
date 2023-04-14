import React from "react";
import spoon from "../assets/images/spoon.svg";
import CustomButton from "../library/CustomButton";

const Aboutus = () => {
  return (
    <div>
      <div className="aboutus_container">
        <div>
          <p>About Us</p>
          <img src={spoon} alt="spoonimage" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <CustomButton>Know More</CustomButton>
        </div>
        <div>
            
        </div>
        <div>
          <p>About Us</p>
          <img src={spoon} alt="spoonimage" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <CustomButton>Know More</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
