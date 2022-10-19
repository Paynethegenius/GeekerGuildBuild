import React from "react";

function Thumbnail({ details, changeDescription, changeVideo, category }) {
  return (
    <div
      className="contento__videoThumbnail"
      onClick={() => {
        changeVideo(details.video);
        changeDescription(` ${details.category} :  ${details.name}.`);
      }}
     
    >
      <img src={details.clipArt} alt="" />
      <div className="contento__videoThumbnail__text">
        {" "}
        <p> {details.name} </p>{" "}
      </div>
    </div>
  );
}

export default Thumbnail;
