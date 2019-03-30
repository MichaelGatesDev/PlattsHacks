import React from "react";

import "./photoBox.css";

const PhotoBox = ({ id }) => {
  return (
    <div className="photoBoxContainer" id={id}>
      <div className="photoBox" />
    </div>
  );
};

export default PhotoBox;
