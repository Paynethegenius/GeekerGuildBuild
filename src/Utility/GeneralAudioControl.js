import React, { useState, useContext, useRef, useEffect } from "react";
import { ModelContext } from "../Context/ModelContext";
import play from "../Images/baseline_play_arrow_white_24dp.png";
import pause from "../Images/baseline_pause_white_24dp.png";
import replay from "../Images/baseline_replay_white_24dp.png";

import "../Utility/generalaudiocontrol.css";

function GeneralAudioControl({ flag }) {
  const { playAudio, setplayAudio, bgMusicRef } = useContext(ModelContext);

  const [musicIcon, setMusicIcon] = useState(pause);

  const playControls = () => {
    if (playAudio && musicIcon === pause) {
      setplayAudio(false);
      setMusicIcon(play);
    }

    if (playAudio === false && musicIcon === play) {
      setplayAudio(true);
      setMusicIcon(pause);
    }
  };

  useEffect(() => {
    playAudio ? setMusicIcon(pause) : setMusicIcon(play);
  }, [playAudio]);

  return (
    <div className="generalAudioControl">
      <img
        onClick={() => { 
          playControls();
        }}
        src={musicIcon}
        alt=""
      />
      <img
        src={replay}
        alt=""
        onClick={() => {
          setplayAudio(true);
          setMusicIcon(pause);
          bgMusicRef.current.currentTime = 0;
          bgMusicRef.current.play();
        }}
      />
    </div>
  );
}

export default GeneralAudioControl;
