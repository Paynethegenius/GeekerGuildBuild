import React, { createContext, useState, useRef } from "react";
import sceneModel from "../Model/contentoScene.glb";

import clickAudio from "../Audio/click.mp3";
import selectAudio from "../Audio/select.mp3";

const pack = {
  value: "something",
};

export const ModelContext = createContext(pack);

function ModelContextProvider(props) {
  const [model, setModel] = useState({ object: sceneModel });
  const [closeIntroModal, setCloseIntroModal] = useState(true);
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


  const clickRef = useRef(null);
  const selectRef = useRef(null);
  

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
      }}
    ><div>
    <audio ref={clickRef}>
      <source src={clickAudio}></source>
    </audio>
    <audio ref={selectRef}>
      <source src={selectAudio}></source>
    </audio>
  </div>
      {props.children}
    </ModelContext.Provider>
  );
}

export default ModelContextProvider;
