import React from "react";

function Toggle({toggleState, onClick}) {
  const [toggleState, setToggleState] = useState('OFF');

  function onClickHandler (e) {
    //console.log(e.target.innerText);
    setToggleState(e.target.innerText === "OFF" ? "ON" : "OFF");
  }
  
  return <button onClick={(e) => onClick(e)}>{toggleState}</button>;
}

export default Toggle;
