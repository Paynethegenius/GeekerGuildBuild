import React, { createContext, useState } from "react";
import sceneModel from "../Model/contentoScene.glb";



const pack ={
  value : "something"
}

export const ModelContext = createContext(pack);

function ModelContextProvider(props) {
  const [model, setModel] = useState({ object : sceneModel });

  return (
    <ModelContext.Provider value ={{model , setModel}} >
       {props.children}
    </ModelContext.Provider>
  );
}

export default ModelContextProvider;