import React, { useRef, useState, useContext } from "react";
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
    setCloseContentoModal,} = useContext(ModelContext)
 
  

  const referenceDiv = useRef("");

  return (
    <div className="charselpage">
      {!closeIntroModal && <IntroModal setCloseModal={setCloseIntroModal} />}
      {!closeWebooModal && <Webo setCloseModal={setCloseWeboModal} />}
      {!closeTeachoModal && <Teacho setCloseModal={setCloseTeachoModal} />}
      {!closeSoundoModal && <Soundo setCloseModal={setCloseSoundoModal} />}
      {!closeContentoModal && <Contento setCloseModal={setCloseContentoModal} />}
      <div className="leftPanel" ref={referenceDiv}>
        <LeftPanel />
      </div>
      <div className="rightPanel">
        <RightPanel leftPanelDetails={referenceDiv} />
      </div>
    </div>
  );
}

export default CharSelPage;
