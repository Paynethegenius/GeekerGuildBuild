import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import CharSelPage from "./MainComponents/CharSelPage";
import Homepage from "./MainComponents/Homepage";
import PostHomepage from "./MainComponents/PostHomepage";
import { Routes, Route } from "react-router-dom";
import Div100vh from 'react-div-100vh';

function App() {
  const count = useRef(1)


  useEffect(()=>{
    count.current += 1;
    console.log("rerenders" , count.current)

  })
  return (
    <Div100vh>
    
    
    
    <div className="App" >
      {
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/select" element={<CharSelPage />} />
          <Route />
        </Routes>
      }

      {/** HomePage*/}
      {/**1st Loader Page */}
      {/*Character Selection Page */}
      {/**/}
      {/**2nd Loader Page */}
      {/**Soundo Page */}
      {/**Webo Page */}
      {/**Contento Page */}
      {/**Teacho Page */}
      {/**Contact Page */}
    </div>
    </Div100vh>
  );
}

export default App;
