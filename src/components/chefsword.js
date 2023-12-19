import React from "react";
import spoon from "../assets/images/spoon.svg";
import lettuceman from "../assets/images/lettuceman.svg";
import "../assets/css/aboutus.css";



const Chef = () => {
  return (
    <div className="chefsword">
      <div>
        <img src={lettuceman} alt="" />
      </div>

      <div className="kevinLuo">
        <div className="chefContainer">
          <p className="new_flavour">Chef's Word</p>
          <img src={spoon} alt="spoonimage" />
        </div>
        <div>
          <p className="bg-yellow new_flavour">What we believe in</p>
          <p className="flavour_text weBelieve">
            <span className="">&apos;&apos;</span>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu.
            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque
            scelerisque congue ac consequat, aliquam molestie lectus eu. Congue
            iaculis integer curabitur semper sit nunc.
          </p>
          <p className="chefsname bg-yellow">Kevin Luo</p>
          <p className="flavour_text">Chef &amp; Founder</p>
          <p className="signature">Kevin Luo</p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
