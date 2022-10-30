import React, { useRef, useContext, useEffect } from "react";
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

  
  const {
    closeIntroModal,
    setCloseIntroModal,
    closeWebooModal,
    setCloseWeboModal,
    closeTeachoModal,
    setCloseTeachoModal,
    closeSoundoModal,
    setCloseSoundoModal,
    closeContentoModal,
    setCloseContentoModal,
    threeMake,
    setThreeMake,
    playAudio,
    bgMusicRef,
  } = useContext(ModelContext);

  const referenceDiv = useRef("");
  const charselRef = useRef(null);

  const createThreeInstance = () => {
    if (sizes.width <= 600) {
      setThreeMake(false);
    } else {
      setThreeMake(true);
    }
  };

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  useEffect(()=>{
    createThreeInstance();
    //load canva element if screen size permits.
  },[])


  useEffect(() => {
    if (playAudio === false) {
      bgMusicRef.current.pause();
    
    }

    if (playAudio === true) {
      bgMusicRef.current.play();
    }
  }, [playAudio, bgMusicRef]);


  return (
    <div className="charselpage" ref={charselRef}>
      {closeIntroModal && (
        <IntroModal setCloseIntroModal={setCloseIntroModal} />
      )}
      {!closeWebooModal && <Webo setCloseModal={setCloseWeboModal} />}
      {!closeTeachoModal && <Teacho setCloseModal={setCloseTeachoModal} />}
      {!closeSoundoModal && <Soundo setCloseModal={setCloseSoundoModal} />}
      {!closeContentoModal && (
        <Contento setCloseModal={setCloseContentoModal} />
      )}
      <div className="leftPanel" ref={referenceDiv}>
        <LeftPanel />
      </div>
      <div className="rightPanel">
        {threeMake && <RightPanel leftPanelDetails={referenceDiv} />}
      </div>
    </div>
  );
}

export default CharSelPage;
