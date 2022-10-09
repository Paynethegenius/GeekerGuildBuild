import React from "react";
import "./charexperience.css";

function CharExperience({software}) {
  return (
    <div className="charexperience">
      {software.map((item , id) => {
          
        return (<img className="charexperience__img" key = {id} src={item} alt="logo"/>);
      })}
    </div>
  );
}

export default CharExperience;
