import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import CharSelPage from "./MainComponents/CharSelPage";
import Homepage from "./MainComponents/Homepage";
import PostHomepage from "./MainComponents/PostHomepage";
import { Routes, Route } from "react-router-dom";
import Webo from "./Characters/Webo";
import Teacho from "./Characters/Teacho";
import Soundo from "./Characters/Soundo";
import Contento from "./Characters/Contento";

function App() {
  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loading" element={<PostHomepage />} />
          <Route path="/select" element={<CharSelPage />} />
          <Route path="/webo" element={<Webo />} />
          <Route path="/contento" element={<Contento />} />
          <Route path="/soundo" element={<Soundo />} />
          <Route path="/teacho" element={<Teacho />} />
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
  );
}

export default App;
