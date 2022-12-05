import React, { useState } from "react";
import "./Bar.css";

function Bar({ id, barValue }) {
  const [idBar, setIdBar] = useState(id);
  const [value, setValue] = useState(barValue);

  return <div className="barContainer">{barValue}</div>;
}

export default Bar;
