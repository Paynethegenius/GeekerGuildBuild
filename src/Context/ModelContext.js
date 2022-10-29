import React, { createContext, useState, useRef } from "react";


import clickAudio from "../Audio/click.mp3";
import selectAudio from "../Audio/select.mp3";
import bgMusic from "../Audio/BGmusicA.mp3";

const pack = {
  value: "something",
};

export const ModelContext = createContext(pack);

function ModelContextProvider(props) {
  const [model, setModel] = useState({ });
  const [closeIntroModal, setCloseIntroModal] = useState(false);
  const [closeWebooModal, setCloseWeboModal] = useState(true);
  const [closeTeachoModal, setCloseTeachoModal] = useState(true);
  const [closeSoundoModal, setCloseSoundoModal] = useState(true);
  const [closeContentoModal, setCloseContentoModal] = useState(true);
  const [activeCharacter, setActiveCharacter] = useState({
    Webo: "active",
    Contento: "",
    Soundo: "",
    Teacho: "",
  });
  const [option, setOption] = useState(5);
  const [playAudio, setplayAudio] = useState(true);
  
  const [dismissLoader, setDismissLoader] = useState(true);


  const clickRef = useRef(null);
  const selectRef = useRef(null);
  const bgMusicRef = useRef(null); 
  

  const soundSelectButton = () => {
    selectRef.current.play();
  };
  const soundClickButton = () => {
    clickRef.current.play();
  };

  return (
    <ModelContext.Provider
      value={{
        model,
        setModel,
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
        activeCharacter,
        setActiveCharacter,
        soundSelectButton,
        soundClickButton,
        option, setOption,
        playAudio, setplayAudio,
        dismissLoader, setDismissLoader,      
        bgMusicRef,
      }}
    ><div>
    <audio ref={clickRef}>
      <source src={clickAudio}></source>
    </audio>
    <audio ref={selectRef}>
      <source src={selectAudio}></source>
    </audio>
    <audio ref={bgMusicRef}>
    <source src={bgMusic}></source>
  </audio>
  </div>
      {props.children}
    </ModelContext.Provider>
  );
}

export default ModelContextProvider;
