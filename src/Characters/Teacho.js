import React, { useRef,useContext } from "react";
import "./teacho.css";
import teachoArt1 from "../Images/Saly-14.png";
import twitterLogo from "../Images/tweeter.png";
import instagramLogo from "../Images/instagram.png";
import linkedinLogo from "../Images/Linked.png";
import Medal from "../Images/Medal.png";
import BCSLogo from "../Images/BCS_logo.png";
import UnibenLogo from "../Images/Uniben-Logo.png";
import Avatar1 from "../Images/Avatar1.png";
import Avatar2 from "../Images/Avatar2.png";
import Avatar3 from "../Images/Avatar3.png";
import { ModelContext } from "../Context/ModelContext";


function Teacho({ setCloseModal }) {
    
  const {
    
    soundSelectButton,
    soundClickButton,
    
  } = useContext(ModelContext);

  

  const scrollPage = (e) => {
   
    if (e.deltaY > 0) {
      rightRef.current.scrollBy(rightRef.current.scrollX, 80);
    } else {
      rightRef.current.scrollBy(rightRef.current.scrollX, -80);
    }
  };

  const rightRef = useRef();

  return (
    <div className="teacho__page">
      <div className="teacho__page__container">
        <div
          className="teacho__page__container__close"
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
            fill="#ff0202"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </div>
        <div
          className="teacho__leftpanel"
          onWheel={(e) => {
            scrollPage(e);
          }}
        >
          <div className="teachoArt1 ">
            <img src={teachoArt1} alt="Teacho_Image" />
          </div>
        </div>
        <div className="teacho__rightpanel" ref={rightRef}>
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
                        It gives him joy to see{" "}
                        <span className="spanColor">??? the unknowing??? </span>
                        enter his space, later leaving as{" "}
                        <span className="spanColor">???the understanding???</span>
                      </div>
                      <div className=" teacho__points teacho__three">
                        <p>A different definition of student teacher? <br /> Yes
                        indeed!!!
                        </p>
                        <div className="teacho__accolades">

                 <img
                   src={Medal}
                   alt="Medal"
                   className="teacho__Medal"
                 />
               </div>
                      </div>{" "}
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="teacho__rightpanel__body__mid__container">
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
                      "Hi Duro,
                      Thanks for the BCS class.It helped in passing
                      in one writing." <br/>- Gabby
                    </p>
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
                      I saw your students at the exam center today 
                      and, as expected, they love you" - Akin
                    </p>
                  </div>
                </div>
              </div>

              <div className="teacho__content__divider">
                <div className="teacho__lineboxOne"></div>
                <p>Education</p>
                <div className="teacho__lineboxTwo"> </div>
              </div>
              <div className="teacho__rightpanel__body__mid__container__degrees">
                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={BCSLogo} alt="BCSLogo" />
                  </div>
                  <div className="teacho__projectlist__desc">
                    <p>
                      <span className="teacho__degree">
                      The Professional Graduate Diploma, Information
                      Technology 
                      </span>
                      <br></br>
                      <span className="teacho__degree__definition">
                      BCS, The Chatered Institute for IT{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={BCSLogo} alt="BCSLogo" />
                  </div>
                  <div className="teacho__projectlist__desc">
                    <p>
                      <span className="teacho__degree">
                      The Professional Diploma, Information Technology 
                      </span>
                      <br></br>
                      <span className="teacho__degree__definition">
                      BCS, The Chatered Institute for IT{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={BCSLogo} alt="BCSLogo" />
                  </div>
                  <div className="teacho__projectlist__desc">
                    <p>
                      <span className="teacho__degree">
                      The Higher Education Qualification, Information
                      Technology 
                      </span>
                      <br></br>
                      <span className="teacho__degree__definition">
                      BCS, The Chatered Institute for IT{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="teacho__projectlist">
                  <div className="teacho__projectlist__avatar">
                    <img src={UnibenLogo} alt="UnibenLogo" />
                  </div>
                  <div className="teacho__projectlist__desc">
                    <p>
                      <span className="teacho__degree">
                      BSC, Mechanical Engineering  
                      </span>
                      <br></br>
                      <span className="teacho__degree__definition">
                      University of Benin
                      </span>
                    </p>
                  </div>
                </div>
              </div>
             </div>
             <div className="teacho__rightpanel__body__bottom__base">
             
             
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
                 <button className="teacho__button">Continue </button>
               </div>
          
             
           </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacho;
