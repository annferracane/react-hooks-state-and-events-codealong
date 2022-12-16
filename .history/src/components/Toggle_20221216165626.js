import React from "react";


function Toggle({toggleState, onClick}) {
  return <button onClick={(e) => onClick(e)}>{toggleState}</button>;
}

export default Toggle;
