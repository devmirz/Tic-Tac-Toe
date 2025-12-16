import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap";

function App() {
  const [id, setId] = useState(null);
  const [plyr1,setPlyr1]=useState(null)
  const [plyr2,setPlyr2]=useState(null)

  const a11 = useRef("");
  const a12 = useRef("");
  const a13 = useRef("");
  const a21 = useRef("");
  const a22 = useRef("");
  const a23 = useRef("");
  const a31 = useRef("");
  const a32 = useRef("");
  const a33 = useRef("");

  function X(value) {
    if (value == "a11" && !a11.current.innerText){ a11.current.innerText = "X"; setPlyr1(false)}
    if (value == "a12" && !a12.current.innerText){ a12.current.innerText = "X"; setPlyr1(false)}
    if (value == "a13" && !a13.current.innerText){ a13.current.innerText = "X"; setPlyr1(false)}
    if (value == "a21" && !a21.current.innerText){ a21.current.innerText = "X"; setPlyr1(false)}
    if (value == "a22" && !a22.current.innerText){ a22.current.innerText = "X"; setPlyr1(false)}
    if (value == "a23" && !a23.current.innerText){ a23.current.innerText = "X"; setPlyr1(false)}
    if (value == "a31" && !a31.current.innerText){ a31.current.innerText = "X"; setPlyr1(false)}
    if (value == "a32" && !a32.current.innerText){ a32.current.innerText = "X"; setPlyr1(false)}
    if (value == "a33" && !a33.current.innerText){ a33.current.innerText = "X"; setPlyr1(false)}
  }

  function O(value) {
    if (value == "a11" && !a11.current.innerText) {a11.current.innerText = "O"; setPlyr2(false)}
    if (value == "a12" && !a12.current.innerText) {a12.current.innerText = "O"; setPlyr2(false)}
    if (value == "a13" && !a13.current.innerText) {a13.current.innerText = "O"; setPlyr2(false)}
    if (value == "a21" && !a21.current.innerText) {a21.current.innerText = "O"; setPlyr2(false)}
    if (value == "a22" && !a22.current.innerText) {a22.current.innerText = "O"; setPlyr2(false)}
    if (value == "a23" && !a23.current.innerText) {a23.current.innerText = "O"; setPlyr2(false)}
    if (value == "a31" && !a31.current.innerText) {a31.current.innerText = "O"; setPlyr2(false)}
    if (value == "a32" && !a32.current.innerText) {a32.current.innerText = "O"; setPlyr2(false)}
    if (value == "a33" && !a33.current.innerText) {a33.current.innerText = "O"; setPlyr2(false)}
  }

  const setPlayer1 = (id) => {
    setId(0);
    setPlyr1(true)
  };

  const setPlayer2 = (id) => {
    setId(1);
    setPlyr2(true)
  };

  const addValue = (value) => {
    
    if (id == 0 && plyr1) {
      X(value);
       
    }

    if (id == 1 && plyr2) {
      O(value);
       
    }
  };
  
  return (
    <div className="main">
      {/* <div><h2>Tic-Tac-Toe</h2></div> */}
      <div className="row1">
        
        <h3 ref={a11} onClick={() => addValue("a11")}></h3>
        <h3 ref={a12} onClick={() => addValue("a12")}></h3>
        <h3 ref={a13} onClick={() => addValue("a13")}></h3>
      </div>
      <br />
      <div className="row2">
        
        <h3 ref={a21} onClick={() => addValue("a21")}></h3>
        <h3 ref={a22} onClick={() => addValue("a22")}></h3>
        <h3 ref={a23} onClick={() => addValue("a23")}></h3>
      </div>
      <br />
      <div className="row3">
        
        <h3 ref={a31} onClick={() => addValue("a31")}></h3>
        <h3 ref={a32} onClick={() => addValue("a32")}></h3>
        <h3 ref={a33} onClick={() => addValue("a33")}></h3>
      </div>

      <div className="row4">
        
        <button className="h1" onClick={() => setPlayer1(id)}>
          PLAYER 1
        </button>
        <button onClick={() => setPlayer2(id)}>PLAYER 2</button>
      </div>
    </div>
  );
}

export default App;
