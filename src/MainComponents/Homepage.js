import React, { useEffect, useRef, useState } from "react";
import Logo from "../Images/Geekersguild7.gif";
import audio from "../Audio/Geekersguild.mp3";
import "./homepage.css";
import {
  animateModalEntry,
  animateHomePage,
  animateModalExit,
} from "../TweenAnimations/homepageAnimations.js";
import selectAudio from "../Audio/select.mp3";
import clickAudio from "../Audio/click.mp3";

import { Link } from "react-router-dom";

function Homepage() {
  const audioRef = useRef(null);
  const enterRef = useRef(null);
  const clickEnterRef = useRef(null);
 

  const playAudio = (ref) => {
    ref.current.play();
  };


  const revealHome = () => {
    playAudio(audioRef);
    setModalIsClicked(true);
  };

  const [modalIsClicked, setModalIsClicked] = useState(false);
  useEffect(() => {
    animateModalEntry();
  }, []);

  return (
    <div className="homepage">
      <audio ref={audioRef}>
        <source src={audio} />
      </audio>
      <audio ref={enterRef}>
        <source src={selectAudio} />
      </audio>
      <audio ref={clickEnterRef}>
        <source src={clickAudio} />
      </audio>
     
      <div className="homepageModal">
        <div className="homepageModal__body">
          <div className="homepageModal__Welcome">
            <h1>WELCOME TO GEEKERS GUILD</h1>

            <p> &copy; Olowu Durodoluwa</p>
          </div>
          <div className="homepageModal__Enter">
            <button
              onClick={() => {
                animateModalExit(revealHome());
                animateHomePage();
              }}
            >
              Start
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="homepage__body">
        <div className="homepage__body__main">
          <div className="homepage__body__logo">
            {" "}
            {modalIsClicked && <img src={Logo} alt="home-logo" />}
          </div>
          <div className="homepage__body__text">
            {" "}
            {modalIsClicked && <h1>Undo/Redo/do</h1>}
          </div>
        </div>
      </div>
      <div className="homepage__footer">
        <Link to={"/select"}>
          <button
            onClick={() => {
            
              
            }}
            onMouseEnter={() => {
              playAudio(enterRef);
            }}
            className="homepage__footer__button"
          >
            ENTER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
