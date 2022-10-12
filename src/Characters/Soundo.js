import React, { useState, useEffect } from "react";
import "./soundo.css";
import soundoArt1 from "../Images/Saly-24.png";
import soundoArt2 from "../Images/Saly-37.png";
import twitterLogo from "../Images/tweeter.png";
import instagramLogo from "../Images/instagram.png";
import linkedinLogo from "../Images/Linked.png";


import pause from "../Svg/pause.svg";
import play from "../Svg/play.svg";
import previous from "../Svg/skip_previous.svg";
import next from "../Svg/skip_next.svg";
import { soundObject } from "../Data/audio.js";
import { useRef } from "react";
import equalizer from "../Svg/equalizer.svg";
import radio from "../Svg/radio.svg";
import gsap from "gsap";

function Soundo() {
  const [currentSound, setCurrentSound] = useState(soundObject.radios);
  const [mode, setMode] = useState({
    jingle: false,
    radio: true,
    music: false,
  });

  const [source, setSource] = useState(soundObject.radios[0].sound);
  const [name, setName] = useState(soundObject.radios[1].name);
  const [activeIcon, setActiveIcon] = useState(play);
  const [listIndex, setListIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [ID, setID] = useState(5);
  const playSound = useRef(null);

  const animateList = () => {
    gsap.fromTo(
      ".soundo__music__list_item",
      {
        x: "100%",
      },
      { x: 0, stagger: 0.1 }
    );
  };

  const modeStyle = {
    fontWeight: 700,
    color: "var(--soundo-pink-dark)",
    transform: "scale(1.8)",
    transformOrigin: "center",
    transition: "1s  cubic-bezier(0.075, 0.82, 0.165, 1)",
  };

  const playAudio = (id) => {
    setSource(currentSound[id].sound);
    setName(currentSound[id].name);
    setActiveIcon(pause);
    setPlaying(true);
    playSound.current.pause();
    playSound.current.load();
    playSound.current.play();
  };

  const nextAudio = () => {
    if (listIndex < currentSound.length - 1) {
      setSource(currentSound[listIndex + 1].sound);
      setName(currentSound[listIndex + 1].name);
      setID(currentSound[listIndex + 1].Id);
      setActiveIcon(pause);
      setPlaying(true);
      playSound.current.pause();
      playSound.current.load();
      playSound.current.play();
      setListIndex(listIndex + 1);
    } else {
      setListIndex(0);
      playAudio(0);
      setID(currentSound[0].Id);
    }
  };

  const prevAudio = () => {
    if (listIndex > 0) {
      setSource(currentSound[listIndex - 1].sound);
      setName(currentSound[listIndex - 1].name);
      setID(currentSound[listIndex - 1].Id);
      setActiveIcon(pause);
      setPlaying(true);
      playSound.current.pause();
      playSound.current.load();
      playSound.current.play();
      setListIndex(listIndex - 1);
    } else {
      setListIndex(currentSound.length - 1);
      playAudio(currentSound.length - 1);
      setID(currentSound[currentSound.length - 1].Id);
    }
  };

  const adjustVolume = () => {
    playSound.current.volume = volume;
  };

  useEffect(() => {
    console.log(listIndex);
    adjustVolume();
  }, [volume]);

  return (
    <div className="soundo__page">
      <div className="soundo__leftpanel">
        <div className="soundoArt1 ">
          <img src={soundoArt1} alt="Soundo_Image" />
        </div>
        <div className="soundoArt2">
          <img src={soundoArt2} alt="Soundo_Image" />
        </div>
      </div>

      <div className="soundo__rightpanel">
        <div className="soundo__rightpanel__body">
          <section className="soundo__rightpanel__body__top">
            <div className="soundo__rightpanel__body__top__container">
              <div className="soundo__rightpanel__body__top__heading">
                <div className="soundo__rightpanel__body__top__name">
                  <h1>
                    <span className="soundoNum"> 0 4 .</span>{" "}
                    <span className="soundoTag">Soundo </span>
                  </h1>
                  <div className="soundo__primary__name">
                    <h1 className="soundo__name">
                      Olowu<br></br>
                    </h1>
                  </div>

                  <h1 className="soundo__name">Durodoluwa</h1>
                </div>
              </div>

              <div className="soundo__rightpanel__body__top__description__container">
                <div className="soundo__rightpanel__body__top__description">
                  <div className="soundo__rightpanel__body__top__textfield">
                    <div className="soundo__definition-list">
                      <div className=" soundo__points soundo__one">
                        As a Creative Sound Engineer
                      </div>
                      <div className=" soundo__points soundo__two">
                        <p>
                          From a script, to a well articulated delivery that
                          will sell your product, from a simple melody line to a
                          song that expresses a mindset or touts a product.
                        </p>
                        <br></br>
                        <p>
                          {" "}
                          He is capably endowed with the ability to bring
                          visions to life, imagined by greats, rendered by
                          awesomes, delivered with high quality.
                        </p>

                        <br></br>
                        <p>Hear a few of my works.</p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="soundo__rightpanel__body__top__base">
                    <div className="soundo__base_left">
                      {" "}
                      <div className="soundo__socials">
                        <img
                          src={instagramLogo}
                          alt="instagramLink"
                          className="soundo__instagram"
                        />
                        <img
                          src={twitterLogo}
                          alt="twitterLink"
                          className="soundo__twitter"
                        />
                        <img
                          src={linkedinLogo}
                          alt="linkedLink"
                          className="soundo__linkedin"
                        />
                      </div>
                      <div className="soundo__contact">
                        <button className="soundo__button">Contact Me</button>
                      </div>
                    </div>
                    <div className="soundo__base_left"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="soundo__rightpanel__body__mid">
            <div className="soundo__rightpanel__body__mid__container">
              <div className="soundo__rightpanel__body__mid__container__content">
                <div className="soundo__musicplayer">
                  <div className="soundo__musicplayer__container">
                    <div className="soundo__musicplayer__container__top">
                      <p
                        style={mode.jingle ? modeStyle : {}}
                        onClick={() => {
                          setCurrentSound(soundObject.jingles);
                          setMode({ radio: false, music: false, jingle: true });
                          animateList();
                        }}
                      >
                        JINGLES
                      </p>
                      <p
                        style={mode.radio ? modeStyle : {}}
                        onClick={() => {
                          setCurrentSound(soundObject.radios);
                          setMode({ jingle: false, music: false, radio: true });
                          animateList();
                        }}
                      >
                        {" "}
                        RADIO{" "}
                      </p>
                      <p
                        style={mode.music ? modeStyle : {}}
                        onClick={() => {
                          setCurrentSound(soundObject.music);
                          setMode({ radio: false, jingle: false, music: true });
                          animateList();
                        }}
                      >
                        MUSIC
                      </p>
                    </div>
                    <div className="soundo__musicplayer__container__mid">
                      <div
                        className="soundo__musicplayer__container__mid__buttons"
                        onMouseEnter={() => {
                          gsap.to(
                            ".soundo__musicplayer__container__mid__buttons",
                            {
                              borderRadius: "120px",
                              delay: 0.4,
                            }
                          );
                        }}
                        onMouseLeave={() => {
                          gsap.to(
                            ".soundo__musicplayer__container__mid__buttons",
                            {
                              borderRadius: "10px",
                              delay: 0.3,
                            }
                          );
                        }}
                      >
                        <img
                          onClick={prevAudio}
                          src={previous}
                          alt="previous"
                        />
                        <img
                          onClick={() => {
                            if (playing) {
                              playSound.current.pause();
                              setPlaying(false);
                              setActiveIcon(play);
                            } else {
                              setPlaying(true);
                              setActiveIcon(pause);
                              playSound.current.pause();
                              playSound.current.play();
                            }
                          }}
                          src={activeIcon}
                          alt="play"
                        />
                        <audio
                          ref={playSound}
                          onEnded={() => {
                            setActiveIcon(play);
                            setPlaying(false);
                          }}
                        >
                          <source src={source} />
                        </audio>

                        <img onClick={nextAudio} src={next} alt="next" />
                      </div>
                    </div>
                    <div className="soundo__musicplayer__container__bottom">
                      <div className="soundo__nowPlaying">{name}</div>
                      <div className="soundo__volumebar">
                        <div className="soundo__volumebar__minus">
                          <svg
                            onClick={() => {
                              if (volume > 0.1) {
                                setVolume(volume - 0.1);
                              }
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#FFFFFF"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 13H5v-2h14v2z" />
                          </svg>
                        </div>

                        <div className="soundo__volumebar__level">
                          {(volume * 100).toFixed(0)}
                        </div>
                        <div className="soundo__volumebar__add">
                          {" "}
                          <svg
                            onClick={() => {
                              if (volume < 0.95) {
                                setVolume(volume + 0.1);
                              }
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#FFFFFF"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="soundo__music__list">
                  <ul className="soundo__music__list_items">
                    {currentSound.map((item, id) => {
                      return (
                        <li
                          className="soundo__music__list_item"
                          key={id}
                          onClick={() => {
                            playAudio(id);
                            setID(item.Id);
                            setListIndex(id);
                          }}
                        >
                          <div className="soundo__music__list_item__displayPic">
                            <img src={radio} alt="GOTV" />
                          </div>
                          <div className="soundo__music__list_item__soundDetails">
                            <p className="soundlabel">{item.name}</p>
                            <br></br>
                            <p className="soundtype">{item.type}</p>
                          </div>
                          {playing && ID === item.Id && (
                            <div className="soundo__music__list_item__equalizer">
                              <img src={equalizer} alt="" />
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Soundo;
