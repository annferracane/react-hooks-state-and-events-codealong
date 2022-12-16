import React from "react";

function Toggle({toggleState, onClickHandler}) {
  return <button onClick={(e => onClickHandler(e)}>{toggleState}</button>;
}

export default Toggle;
