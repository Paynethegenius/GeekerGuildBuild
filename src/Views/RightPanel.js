import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModelContext } from "../Context/ModelContext";

import Threescene from "../threejs/Threescene";
import play from "../Images/baseline_play_arrow_white_24dp.png";
import pause from "../Images/baseline_pause_white_24dp.png";
import replay from "../Images/baseline_replay_white_24dp.png";
import "../Views/rightpanel.css";
import GeneralAudioControl from "../Utility/GeneralAudioControl";
import gsap from "gsap";
import { duration } from "@mui/material";
import { Contento, Webo, Soundo, Teacho } from "../Data/geekers.js";
import Loading from "../Utility/Loading";
import RefreshIcon from '@mui/icons-material/Refresh';

function RightPanel({ leftPanelDetails }) {
  const {
    activeCharacter,
    setCloseWeboModal,
    setCloseTeachoModal,
    setCloseSoundoModal,
    setCloseContentoModal,
    soundClickButton,
    dismissLoader,
    errorLoader
  } = useContext(ModelContext);

  

  const bounceSelect = (tone, texture) => {
    gsap.fromTo(
      ".rightpanelbodyfooter__select__button",
      {
        outline: `2px solid white`,
        color: tone,
        backgroundColor: "#fff",
      },
      {
        outline: "2px solid #fff",
        backgroundColor: texture,
        duration: 1,
        yoyo: true,
        repeat: -1,
      }
    );
  };

  useEffect(() => {
    const tone = "black";
    if (activeCharacter.Webo === "active") bounceSelect(tone, Webo.bar);
    if (activeCharacter.Contento === "active") bounceSelect(tone, Contento.bar);
    if (activeCharacter.Soundo === "active") bounceSelect(tone, Soundo.bar);
    if (activeCharacter.Teacho === "active") bounceSelect(tone, Teacho.bar);
  }, [activeCharacter]);

  return (
    <div className="rightpanelbody">
      <div className="rightpanelbodyheader allheaders">
        <GeneralAudioControl />
      </div>
      <div className="righpanel__canva">
         {dismissLoader && ( <div className="righpanel__canva__loadingBar">
         <p>Initializing 3D component...</p>
            <div className="loading__container">
           
              <Loading />
            </div>
          
        </div>)}

        {errorLoader && ( <div className="righpanel__canva__loadingBar">
        <p>Failed to load 3D component.</p>
        <p>Please Reload Page</p> 
           <div className="loading__container">
           
          <RefreshIcon sx={{ fontSize: 20 }} />
           </div>
         
       </div>)}
        <Threescene leftPanelDetails={leftPanelDetails} />
      </div>

      <div className="rightpanelbodyfooter allfooters">
        <div className="rightpanelbodyfooter__select">
          <button
            className="rightpanelbodyfooter__select__button"
            onClick={() => {
              if (activeCharacter.Webo === "active") {
                setCloseWeboModal(false);

                soundClickButton();
              }
              if (activeCharacter.Contento === "active") {
                setCloseContentoModal(false);
                soundClickButton();
              }
              if (activeCharacter.Soundo === "active") {
                setCloseSoundoModal(false);
                soundClickButton();
              }

              if (activeCharacter.Teacho === "active") {
                setCloseTeachoModal(false);

                soundClickButton();
              }
            }}
          >
            SELECT
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
