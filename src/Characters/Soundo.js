import React from "react";
import "./soundo.css";
import soundoArt1 from "../Images/Saly-24.png";
import soundoArt2 from "../Images/Saly-37.png";
import twitterLogo from "../Images/tweeter.png";
import instagramLogo from "../Images/instagram.png";
import linkedinLogo from "../Images/Linked.png";

import Medal from "../Images/Medal.png";
import BCSLogo from "../Images/BCS_logo.png";
import UnibenLogo from "../Images/Uniben-Logo.png";

import Avatar1 from "../Images/Avatar1.png";
import Avatar2 from "../Images/Avatar2.png";
import Avatar3 from "../Images/Avatar3.png";
function Soundo() {
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
                    <span className="soundoNum"> 0 2 .</span>{" "}
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
                        <p>From a script, to a well articulated delivery that will
                        sell your product, from a simple melody line
                        to a song that expresses a mindset or touts a product.
</p>
                        <br></br>
                        <p> He is capably endowed with the ability to bring visions
                        to life, imagined by greats, rendered by
                        awesomes, delivered with high quality.</p>
                        
                        <br></br><p>Hear a few of my works.</p>
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
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Soundo;
