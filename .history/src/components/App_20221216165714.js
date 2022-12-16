import React, {useState} from "react";
import Toggle from "./Toggle";

function App() {

  return (
    <div>
      <h3>Toggle</h3>
      <Toggle toggleState={toggleState} onClick={onClickHandler}/>
    </div>
  );
}

export default App;
