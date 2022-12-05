import React, { useState } from "react";
import "./Bar.css";

function Bar({ id, barValue } : {id:number, barValue:number}) {

  return <div className="barContainer">{barValue}</div>;
}

export default Bar;
