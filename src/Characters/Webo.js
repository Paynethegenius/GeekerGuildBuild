import React, { useEffect, useRef } from "react";
import "../Characters/webo.css";
import weboArt1 from "../Images/Saly-1.png";
import weboArt2 from "../Images/Saly-10.png";
import weboArt3 from "../Images/Saly-38.png";
import twitterLogo from "../Images/tweeter.png";
import instagramLogo from "../Images/instagram.png";
import linkedinLogo from "../Images/Linked.png";
import linePng from "../Images/Line.png";
import whatsappIcon from "../Images/whatsapp.png";
import amazonIcon from "../Images/amazon.png";
import tiktokIcon from "../Images/tiktok.png";
import cloud from "../Images/cloud.png";
import plant from "../Images/Plant.png";
import spring from "../Images/spring.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Webo() {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const rightRef = useRef(null);

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
            console.log(entry);
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

            // setInterval( ()=>{
            //     if(divRef.current.offsetTop < rightRef.current.offsetTop ){
            //         rightRef.current.scrollBy(0, 10 )
            //     }
            // }
            //   , 200)

            //   let i = divRef.current.getBoundingClientRect().top;
            //   setInterval( ()=>{
            //   if(i < divRef.current.offsetTop){
            //     rightRef.current.scrollBy(0,i+=1);
            //   }
            // }, 1000)
          } else {
            gsap.to(imgRef.current, { bottom: "-100%", duration: 1 });
            gsap.to(".webo__rightpanel__body__mid", {
              borderBottomLeftRadius: "20rem",
              duration: 1,
            });
          }
        } else {
          if (entry.isIntersecting) {
            console.log(entry);
            gsap.to(imgRef2.current, {
              bottom: 0,
              duration: 1,
              ease: globalEase.ease,
            });

            if (entry.target === divRef2.current) {
              gsap.to(".webo__rightpanel__body__bottom", {
                borderTopLeftRadius: "20rem",
                duration: 1,
              });
            }
          } else {
            if (entry.target === divRef2.current) {
              gsap.to(".webo__rightpanel__body__bottom", {
                borderTopLeftRadius: "0rem",
                duration: 1,
              });
            }

            gsap.to(imgRef2.current, { bottom: "-100%", duration: 1 });
          }
        }
      });
    }, option);

    observer.observe(divRef.current);
    observer.observe(divRef2.current);
  };

  const scrollPage = (e) => {
    console.log(e);
    if (e.deltaY > 0) {
      rightRef.current.scrollBy(rightRef.current.scrollX, 80);
    } else {
      rightRef.current.scrollBy(rightRef.current.scrollX, -80);
    }
  };

  useEffect(() => {
    gsap.fromTo(".webo__leftpanel", {
      opacity : 0,    
    },
     {
      opacity : 1,
      duration: 2,
      delay : 0.2,
    },    
    )
    gsap.fromTo(".webo__rightpanel", {
      opacity : 0,    
    },
     {
      opacity : 1,
      duration: 2,
      delay : 1,
    },     
    )
    gsap.fromTo(".weboArt1 img", {
      x: "-150%",opacity : 0,   
    },
     {
      x : 0,
      opacity:1,
      duration: 2,
      delay : 2,
    },     
    )


    artOneTimeline();

    rightRef.current.addEventListener("wheel", (e) => {
      console.log(
        "okay, I scrolled",
        divRef.current.offsetHeight,
        divRef.current.offsetLeft,
        divRef.current.offsetTop,
        divRef.current.getBoundingClientRect().top,
        divRef.layerY,
        ",",

        e.target.offsetHeight,
        e.target.offsetLeft,
        e.target.scrollTop,
        e.target.offsetWidth,
        e.layerY
      );
    });
  }, []);

  return (
    <div className="webo__page">
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
        <div ref={imgRef2} className="weboArt3">
          <img src={weboArt3} alt="Webo_Image" />
        </div>
      </div>

      <div className="webo__rightpanel" ref={rightRef}>
      <div className="webo__bgcloudA"><img src={cloud} alt="" /></div>
      <div className="webo__bgcloudB"><img src={cloud} alt="" /></div>
        <div className="webo__rightpanel__body">
          <section className="webo__rightpanel__body__top">
            <div className="webo__rightpanel__body__top__container">
              <div className="webo__rightpanel__body__top__heading">
                <h1>
                  <span className="weboNum"> 0 1 .</span>{" "}
                  <span className="weboTag">Webo </span>
                </h1>
              </div>

              <div className="webo__rightpanel__body__top__description__left">
                <div className="webo__rightpanel__body__top__left__name">
                  <h1 className="webo__name">
                    Olowu<br></br> Durodoluwa
                  </h1>

                  <p className="webo__tag">
                    as a web developer<br></br>
                  </p>
                </div>
                <div className="webo__rightpanel__body__top__left__textfield">
                  <div className="webo__definition-list">
                    <img className="webo__line" src={linePng} alt="#" />
                    <div className="webo__highlight one">
                      From doing it to teaching it.<br></br>He has come a long
                      way.
                    </div>
                    <div className=" webo__points webo__three">
                      He has always loved building things, discovering a
                      multitude of ways to solve problems as a fast learner, on
                      the way.
                    </div>
                    <div className=" webo__points webo__four">
                      He’s an engineer at heart. A creative in the mind and A
                      visionary in the spirit.
                    </div>{" "}
                  </div>
                </div>
                <div className="webo__rightpanel__body__top__left__base">
                  <div className="webo__socials">
                    <img
                      src={instagramLogo}
                      alt="instagramLink"
                      className="webo__instagram"
                    />
                    <img
                      src={twitterLogo}
                      alt="twitterLink"
                      className="webo__twitter"
                    />
                    <img
                      src={linkedinLogo}
                      alt="linkedLink"
                      className="webo__linkedin"
                    />
                  </div>
                  <div className="webo__contact">
                    <button className="webo__button">Contact Me</button>
                  </div>
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
                  <div className="webo__bgPlantA"><img src={plant} alt="" /></div>
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
                  <div className="webo__lineboxFour"><div className="webo__bgPlantB"><img src={plant} alt="" /></div> </div>
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
          <section className="webo__rightpanel__body__bottom" ref={divRef2}>
          <div className="webo__springA"><img src={spring} alt="" /></div>
      <div className="webo__springB"><img src={spring} alt="" /></div>
            <div className="webo__rightpanel__body__bottom__container">
              <div className="webo__rightpanel__body__bottom__container__content">
                <div className="webo__content__primary bottom">
                  <p>Projects</p>
                </div>
                <div className=" webo__projects">
                  <p>01. Whatsapp Clone</p>
                </div>
                <div className="webo__projectlist">
                  <div className="webo__projectlist__avatar">
                    <img src={whatsappIcon} alt="whatsapp" />
                  </div>
                  <div className="webo__projectlist__desc">
                    A cloned layout of the popular app done using react and
                    firebase for back end.
                  </div>
                </div>
                <div className=" webo__projects">
                  <p>02.Amazon Clone</p>
                </div>
                <div className="webo__projectlist">
                  <div className="webo__projectlist__avatar">
                    <img src={amazonIcon} alt="whatsapp" />
                  </div>
                  <div className="webo__projectlist__desc">
                    A cloned layout of the popular app done using react and
                    firebase for back end.
                  </div>
                </div>
                <div className=" webo__projects">
                  <p>03. TikTok Clone</p>
                </div>
                <div className="webo__projectlist">
                  <div className="webo__projectlist__avatar">
                    <img src={tiktokIcon} alt="whatsapp" />
                  </div>
                  <div className="webo__projectlist__desc">
                    A cloned layout of the popular app done using react and
                    firebase for back end.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Webo;
