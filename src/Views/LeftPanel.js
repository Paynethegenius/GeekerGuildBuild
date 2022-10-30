import React, { useRef, useState, useEffect, useContext } from "react";
import { Contento, Webo, Soundo, Teacho } from "../Data/geekers.js";
import gsap from "gsap";
import "../Views/leftpanel.css";
import Heading from "../SubComponents/Heading";
import CharDetails from "../SubComponents/CharDetails.js";
import CharExperience from "../SubComponents/CharExperience.js";
import TechnicalDetails from "../SubComponents/TechnicalDetails.js";
import avatar from "../Images/Avatar.png";
import clickAudio from "../Audio/click.mp3";
import selectAudio from "../Audio/select.mp3";
import { ModelContext } from "../Context/ModelContext";
import volumeOff from "../Svg/volumeOff.svg";

function LeftPanel() {
  const {
    activeCharacter,
    setCloseWeboModal,
    setCloseTeachoModal,
    setCloseSoundoModal,
    setCloseContentoModal,
    setActiveCharacter,
    setOption,
    playAudio,
    setplayAudio,
  } = useContext(ModelContext);

  const [character, setCharacter] = useState(Webo);
  const clickRef = useRef(null);
  const selectRef = useRef(null);
  const leftPanelContentBodyRef = useRef(null);

  const animate = (char) => {
    if (char !== character) {
      gsap.fromTo(".svgLevel", { duration: 1, scaleX: 0 }, { scaleX: 1 });
      gsap.fromTo(
        ".leftpanelbody__content__body__description>div>p",
        {
          autoAlpha: 0,
          stagger: 0.5,
        },
        {
          duration: 1,
          autoAlpha: 1,
        }
      );
      gsap.fromTo(
        ".charexperience__img",
        {
          duration: 2,
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      );
    }
  };

  const soundSelectButton = () => {
    selectRef.current.play();
  };
  const soundClickButton = (char) => {
    if (char !== character) {
      clickRef.current.play();
    }
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="leftpanelbody">
      <div className="leftpanelbody__margin">
        <div className="leftpanelbody__margin__header allheaders"> </div>
        <div className="leftpanelbody__margin__body"></div>
        <div className="leftpanelbody__margin__footer allfooters"> </div>
      </div>
      <div className="leftpanelbody__content ">
        <div className="leftpanelbody__content__heading  allheaders">
          <h1>SELECT A CHARACTER</h1>{" "}
          <img
            className="leftpanelbody__content__heading__mute"
            src={volumeOff}
            alt="mute"
            onClick={() => {
            
              playAudio ? setplayAudio(false) : setplayAudio(true);
            }}
          />
        </div>
        <div
          className="leftpanelbody__content__body"
          ref={leftPanelContentBodyRef}
        >
          <Heading
            description="DESCRIPTION"
            icon
            text={character.name}
            color={character.bar}
          />
          <CharDetails details={character.details} />
          <Heading description="TECHNICAL SKILLS" borderRadius={true} />

          <div className="leftpanelbody__content__body__technicalSkill">
            <TechnicalDetails skills={character.skills} bar={character.bar} />
          </div>

          <Heading description="EXPERIENCE" borderRadius={true} />

          <CharExperience software={character.experience} />
        </div>

        <div className="leftpanelbody__content__selection">
          <div className="leftpanelbody__content__selection_inner">
            <div className="leftpanelbody__content__selection__Avatars">
              <img
                onClick={() => {                 
                  leftPanelContentBodyRef.current.scrollTo(0, 0);
                  setOption(6);
                  soundClickButton(Webo);
                  setCharacter(Webo);
                  animate(Webo);
                  setActiveCharacter({
                    Webo: "active",
                    Contento: "",
                    Soundo: "",
                    Teacho: "",
                  });
                }}
                onMouseEnter={() => {
                  soundSelectButton();
                }}
                className={` webo ${activeCharacter.Webo} `}
                src={avatar}
                alt="avatar"
              />
              <img
                onClick={() => {
                  leftPanelContentBodyRef.current.scrollTo(0, 0);
                  setOption(7);
                  soundClickButton(Contento);
                  setCharacter(Contento);
                  animate(Contento);
                  setActiveCharacter({
                    Webo: "",
                    Contento: "active",
                    Soundo: "",
                    Teacho: "",
                  });
                }}
                onMouseEnter={() => {
                  soundSelectButton();
                }}
                className={` contento ${activeCharacter.Contento} `}
                src={avatar}
                alt="avatar"
              />
              <img
                onClick={() => {
                  leftPanelContentBodyRef.current.scrollTo(0, 0);
                  setOption(4);
                  soundClickButton(Soundo);
                  setCharacter(Soundo);
                  animate(Soundo);
                  setActiveCharacter({
                    Webo: "",
                    Contento: "",
                    Soundo: "active",
                    Teacho: "",
                  });
                }}
                onMouseEnter={() => {
                  soundSelectButton();
                }}
                className={` soundo ${activeCharacter.Soundo} `}
                src={avatar}
                alt="avatar"
              />
              <img
                onClick={() => {
                  leftPanelContentBodyRef.current.scrollTo(0, 0);
                  setOption(9);
                  soundClickButton(Teacho);
                  setCharacter(Teacho);

                  animate(Teacho);
                  setActiveCharacter({
                    Webo: "",
                    Contento: "",
                    Soundo: "",
                    Teacho: "active",
                  });
                }}
                onMouseEnter={() => {
                  soundSelectButton();
                }}
                className={` teacho ${activeCharacter.Teacho} `}
                src={avatar}
                alt="avatar"
              />
              <div className="lefttpanelbodyfooter__select">
                <div
                  className="leftpanelbodyfooter__select__button"
                  onClick={() => {
                    leftPanelContentBodyRef.current.scrollTo(0, 0);

                    if (activeCharacter.Webo === "active") {
                      setCloseWeboModal(false);
                      soundClickButton();
                    }
                    if (activeCharacter.Contento === "active") {
                      setCloseContentoModal(false);
                      soundClickButton();
                    }
                    if (activeCharacter.Soundo === "active") {
                      setCloseSoundoModal(false);
                      soundClickButton();
                    }

                    if (activeCharacter.Teacho === "active") {
                      setCloseTeachoModal(false);
                      soundClickButton();
                    }
                  }}
                >
                  <p> GO </p>
                </div>{" "}
              </div>
              <audio ref={clickRef}>
                <source src={clickAudio}></source>
              </audio>
              <audio ref={selectRef}>
                <source src={selectAudio}></source>
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
