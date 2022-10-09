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
import selectAudio from "../Audio/select.mp3";import {ModelContext} from "../Context/ModelContext";
import sceneModel from "../Model/contentoScene.glb";
import sceneModel2 from "../Model/contentoScene2.glb";


function LeftPanel() {
  const {setModel} = useContext(ModelContext)

 




  const [character, setCharacter] = useState(Webo);
  const [activeCharacter, setActiveCharacter] = useState({
    Webo: "active",
    Contento: "",
    Soundo: "",
    Teacho: "",
  });

  const clickRef = useRef(null);
  const selectRef = useRef(null);
  
  useEffect(() => {
    animate();    
    soundSelectButton();
  }, []);

  const soundSelectButton = () => {
    selectRef.current.play();
  };
  const soundClickButton = (char) => {
    if (char !== character) {
      clickRef.current.play();
    }
  };
  
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
        </div>
        <div className="leftpanelbody__content__body">
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
                  setModel({object :sceneModel2})
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