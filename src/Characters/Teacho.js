import React from "react";
import "./teacho.css";
import teachoArt1 from "../Images/Saly-16.png";
import teachoArt2 from "../Images/Saly-14.png";
import twitterLogo from "../Images/tweeter.png";
import instagramLogo from "../Images/instagram.png";
import linkedinLogo from "../Images/Linked.png";
import ISLogo from "../Images/ISLogo.png";
import SDLogo from "../Images/SDLogo.png";
import Medal from "../Images/Medal.png";
import linePng from "../Images/Line.png";
import Avatar1 from "../Images/Avatar1.png";
import Avatar2 from "../Images/Avatar2.png";
import Avatar3 from "../Images/Avatar3.png";
function Teacho() {
  return (
    <div className="teacho__page">
      <div className="teacho__leftpanel">
        <div className="teachoArt1 ">
          <img src={teachoArt1} alt="Teacho_Image" />
        </div>
        <div className="teachoArt2">
          <img src={teachoArt2} alt="Teacho_Image" />
        </div>
      </div>

      <div className="teacho__rightpanel">
        <div className="teacho__rightpanel__body">
          <section className="teacho__rightpanel__body__top">
            <div className="teacho__rightpanel__body__top__container">
              <div className="teacho__rightpanel__body__top__heading">
                <h1>
                  <span className="teachoNum"> 0 2 .</span>{" "}
                  <span className="teachoTag">Teacho </span>
                </h1>
              </div>

              <div className="teacho__rightpanel__body__top__description">
                <div className="teacho__rightpanel__body__top__name">
                  <div className="teacho__primary__name">
                    <h1 className="teacho__name">
                      Olowu<br></br>
                    </h1>
                    <span className="teacho__tag">
                      As a Teacher<br></br>
                    </span>
                  </div>

                  <h1 className="teacho__name">Durodoluwa</h1>
                </div>
                <div className="teacho__rightpanel__body__top__textfield">
                  <div className="teacho__definition-list">
                    <div className=" teacho__points teacho__one">
                      Consistently learning concepts and improving techniques.
                    </div>
                    <div className=" teacho__points teacho__two">
                      It gives him joy to see <span className="spanColor">“ the unknowing” </span>enter his space, later
                      leaving as <span className="spanColor">“the understanding”</span> 
                    </div>
                    <div className=" teacho__points teacho__three">
                      A different definition of student teacher? <br /> Yes
                      indeed!!!
                    </div>{" "}
                  </div>
                </div>
                <div className="teacho__rightpanel__body__top__base">
                  <div className="teacho__base_left">
                    {" "}
                    <div className="teacho__socials">
                      <img
                        src={instagramLogo}
                        alt="instagramLink"
                        className="teacho__instagram"
                      />
                      <img
                        src={twitterLogo}
                        alt="twitterLink"
                        className="teacho__twitter"
                      />
                      <img
                        src={linkedinLogo}
                        alt="linkedLink"
                        className="teacho__linkedin"
                      />
                    </div>
                    <div className="teacho__contact">
                      <button className="teacho__button">Contact Me</button>
                    </div>
                  </div>
                  <div className="teacho__base_left">
                    <div className="teacho__accolades">
                      {/*<img
                        src={ISLogo}
                        alt="Information-System"
                        className="teacho__ISLogo"
                      />
                      <img
                        src={SDLogo}
                        alt="Software-Development"
                        className="teacho__SDLogo"
  />*/}
                      <img src={Medal} alt="Medal" className="teacho__Medal" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="teacho__rightpanel__body__mid">
            <div className="teacho__rightpanel__body__mid__container">
              <div className="teacho__rightpanel__body__mid__container__content">
                <div className="teacho__content__divider">
                  <div className="teacho__lineboxOne"></div>
                  <p>Testimonials</p>
                  <div className="teacho__lineboxTwo"></div>
                </div>

                <div className="teacho__testimonials">
                  <div className="teacho__testimonial card1">
                    <div className="teacho__testimonial__card__top">
                      <img src={Avatar1} alt="avatar1" />
                    </div>
                    <div className="teacho__testimonial__card__bottom">
                      <p>
                        "Hi Duro,<br></br>
                        Thanks for the BCS class. <br></br>It helped in passing
                        in one writing." &nbsp;&nbsp;&nbsp; - Gabby
                      </p>dd
                    </div>
                  </div>
                  <div className="teacho__testimonial ">
                    <div className="teacho__testimonial__card__top card2">
                      <img src={Avatar2} alt="avatar1" />
                    </div>
                    <div className="teacho__testimonial__card__bottom">
                      <p>
                        You're an Excellent teacher<br></br>- Charles
                      
                      </p>
                    </div>
                  </div>
                  <div className="teacho__testimonial ">
                    <div className="teacho__testimonial__card__top card3">
                      <img src={Avatar3} alt="avatar1" />
                    </div>
                    <div className="teacho__testimonial__card__bottom">
                      <p>
                       
                        I saw your students at the exam center today <br></br>and, as expected, they love you" - Akin
                      </p>
                    </div>
                  </div>
                </div>

                <div className="teacho__content__divider">
                  <div className="teacho__lineboxOne"></div>
                  <p>Education</p>
                  <div className="teacho__lineboxTwo"> </div>
                </div>

                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={Medal} alt="whatsapp" />
                  </div>
                  <div className="teacho__projectlist__desc">
                  <p>
                  <span className="teacho__degree">BCS, The Chatered Institute for IT </span>
                  <br></br>
                  <span  className="teacho__degree__definition">
                    The Professional Graduate Diploma, Information
                    Technology
                  </span>
                </p>
                  </div>
                </div>

                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={Medal} alt="whatsapp" />
                  </div>
                  <div className="teacho__projectlist__desc">
                  <p>
                  <span className="teacho__degree">BCS, The Chatered Institute for IT </span>
                  <br></br>
                  <span  className="teacho__degree__definition">
                    The Professional  Diploma, Information
                    Technology
                  </span>
                </p>
                  </div>
                </div>

                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={Medal} alt="whatsapp" />
                  </div>
                  <div className="teacho__projectlist__desc">
                    <p>
                      <span className="teacho__degree">BCS, The Chatered Institute for IT </span>
                      <br></br>
                      <span  className="teacho__degree__definition">
                        The Higher Education Qualification, Information
                        Technology
                      </span>
                    </p>
                  </div>
                </div>

                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={Medal} alt="whatsapp" />
                  </div>
                  <div className="teacho__projectlist__desc">
                  <p>
                  <span className="teacho__degree">University of Benin</span>
                  <br></br>
                  <span  className="teacho__degree__definition">
                  BSC, Mechanical Engineering
                  </span>
                </p>
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

export default Teacho;
