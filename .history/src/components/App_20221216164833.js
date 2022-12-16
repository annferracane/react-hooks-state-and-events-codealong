import React, {useState} from "react";
import Toggle from "./Toggle";

const [toggleState, setToggleState] = useState('OFF');

function App() {
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle />
    </div>
  );
}

export default App;
