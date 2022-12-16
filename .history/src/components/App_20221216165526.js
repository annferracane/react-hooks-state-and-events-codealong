import React, {useState} from "react";
import Toggle from "./Toggle";

function App() {

  const [toggleState, setToggleState] = useState('OFF');

  function onClickHandler (e) {
    //console.log(e.target.innerText);
    setToggleState(e.target.innerText == "OFF" ? "ON" : "OFF");
  }

  return (
    <div>
      <h3>Toggle</h3>
      <Toggle toggleState={toggleState} onClick={onClickHandler}/>
    </div>
  );
}

export default App;
