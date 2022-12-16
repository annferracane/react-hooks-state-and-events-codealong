import React, {useState} from "react";
import Toggle from "./Toggle";

function App() {

  const [toggleState, setToggleState] = useState('OFF');

  function onClickHandler (e) {
    setToggleState(e.target.value == "OFF" ? "ON" : "OFF");
  }

  return (
    <div>
      <h3>Toggle</h3>
      <Toggle toggleState={toggleState} onClick={(e) => onClickHandler}/>
    </div>
  );
}

export default App;
