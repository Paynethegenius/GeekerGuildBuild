import musicA from "../Audio/Soundo/Music/1.121 NITRO FULL MAST.mp3";
import musicB from "../Audio/Soundo/Music/2.Time Flies Ft BankyDo.mp3";


import radioA from "../Audio/Soundo/Radios/1.Arla Dano Pidgin 45 SECS.mp3";
import radioB from "../Audio/Soundo/Radios/2.Ember To Remember Final.mp3";
import radioC from "../Audio/Soundo/Radios/3.GOTV Christmas Max Radio.mp3";
import radioD from "../Audio/Soundo/Radios/4.GOtv Kids April May Radio.mp3";
import radioE from "../Audio/Soundo/Radios/5.Gotv Nigerian Idol Radio.mp3";

import jingleA from "../Audio/Soundo/Jingles/1.GOTv Showtime Sinature tune.mp3";
import jingleB from "../Audio/Soundo/Jingles/2.Arla Dano- Go for It- Ganihu.mp3";
import jingleC from "../Audio/Soundo/Jingles/3.Olist Cars English.mp3";
import jingleD from "../Audio/Soundo/Jingles/4.Demo for CloseUp.mp3";
import jingleE from "../Audio/Soundo/Jingles/5.Olist Cars Pidgin.mp3";

export const soundObject = {
  jingles: [
    { sound: jingleA, name: "1.GOTv Showtime Sinature tune", Id: 0 , type : "jingle"},
    { sound: jingleB, name: "2.Arla Dano- Go for It- Ganihu.mp3", Id: 1, type : "jingle" },
    { sound: jingleC, name: "3.Olist Cars - English", Id: 2 , type : "jingle"},
    { sound: jingleD, name: "4. Close Up Demo", Id: 3 , type : "jingle"},
    { sound: jingleE, name: "5.Olist Cars Pidgin", Id: 4, type : "jingle" },
  ],

  radios: [
    { sound: radioA, name: "1. Arla Dano Pidgin 45 SECS", Id: 5 , type : "radio"},
    { sound: radioB, name: "2. Ember To Remember Final ", Id: 6 , type : "radio"},
    { sound: radioC, name: "3. GOTV Christmas Max Radio", Id: 7 , type : "radio"},
    { sound: radioD, name: "4. GOtv Kids April May Radio", Id: 8, type : "radio" },
    { sound: radioE, name: "5. Gotv Nigerian Idol Radio", Id: 9 , type : "radio"},
  ],
  music : [
    { sound: musicA, name: "1.Nitro 121 Theme Song", Id: 10, type :"music" },
    { sound: musicB, name: "2.TimeFlies ", Id: 11 , type :"music"},    
  ],
};
