import React from "react";

import "./contactCard.css";
import Facebook from "../../Assets/facebookIcon.svg";

const ContactCard = ({ id }) => {
  return (
    <div className="contactCardContainer" id={id}>
      <div className="contactCardBox">
        <img src={Facebook} className="facebookIcon" />
        <p className="name">Johnny Tsunami</p>
      </div>
    </div>
  );
};

export default ContactCard;
