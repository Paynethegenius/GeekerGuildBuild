import React,{useRef,useEffect} from 'react'
import clickAudio from "../Audio/click.mp3";
import selectAudio from "../Audio/select.mp3";

function Click({getClickRefToPlay, getSelectRefToPlay}) {

    const clickRef = useRef(null);
    const selectRef = useRef(null);
  
    useEffect(() => {
      getClickRefToPlay(clickRef);
      getSelectRefToPlay(selectRef)
    }, [])
    
  return (
    <div> <audio ref={clickRef}>
    <source src={clickAudio}></source>
  </audio>
  <audio ref={selectRef}>
    <source src={selectAudio}></source>
  </audio>
</div>
  )
}

export default Click