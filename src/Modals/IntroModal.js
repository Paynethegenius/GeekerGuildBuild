import React, { useState, useContext } from "react";
import play from "../Images/baseline_play_arrow_white_24dp.png";
import pause from "../Images/baseline_pause_white_24dp.png";
import replay from "../Images/baseline_replay_white_24dp.png";
import { ModelContext } from "../Context/ModelContext";

import "../Modals/intromodal.css";
import GeneralAudioControl from "../Utility/GeneralAudioControl";


function IntroModal({ setCloseIntroModal}) {



  return (
    <div className="charsel__intro">
    <div className="charsel__intro__question">
    WHO IS GENIUS?</div>
      <div className="charsel__intro__welcome">
      <div className="charsel__intro__muteAudio">
      <GeneralAudioControl /> </div>
      

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
              <p>A Web developer from Nigeria.</p>
            </div>
          </div>
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <p>A man of many colors.</p>
            </div>
          </div>
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <p>Please pick a color of him, that you're interested in</p>
            </div>
          </div>
          <br></br>
          <div className="charsel__intro__welcome__text__bar">
            <div className="charsel__intro__welcome__text__bar__div1">(*)</div>
            <div className="charsel__intro__welcome__text__bar__div2">
              <p>Expore, and kindly give him a call</p>
            </div>
          </div>
        </div>
        <div className="charsel__intro__welcome__close">
          <button
            onClick={() => {
              setCloseIntroModal(true);
              
            }}
          >
            Close
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default IntroModal;