import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Threescene from "../threejs/Threescene";
import "../Views/rightpanel.css";

function RightPanel({ leftPanelDetails }) {
  return (
    <div className="rightpanelbody">
      <div className="rightpanelbodyheader allheaders"></div>
      <div className="righpanel__canva">
        {" "}
        <Threescene leftPanelDetails={leftPanelDetails} />
      </div>

      <div className="rightpanelbodyfooter allfooters">
        <div className="rightpanelbodyfooter__select">
          <Link to="/webo">
            <button className="rightpanelbodyfooter__select__button">
              SELECT
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
