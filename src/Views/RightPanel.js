import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModelContext } from "../Context/ModelContext";

import Threescene from "../threejs/Threescene";
import ThreesceneSoundo from "../threejs/ThreesceneSoundo";
import "../Views/rightpanel.css";

function RightPanel({ leftPanelDetails }) {
  const {
    activeCharacter,
    setCloseWeboModal,
    setCloseTeachoModal,
    setCloseSoundoModal,
    setCloseContentoModal,
    soundSelectButton,
    soundClickButton,

    
  } = useContext(ModelContext);

  return (
    <div className="rightpanelbody">
      <div className="rightpanelbodyheader allheaders"></div>
      <div className="righpanel__canva">
        {" "}
        <Threescene leftPanelDetails={leftPanelDetails} />
       
      </div>

      <div className="rightpanelbodyfooter allfooters">
        <div className="rightpanelbodyfooter__select">
          <Link>
            <button
              className="rightpanelbodyfooter__select__button"
              onClick={() => {
                if (activeCharacter.Webo === "active") {
                  setCloseWeboModal(false)
                
                  soundClickButton();
                 
                }
                if (activeCharacter.Contento === "active") {
                  setCloseContentoModal(false)
                  soundClickButton();
                
                }
                if (activeCharacter.Soundo === "active") {
                   setCloseSoundoModal(false)
                   soundClickButton();
                }
                
                if (activeCharacter.Teacho === "active"){
                  setCloseTeachoModal(false)
                  
                  soundClickButton();
                
              }}
            }
            >
              SELECT
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
