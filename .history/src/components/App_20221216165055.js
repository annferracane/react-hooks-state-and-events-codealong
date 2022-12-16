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
  function onClickHandler (e) {
      <Toggle toggleState={toggleState} onClick={/>
    </div>
  );
}

export default App;
