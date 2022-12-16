import React from "react";

function Toggle({toggleState}) {
  const [toggleState, setToggleState] = useState('OFF');

  function onClickHandler (e) {
    setToggleState(e.target.innerText === "OFF" ? "ON" : "OFF");
  }

  return <button onClick={(e) => onClickHandler(e)}>{toggleState}</button>;
}

export default Toggle;
