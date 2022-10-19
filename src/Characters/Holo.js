import {React, useState, useEffect,useRef} from 'react';
import "../Characters/contento.css"

function Holo() {

    const [drag, setDrag] = useState(100);

    const outBarRef = useRef(null);
    const inBarRef = useRef(null);
  
    useEffect(() => {
      console.log(drag);
      console.log(inBarRef);
  
    //   inBarRef.current.clientWidth = 80;
    }, [drag]);

    const style = {
        width: `${drag}px`,
        backgrounColor: "black",
        height: "10px",
        borderRadius: "80px",
        position: "absolute"
      };

      let mouse = (e) => {
        console.log(e);
      };
    
  return (
    <div className="contento"
    >
      <div id="outerBar" ref={outBarRef}>
        <div
          id="innerBar"
          style={style}
          onMouseEnter={() => {
            setDrag(drag + 100);
            document.addEventListener("mousemove", mouse);
          }}
          ref={inBarRef}
        ></div>
      </div>
    </div>
  )
}

export default Holo