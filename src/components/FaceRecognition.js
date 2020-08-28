import React from "react";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <img
        id="inputimage"
        alt=""
        src={imageUrl}
        width="500px"
        height="auto"
      ></img>
      <div
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
        className="bounding-box"
      ></div>
    </div>
  );
};

export default FaceRecognition;
