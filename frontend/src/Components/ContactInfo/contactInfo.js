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

const Contact = props => {
  if (props.visible == "false") {
    return null;
  } else {
    return (
      <div className="contactContainer">
        <div className="ContactBox">
          <h2 className="contactTitle">Contact </h2>
          <div className="cardContainer">
            <Card icon="facebook" name="Facebook" />
            <Card icon="email" email="sunyRugby@plattsburgh.edu" />
            <Card icon="website" website="www.sunyRugby.com" />
          </div>
        </div>
      </div>
    );
  }
};
export default Contact;
