import React, { useState, useRef, useEffect } from "react";
import play from "../Images/baseline_play_arrow_white_24dp.png";
import pause from "../Images/baseline_pause_white_24dp.png";
import replay from "../Images/baseline_replay_white_24dp.png";
import bgMusic from "../Audio/BGmusic.mp3";
import "../Modals/intromodal.css";


function IntroModal({ setCloseModal }) {
  const bgMusicRef = useRef(null);

  const [playAudio, setplayAudio] = useState(true);
  const [musicIcon, setMusicIcon] = useState(pause);

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
  }, [playAudio]);

  return (
    <div className="charsel__intro">
      <div className="charsel__intro__welcome">
        <div className="charsel__intro__muteAudio">
          <img
            onClick={() => {
              console.log("button clicked");

              if (playAudio && musicIcon === pause) {
                setplayAudio(false);
                setMusicIcon(play);
              }

              if (playAudio === false && musicIcon === play) {
                setplayAudio(true);
                setMusicIcon(pause);
              }
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

        <div className="charsel__intro__welcome__text">
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <h1>Olowu Durodoluwa</h1>
            </div>
          </div>
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <p>I am a web developer from Nigeria.</p>
            </div>
          </div>
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <p>I am a man of many colors.</p>
            </div>
          </div>
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <p>Please pick a color of me, that you're interested in</p>
            </div>
          </div>
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <p>Expore, and kindly give me a call</p>
            </div>
          </div>
        </div>
        <div className="charsel__intro__welcome__close">
          <button
            onClick={() => {
              setCloseModal(true);
            }}
          >
            Close
          </button>
          <audio ref={bgMusicRef}>
            <source src={bgMusic}></source>
          </audio>
        </div>
      </div>
    </div>
  );
}

export default IntroModal;