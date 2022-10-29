import React, { useRef, useState, useContext, useEffect } from "react";
import LeftPanel from "../Views/LeftPanel";
import RightPanel from "../Views/RightPanel";
import "../MainComponents/charselpage.css";
import Webo from "../Characters/Webo";
import Teacho from "../Characters/Teacho";
import Soundo from "../Characters/Soundo";
import Contento from "../Characters/Contento";


import IntroModal from "../Modals/IntroModal";
import { ModelContext } from "../Context/ModelContext";


function CharSelPage() {

  const {closeIntroModal,
    setCloseIntroModal,
    closeWebooModal,
    setCloseWeboModal,
    closeTeachoModal,
    setCloseTeachoModal,
    closeSoundoModal,
    setCloseSoundoModal,
    closeContentoModal,
    setCloseContentoModal, 
    playAudio, bgMusicRef


 } = useContext(ModelContext)  
  const referenceDiv = useRef("");


  useEffect(() => {
    if (playAudio === false) {
      console.log(bgMusicRef.current.currentTime);
      console.log("now pausing");
      console.log("audioState", playAudio);
      bgMusicRef.current.pause();
      clearTimeout();
    }

    if (playAudio === true) {
      console.log(bgMusicRef.current.currentTime);
      console.log("now playing");
      console.log("audioState", playAudio);
      bgMusicRef.current.play();
    }
  }, [playAudio, bgMusicRef]);

  return (
    <div className="charselpage">
   
      {!closeIntroModal && <IntroModal setCloseIntroModal={setCloseIntroModal}  />}
      {!closeWebooModal && <Webo setCloseModal={setCloseWeboModal} />}
      {!closeTeachoModal && <Teacho setCloseModal={setCloseTeachoModal} />}
      {!closeSoundoModal && <Soundo setCloseModal={setCloseSoundoModal} />}
      {!closeContentoModal && <Contento setCloseModal={setCloseContentoModal} />}
      <div className="leftPanel" ref={referenceDiv}>
        <LeftPanel />
      </div>
      <div className="rightPanel">
        <RightPanel   leftPanelDetails={referenceDiv}   />
      </div>

    </div>
  );
}

export default CharSelPage;
