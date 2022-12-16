import React from "react";

function Toggle({toggleState, onClick}) {
  return <button onClick={(e) => onClickHandler(e)}>{toggleState}</button>;
}

export default Toggle;
