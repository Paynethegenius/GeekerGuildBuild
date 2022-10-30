import React, { useEffect, useRef, useContext } from "react";
import "../Characters/webo.css";
import weboArt1 from "../Images/Saly-1.png";
import weboArt2 from "../Images/Saly-10.png";
import twitterLogo from "../Images/tweeter.png";
import instagramLogo from "../Images/instagram.png";
import linkedinLogo from "../Images/Linked.png";
import linePng from "../Images/Line.png";
import cloud from "../Images/cloud.png";
import plant from "../Images/Plant.png";
import gsap from "gsap";
import scrolldown from "../Images/scroll-down.gif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ModelContext } from "../Context/ModelContext";

gsap.registerPlugin(ScrollTrigger);

function Webo({ setCloseModal }) {
  const divRef = useRef(null);
  const imgRef = useRef(null);
  const rightRef = useRef(null);

  const { soundSelectButton, soundClickButton } = useContext(ModelContext);

  const globalEase = {
    ease: "bounce.inOut",
  };

  const option = {
    threshold: 0.5,
  };

  const artOneTimeline = () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === divRef.current) {
          if (entry.isIntersecting) {

            gsap.to(imgRef.current, {
              bottom: 0,
              duration: 1,
              ease: globalEase.ease,
              delay: 0.1,
            });

            gsap.to(".webo__rightpanel__body__mid", {
              borderBottomLeftRadius: "0rem",
              duration: 1,
            });
            gsap.to(".webo__scroll", {
             opacity: 0,
             x : "+100%",
              duration: 2,
            });
          } else {
            gsap.to(imgRef.current, { bottom: "-100%", duration: 1 });
            gsap.to(".webo__rightpanel__body__mid", {
              borderBottomLeftRadius: "20rem",
              duration: 1,
            });
          }
        } 
      });
    }, option);

    observer.observe(divRef.current);
  };

  const scrollPage = (e) => {
    if (e.deltaY > 0) {
      rightRef.current.scrollBy(rightRef.current.scrollX, 80);
    } else {
      rightRef.current.scrollBy(rightRef.current.scrollX, -80);
    }
  };

  const addScrollEvent = (e) => {};

  useEffect(() => {
    const leftImage = rightRef.current;

    gsap.fromTo(
      ".webo__leftpanel",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 0.2,
      }
    );
    gsap.fromTo(
      ".webo__rightpanel",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1,
      }
    );
    gsap.fromTo(
      ".weboArt1 img",
      {
        x: "-150%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 2,
      }
    );
    gsap.fromTo(
      ".webo__scroll",
      {
        x: "+50%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 2,
      }
    );

    artOneTimeline();
    leftImage.addEventListener("wheel", addScrollEvent);

    return () => {
      leftImage.removeEventListener("wheel", addScrollEvent);
    };
  }, []);

  return (
    <div className="webo__page">
      <div className="webo__page__container">
        <div
          className="webo__page__container__close"
          onClick={() => {
            setCloseModal(true);
            soundClickButton();
          }}
          onMouseOver={() => {
            soundSelectButton();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#0b048b"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </div>
        <div className="webo__scroll">
          <img src={scrolldown} alt="scroll" />
        </div>
        <div
          className="webo__leftpanel"
          onWheel={(e) => {
            scrollPage(e);
          }}
        >
          <div className="weboArt1 ">
            <img src={weboArt1} alt="Webo_Image" />
          </div>
          <div ref={imgRef} className="weboArt2">
            <img src={weboArt2} alt="Webo_Image" />
          </div>         
        </div>
        <div className="webo__rightpanel" ref={rightRef}>
          <div className="webo__bgcloudA">
            <img src={cloud} alt="" />
          </div>
          <div className="webo__bgcloudB">
            <img src={cloud} alt="" />
          </div>
          <div className="webo__rightpanel__body">
            <section className="webo__rightpanel__body__top">
              <div className="webo__rightpanel__body__top__container">
                <div className="webo__rightpanel__body__top__heading">
                  <p>
                    <span className="weboNum"> 0 1 .</span>{" "}
                    <span className="weboTag">Webo </span>
                  </p>
                </div>

                <div className="webo__rightpanel__body__top__description__left">
                  <div className="webo__rightpanel__body__top__left__name">
                    <p className="webo__name">
                      Olowu<br></br> Durodoluwa
                    </p>

                    <p className="webo__tag">
                      as a web developer<br></br>
                    </p>
                  </div>
                  <div className="webo__rightpanel__body__top__left__textfield">
                    <div className="webo__definition-list">
                      <img className="webo__line" src={linePng} alt="#" />
                      <div className="webo__highlight one">
                        <p>
                        From doing it to teaching it.<br></br>He has come a long
                        way.
                        
                        </p>
                      </div>
                      <div className=" webo__points webo__three">
                        <p>
                        He has always loved building things, discovering a
                        multitude of ways to solve problems as a fast learner,
                        on the way.
                        
                        </p>
                      </div>
                      <div className=" webo__points webo__four">
                       <p>
                       He’s an engineer at heart. A creative in the mind and A
                        visionary in the spirit.
                       
                       
                       </p> 
                      </div>{" "}
                    </div>
                  </div>
                  <div className="webo__rightpanel__body__top__left__base">
                    <div className="webo__socials">
                    <a href="https://www.instagram.com">  
                    <img
                        src={instagramLogo}
                        alt="instagramLink"
                        className="webo__socials__logo"
                      /></a>
                      <a href="https://www.twitter.com">
                      <img
                        src={twitterLogo}
                        alt="twitterLink"
                        className="webo__socials__logo"
                      /></a>
                      <a href="https://www.linkedin.com/in/durodoluwa-o-862946112/">
                      <img
                        src={linkedinLogo}
                        alt="linkedLink"
                        className="webo__socials__logo"
                      />
                      </a>
                    </div>
                    <a href="https://www.linkedin.com/in/durodoluwa-o-862946112/">
                    <div className="webo__contact">
                    
                      <button className="webo__button">Continue</button>
                    </div></a>
                  </div>
                </div>
              </div>
            </section>
            <section className="webo__rightpanel__body__mid" ref={divRef}>
              <div className="webo__rightpanel__body__mid__container">
                <div className="webo__rightpanel__body__mid__container__content">
                  <div className="webo__content__primary">
                    <p>
                      Work<br></br> Experience
                    </p>
                  </div>

                  <div className="webo__content__divider">
                    <div className="webo__lineboxOne"></div>
                    <p>Full Time</p>
                    <div className="webo__lineboxTwo">
                      <div className="webo__bgPlantA">
                        <img src={plant} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="webo__content__detail">
                    <p>As a Full Time Creative</p>
                    <p>2018</p>
                  </div>

                  <div className="webo__content__secondary">
                    <p>Nitro 121</p>
                  </div>

                  <div className="webo__content__detail">
                    <p>As a Tutor</p>
                    <p>2019</p>
                  </div>

                  <div className="webo__content__secondary">
                    <p>Compunet</p>
                  </div>

                  <div className="webo__content__divider">
                    <div className="webo__lineboxThree"></div>
                    <p>Contract</p>
                    <div className="webo__lineboxFour">
                      <div className="webo__bgPlantB">
                        <img src={plant} alt="" />
                      </div>{" "}
                    </div>
                  </div>

                  <div className="webo__content__detail">
                    <p>As a Web Developer</p>
                    <p>2016</p>
                  </div>

                  <div className="webo__content__secondary">
                    <p>HNIC Media</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webo;
