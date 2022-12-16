import React, {useState} from "react";
import Toggle from "./Toggle";

function App() {

  const [toggleState, setToggleState] = useState('OFF');

  function onClick

  return (
    <div>
      <h3>Toggle</h3>
      <Toggle toggleState={toggleState}/>
    </div>
  );
}

export default App;
