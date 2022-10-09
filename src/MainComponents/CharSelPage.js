import React, { useRef, useState, useEffect , useContext} from "react";
import LeftPanel from "../Views/LeftPanel";
import RightPanel from "../Views/RightPanel";
import "../MainComponents/charselpage.css";
import play from "../Images/baseline_play_arrow_white_24dp.png";
import pause from "../Images/baseline_pause_white_24dp.png";
import replay from "../Images/baseline_replay_white_24dp.png";
import bgMusic from "../Audio/BGmusic.mp3";


function CharSelPage() {
  const [closeModal, setCloseModal] = useState(false);
  const [playAudio, setplayAudio] = useState(true);
  const [musicIcon, setMusicIcon] = useState(pause);
  const [timeID, setTimeID] = useState();

  const bgMusicRef = useRef(null);

  const replayInitiator = () => {

    if(playAudio){
       const time = setTimeout(() => {
      setMusicIcon(replay);
    }, 31000 - bgMusicRef.current.currentTime);

   setTimeID(time)

   console.log(timeID);
    }else{
      clearTimeout(timeID)
    }
   
  };

  useEffect(() => {

    if(playAudio === false){
      console.log(bgMusicRef.current.currentTime)  
      console.log("now pausing");
      console.log("audioState", playAudio)      
      // replayInitiator()
      bgMusicRef.current.pause();     
      clearTimeout() 
    }

    if (playAudio === true) {
      console.log(bgMusicRef.current.currentTime);
      console.log("now playing");
      console.log("audioState", playAudio);
      bgMusicRef.current.play();
      // replayInitiator();
      
    }

  
  
  }, [playAudio]);

  

  const referenceDiv = useRef("");

  
  return (
    <div className="charselpage">
      {!closeModal && (
        <div className="charsel__intro">
          <div className="charsel__intro__welcome">
            <div
              className="charsel__intro__muteAudio"
             
            >
              <img  onClick={() => {
                console.log("button clicked");

                if (playAudio  && musicIcon === pause) {
                  setplayAudio(false);                 
                  setMusicIcon(play);                 
                } 
                
                if(playAudio === false  && musicIcon === play){
                  setplayAudio(true);
                  setMusicIcon(pause);
                }               
              }} src={musicIcon} alt="" />
              <img src={replay} alt=""
              onClick={()=>{
                setplayAudio(true);
                setMusicIcon(pause);
                bgMusicRef.current.currentTime = 0;
                bgMusicRef.current.play();   
              }}
              />
            </div>
           
            <div className="charsel__intro__welcome__text">
              <br></br>
              <div className="charsel__intro__welcome__text__bar">
                <div className="charsel__intro__welcome__text__bar__div1">
                  (*)
                </div>
                <div className="charsel__intro__welcome__text__bar__div2">
                  <h1>Olowu Durodoluwa</h1>
                </div>
              </div>
              <br></br>
              <div className="charsel__intro__welcome__text__bar">
                <div className="charsel__intro__welcome__text__bar__div1">
                  (*)
                </div>
                <div className="charsel__intro__welcome__text__bar__div2">
                  <p>I am a web developer from Nigeria.</p>
                </div>
              </div>
              <br></br>
              <div className="charsel__intro__welcome__text__bar">
                <div className="charsel__intro__welcome__text__bar__div1">
                  (*)
                </div>
                <div className="charsel__intro__welcome__text__bar__div2">
                  <p>I am a man of many colors.</p>
                </div>
              </div>
              <br></br>
              <div className="charsel__intro__welcome__text__bar">
                <div className="charsel__intro__welcome__text__bar__div1">
                  (*)
                </div>
                <div className="charsel__intro__welcome__text__bar__div2">
                  <p>Please pick a color of me, that you're interested in</p>
                </div>
              </div>
              <br></br>
              <div className="charsel__intro__welcome__text__bar">
                <div className="charsel__intro__welcome__text__bar__div1">
                  (*)
                </div>
                <div className="charsel__intro__welcome__text__bar__div2">
                  <p>Expore, and kindly give me a call</p>
                </div>
              </div>
            </div>
            <div
              
              className="charsel__intro__welcome__close"
            >
              <button onClick={() => {
                setCloseModal(true);
              }} >Close</button>
            </div>
          </div>
        </div>
      )}
      <div className="leftPanel" ref={referenceDiv}>
        <LeftPanel />
      </div>
      <div className="rightPanel">
        <RightPanel leftPanelDetails={referenceDiv} />
      </div>

      <audio ref={bgMusicRef}>
        <source src={bgMusic}></source>
      </audio>
    </div>
  );
}

export default CharSelPage;
