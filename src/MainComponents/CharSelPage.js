import React, { useRef, useState, useContext } from "react";
import LeftPanel from "../Views/LeftPanel";
import RightPanel from "../Views/RightPanel";
import "../MainComponents/charselpage.css";
import Webo from "../Characters/Webo";

import IntroModal from "../Modals/IntroModal";

function CharSelPage() {
  const [closeModal, setCloseModal] = useState(true);

  const referenceDiv = useRef("");

  return (
    <div className="charselpage">
      {!closeModal && <IntroModal setCloseModal={setCloseModal} />}
    { /* <Webo/> */}
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
