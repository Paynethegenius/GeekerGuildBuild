import React, { useEffect, useRef } from "react";
import "./posthomepage.css";
import avatar from "../Images/Avatar.png";
import gsap from "gsap";
import bubble from "../Audio/Bubbles.mp3";
import { Link } from "react-router-dom";

function PostHomepage() {
  const bubbleRef = useRef(null);

  const playAudio = (ref) => {
    ref.current.play();
  };

  const animateLoader = () => {
    let animator = gsap.timeline();
    animator.fromTo(".posthomepage__svg", { x: "100%" }, { x: 0 });
    animator.fromTo(
      ".posthomepage__svg",
      { scaleX: 0 },
      { delay: 1, duration: 1, scaleX: 1, ease: "bounce", stagger: 0.6 },
      "-=1"
    );
    animator.fromTo(
      ".posthomepage__bgSlider",
      { scaleY: 0 },
      { delay: 1, duration: 2, scaleY: 1, ease: "bounce" },
      "-=1"
    );
    animator.fromTo(
      ".posthomepage__svg__imagediv__bars__image",
      { autoAlpha: 0 },
      { delay: 1, duration: 1, autoAlpha: 1, stagger: 0.6 },
      "-=1"
    );
    animator.fromTo(
      ".posthomepage__svg__imagediv__bars__image>img",
      { border: "0px solid grey" },
      { delay: 1, duration: 1, border: "4px solid grey" },
      "-=1"
    );
  };

  const fadeLoader = () => {
    let animatorOut = gsap.timeline();

    animatorOut.fromTo(
      ".posthomepage",
      { autoAlpha: 1 },
      { duration: 3, autoAlpha: 0 }
    );
  };

  const clickRef = useRef(null);

  useEffect(() => {
    animateLoader();
    playAudio(bubbleRef);

    setTimeout(() => {
      fadeLoader();
    }, 8000);

    setTimeout(() => {
      console.log(clickRef);
      clickRef.current.click();
    }, 10000);
  }, []);

  return (
    <div className="posthomepage">
      <audio ref={bubbleRef}>
        <source src={bubble} />
      </audio>
      <div className="posthomepage__bgSlider"></div>
      <div className="posthomepage__svg">
        <div className="posthomepage__svg__object">
          <div className="posthomepage__svg__imagediv">
            <div className="posthomepage__svg__imagediv__bars">
              <div className="posthomepage__svg__imagediv__bars__image">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className="posthomepage__svg__imagediv__bars">
              {" "}
              <div className="posthomepage__svg__imagediv__bars__image">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className="posthomepage__svg__imagediv__bars">
              {" "}
              <div className="posthomepage__svg__imagediv__bars__image">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className="posthomepage__svg__imagediv__bars">
              {" "}
              <div className="posthomepage__svg__imagediv__bars__image">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>

          <svg
            viewBox="0 0 1920 890"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1088.22 0H574.71L263 890H771L1088.22 0Z" fill="#E33B3B" />
            <path
              d="M513.5 0H0L6.08237e-05 890H195.835L513.5 0Z"
              fill="#65E529"
            />
            <path
              d="M1662.62 0H1150.32L838 890H1346L1662.62 0Z"
              fill="#2A4773"
            />
            <path d="M1920 0H1724.37L1412 890H1920V0Z" fill="#FCCC27" />
          </svg>
        </div>
      </div>
      <div className="posthomepage__loader">
        <Link to={"/select"}>
          <button ref={clickRef}>Select</button>
        </Link>
      </div>
    </div>
  );
}

export default PostHomepage;
