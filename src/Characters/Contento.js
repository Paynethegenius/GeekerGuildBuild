import { React, useState, useEffect, useRef,useContext } from "react";
import "../Characters/contento.css";

import { videoObject } from "../Data/video";
import cover from "../Images/VideoCover.png";
import play from "../Svg/play_white.svg";
import pause from "../Svg/pause_white.svg";
import twitterLogo from "../Images/tweeter.png";
import instagramLogo from "../Images/instagram.png";
import linkedinLogo from "../Images/Linked.png";
import Thumbnail from "../SubComponents/Thumbnail";
import { ModelContext } from "../Context/ModelContext";

function Contento({ setCloseModal }) {

  
  const {
    
    soundSelectButton,
    soundClickButton,
    
  } = useContext(ModelContext);

  
  let clickStyle = {
    Edits: {
      color: "var(--contento-color-primary)",
    },
    MotionGraphics: {
      color: "var(--contento-color-primary)",
    },
    Shorts: {
      color: "var(--contento-color-primary)",
    },
    SocialMedia: {
      color: "var(--contento-color-primary)",
    },

    color: "white",
  };
  const videoRef = useRef(null);

  const [duration, setDuration] = useState(1);
  const [position, setPosition] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [Icon, setIcon] = useState(play);
  const [showCover, setShowCover] = useState(false);
  const [time, setTime] = useState(0);
  const [video, setVideo] = useState(videoObject.SocialMedia[0].video);
  const [category, setCategory] = useState(videoObject.SocialMedia);
  const [details, setDetails] = useState("second");
  const [categoryStyle, setCategoryStyle] = useState({ ...clickStyle });

  const [viewPortDimension, setViewPortDimension] = useState({
    width: 900,
    height: 507,
  });

  const setCategoryColor = () => {
    setCategoryStyle({
      Edits: {
        color: "var(--contento-color-primary)",
      },
      MotionGraphics: {
        color: "var(--contento-color-primary)",
      },
      Shorts: {
        color: "var(--contento-color-primary)",
      },
      SocialMedia: {
        color: "white",
      },
    });
  };

  const changeVideo = (selectedVideo) => {
    setVideo(selectedVideo);
    videoRef.current.load();
    setPlaying(false);
    setIcon(play);
    setShowCover(true);
  };

  const changeDescription = (selectedVideoDescription) => {
    setDetails(selectedVideoDescription);
  };

  useEffect(() => {
    console.log("aba");
    setCategoryColor();
  }, []);

  return (
    <div className="contento-page">
      <div
        className="contento-page__container__close"
        onClick={() => {
          setCloseModal(true);
          soundClickButton()
        }}

        onMouseOver={()=>{
          soundSelectButton()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#00ffe2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </div>
      <div className="contento-page__container">
        <div className="contento__top__container">
          <div className="contento__left">
            <div className="contento__left__container">
              <div className="contento__left__container__top">
                <div className="contento__left__container__top__heading">
                  <h1>
                    <span className="contentoNum"> 0 3 .</span>{" "}
                    <span className="contentoTag">Contento </span>
                  </h1>
                </div>
                <div className="contento__left__container__top__name">
                  <h1 className="contento__name">
                    Olowu<br></br>
                  </h1>

                  <h1 className="contento__name">Durodoluwa</h1>
                </div>

                <div className="contento__left__container__definition-list">
                  <div className=" contento__points contento__one">
                    As a Content Creator
                  </div>
                  <div className=" contento__points contento__two">
                    <p className=" contento__two__text">
                      Entrusted with capturing moments that happen sparringly,
                      from casual events to directed executions, he has done
                      well. He still finds it funny that, a great history
                      recorder like himself, is usually in a bind when asked to
                      submit videos he appeeared in.
                      <br></br>
                      How can you blame him when, he is good for everybody, but
                      not everybody is good for him on the same scale.
                    </p>
                  </div>{" "}
                  <div className="contento__left__containerbase">
                    <div className="contento__socials">
                      <img
                        src={instagramLogo}
                        alt="instagramLink"
                        className="contento__instagram"
                      />
                      <img
                        src={twitterLogo}
                        alt="twitterLink"
                        className="contento__twitter"
                      />
                      <img
                        src={linkedinLogo}
                        alt="linkedLink"
                        className="contento__linkedin"
                      />
                    </div>
                    <div className="contento__contact">
                      <button className="contento__button">Contact Me</button>
                    </div>

                    <div className="contento__base_left"></div>
                  </div>
                </div>
              </div>
              <div className="contento__left__container__bottom">
                <div className="contento__left__container__bottom__wrapper">
                  <nav className="contento__category">
                    <ul>
                      <li
                        className="category__list "
                        style={categoryStyle.MotionGraphics}
                        onClick={() => {
                          setCategoryStyle({
                            ...clickStyle,
                            ...(clickStyle.MotionGraphics.color =
                              clickStyle.color),
                          });
                          setCategory(videoObject.MotionGraphics);
                          setVideo(videoObject.MotionGraphics[0].video);
                          setPlaying(false);
                          changeDescription(
                            `${videoObject.MotionGraphics[0].category} : ${videoObject.MotionGraphics[0].name} `
                          );
                        }}
                      >
                        Motion Graphics
                      </li>

                      <li
                        className="category__list"
                        style={categoryStyle.Edits}
                        onClick={() => {
                          setCategoryStyle({
                            ...clickStyle,
                            ...(clickStyle.Edits.color = clickStyle.color),
                          });
                          setCategory(videoObject.Edits);
                          setVideo(videoObject.Edits[0].video);
                          setPlaying(false);
                          changeDescription(
                            `${videoObject.Edits[0].category} : ${videoObject.Edits[0].name} `
                          );
                        }}
                      >
                        Edits
                      </li>
                      <li
                        className="category__list"
                        style={categoryStyle.Shorts}
                        onClick={() => {
                          setCategoryStyle({
                            ...clickStyle,
                            ...(clickStyle.Shorts.color = clickStyle.color),
                          });
                          setCategory(videoObject.Shorts);
                          setVideo(videoObject.Shorts[0].video);
                          setPlaying(false);
                          changeDescription(
                            `${videoObject.Shorts[0].category} : ${videoObject.Shorts[0].name} `
                          );
                        }}
                      >
                        Shorts
                      </li>
                      <li
                        className="category__list"
                        style={categoryStyle.SocialMedia}
                        onClick={() => {
                          setCategoryStyle({
                            ...clickStyle,
                            ...(clickStyle.SocialMedia.color =
                              clickStyle.color),
                          });
                          setCategory(videoObject.SocialMedia);
                          setVideo(videoObject.SocialMedia[0].video);
                          setPlaying(false);
                          changeDescription(
                            `${videoObject.SocialMedia[0].category} : ${videoObject.SocialMedia[0].name} `
                          );
                        }}
                      >
                        Social Media
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="contento__right">
            <div className="contento__right__container">
              <div className="contento__container__video">
                <div className="contento__video__description">
                  <p className="contento__video__description__details">
                    {details}
                  </p>
                </div>
                <img
                  onClick={() => {}}
                  className={`contentoVideoCover ${showCover && " coverHide"}`}
                  src={cover}
                  alt="cover"
                />
                <video
                  height={550}
                  src={video}
                  ref={videoRef}
                  onCanPlay={() => {
                    setDuration(videoRef.current.duration);
                  }}
                  onClick={() => {
                    setShowCover(true);
                    setPlaying(() => {
                      if (!playing) {
                        setIcon(pause);
                        videoRef.current.play();
                        return true;
                      } else {
                        setIcon(play);
                        videoRef.current.pause();
                        return false;
                      }
                    });
                  }}
                  onTimeUpdate={() => {
                    setTime(() => {
                      return videoRef.current.currentTime;
                    });
                    setPosition(() => {
                      return videoRef.current.currentTime;
                    });
                  }}
                  onEnded={() => {
                    setPlaying(false);
                    setShowCover(false);
                  }}
                >
                  {" "}
                </video>
              </div>
            </div>

            <div className="contento__container__controller">
              <div className="contento__container__controller__container">
                <div
                  className="contento__controls"
                  onClick={() => {
                    if (Icon === play) {
                      setShowCover(true);
                      setIcon(pause);
                      videoRef.current.play();
                      setPlaying(true);
                    } else {
                      setIcon(play);
                      videoRef.current.pause();
                      setPlaying(false);
                    }
                  }}
                >
                  <img src={Icon} alt="controls" />
                </div>
                <input
                  className="inputSlider"
                  type="range"
                  min={0}
                  max={duration}
                  value={position}
                  step={0.1}
                  onChange={(e) => {
                    setPosition(e.target.value);
                    videoRef.current.currentTime = e.target.value;
                  }}
                />
                <p className="elapsed">{time.toFixed(2)} s </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contento__bottom__container">
          <div className="contento__bottom">
            <div className="contento__videos">
              {category.map((item) => {
                return (
                  <Thumbnail
                    category={category}
                    details={item}
                    changeDescription={changeDescription}
                    changeVideo={changeVideo}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contento;
