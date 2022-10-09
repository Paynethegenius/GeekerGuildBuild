import React from "react";

function CharDetails({ details }) {
  return (
    <div className="leftpanelbody__content__body__description ">
      {details.map((item , id) => {
        return (
          <div key = {id}>
            <p >{item}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default CharDetails;
