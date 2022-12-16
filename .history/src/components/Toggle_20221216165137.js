import React from "react";

function Toggle({toggleState, onClickHandler}) {
  return <button onClick={onClickHandler()}>{toggleState}</button>;
}

export default Toggle;
