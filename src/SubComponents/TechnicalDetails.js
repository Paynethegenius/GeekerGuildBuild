import React,{} from "react";
import "./technicaldetails.css";


function TechnicalDetails({ skills, bar }) {


  
  return (
    <>
      {skills.map((item , id) => {
        return (
          <div key={id} className="technicaldetails">
            {" "}
            <div className="technicaldetails__details">
              <div className="technicaldetails__details__icon">{item.icon}</div>
              <div className="technicaldetails__details__description">
                {item.description}
              </div>
            </div>
            <div className="technicaldetails__rating">
              <svg
                className="svgBar"
                viewBox="0 0 447 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect 
                  x="0"
                  y="0"
                  width="445.846"
                  height="11.6899"
                  rx="5.84497"
                  fill={item.fill}
                />
              </svg>

              <svg
                className="svgLevel"
                viewBox="0 0 447 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width={item.level}
                  height="11.6899"
                  rx="5.84497"
                  fill={bar}
                />
              </svg>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TechnicalDetails;
