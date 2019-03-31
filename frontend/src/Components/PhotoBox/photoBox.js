import React from "react";

import "./photoBox.css";

const PhotoBox = props => {
  return (
    <div className="photoBoxContainer" id={props.id} onClick={props.onClick}>
      <div className="photoBox" />
    </div>
  );
};

export default PhotoBox;
