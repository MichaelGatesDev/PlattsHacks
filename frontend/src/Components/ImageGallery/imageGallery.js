import React from "react";

import "./imageGallery.css";
import pic1 from "../../Assets/rugby1.jpg";
import pic2 from "../../Assets/rugby2.jpg";
import pic3 from "../../Assets/rugby3.jpg";
import pic4 from "../../Assets/rugby4.jpg";
import pic5 from "../../Assets/rugby5.jpg";
import pic6 from "../../Assets/rugby6.jpg";

const ImageGallery = ({ id }) => {
  return (
    <div className="imageContainer" id={id}>
      <div className="gridContainer">
        <div className="pic1">
          <img src={pic1} />
        </div>
        <div className="pic2">
          <img src={pic2} />
        </div>

        <div className="pic3">
          <img src={pic3} />
        </div>
        <div className="pic4">
          <img src={pic4} />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
