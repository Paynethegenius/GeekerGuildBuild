import "./App.css";
import React from "react";
import CharSelPage from "./MainComponents/CharSelPage";
import Homepage from "./MainComponents/Homepage";
import { Routes, Route } from "react-router-dom";
import Div100vh from "react-div-100vh";

function App() {    
  return (
    <Div100vh>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/select" element={<CharSelPage />} />
          <Route />
        </Routes>
      </div>
    </Div100vh>
  );
}

export default App;


