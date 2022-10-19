import soundA from "../Audio/Soundo/Sounds/1.121 NITRO FULL MAST.mp3";
import soundB from "../Audio/Soundo/Sounds/2.Arla Dano English Orchestral.mp3";
import soundC from "../Audio/Soundo/Sounds/3.Arla Dano Igbo HighLife for radio.mp3";
import soundD from "../Audio/Soundo/Sounds/4.Demo for CloseUp.mp3";
import soundE from "../Audio/Soundo/Sounds/5.GOTv Showtime Sinature tune.mp3";

import radioA from "../Audio/Soundo/Radios/1.Arla Dano Pidgin 45 SECS.mp3";
import radioB from "../Audio/Soundo/Radios/2.Ember To Remember Final (1).mp3";
import radioC from "../Audio/Soundo/Radios/3.GOTV Christmas Max Radio.mp3";
import radioD from "../Audio/Soundo/Radios/4.GOtv Kids April May Radio.mp3";
import radioE from "../Audio/Soundo/Radios/5.Gotv Nigerian Idol Radio.mp3";

export const soundObject = {
  jingles: [
    { sound: soundA, name: "1. Nitro 121 Theme Song", Id: 0 , type : "jingle"},
    { sound: soundB, name: "2. Arla Dano, Go for it English", Id: 1, type : "jingle" },
    { sound: soundC, name: "3. Arla Dano, Go for it, Igbo", Id: 2 , type : "jingle"},
    { sound: soundD, name: "4. Close Up Demo", Id: 3 , type : "jingle"},
    { sound: soundE, name: "5. GOtv Showtime Signature tune", Id: 4, type : "jingle" },
  ],

  radios: [
    { sound: radioA, name: "1. Arla Dano Pidgin 45 SECS", Id: 5 , type : "radio"},
    { sound: radioB, name: "2. Ember To Remember Final ", Id: 6 , type : "radio"},
    { sound: radioC, name: "3. GOTV Christmas Max Radio", Id: 7 , type : "radio"},
    { sound: radioD, name: "4. GOtv Kids April May Radio", Id: 8, type : "radio" },
    { sound: radioE, name: "5. Gotv Nigerian Idol Radio", Id: 9 , type : "radio"},
  ],
  music : [
    { sound: radioA, name: "1.TimeFlies", Id: 10, type :"music" },
    { sound: radioB, name: "2.Alabama ", Id: 11 , type :"music"},
    { sound: radioC, name: "3.GOTV Christmas Max Radio", Id: 12 , type :"music"},
    { sound: radioD, name: "4.GOtv Kids April May Radio", Id: 13 , type :"music"},
    { sound: radioE, name: "4.GOtv Kiddososo", Id: 14 , type :"music"},
    
  ],
};
