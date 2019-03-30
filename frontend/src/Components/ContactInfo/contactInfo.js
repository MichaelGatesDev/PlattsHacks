import React from "react";

import "./contactInfo.css";
import Card from "../ContactInfo/contactCard";

const contcactList = [
  {
    type: "facebook",
    url: "www.facebook.com",
    name: "displayNameOfContact"
  },
  {
    type: "email",
    url: "sunyrugby@plattsburgh.edu",
    name: "displayNameOfContact"
  },
  {
    type: "website",
    url: "www.plattsRugby.com/president",
    name: "displayNameOfContact"
  }
];

const Contact = ({ id }) => {
  return (
    <div className="contactContainer" id={id}>
      <div className="ContactBox">
        <h2 className="contactTitle">Contact </h2>
        <div className="cardContainer">
          <Card id="facebook" name="Facebook" />
          <Card id="email" />
          <Card id="website" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
