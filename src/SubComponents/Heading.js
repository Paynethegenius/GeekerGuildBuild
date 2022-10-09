import React from "react";
import "./heading.css";

function Heading({ description, icon, text, borderRadius , color}) {
  let classes = `description__header ${borderRadius && "borderadd"}`;

  const tagColor ={
    backgroundColor : `${color}`
  }

  return (
    <div className={classes} >
    

      <h2>{description}</h2>
      {text ? <p style={tagColor}>{text}</p> : ""}
    </div>
  );
}

export default Heading;
