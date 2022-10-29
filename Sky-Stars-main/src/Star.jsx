import React,{ userEffect, useState} from "react";
import { getRandomInt } from "../functions/functions";
import './Sky.css';

function Star(props) {
  const [isView, setIsView] = useState(false)

  userEffect(() => {
    setTimeout(() => {
      setIsView(true)
    }, getRandomInt(1000, 10000))
  }, [])
  return (
    isView &&
    <div 
    className="Star_wrapper" 
    style={{
      left: props.star.left,
      top: props.star.top,
    }}>
      <div className="Star"></div>
    </div>
  );
}

export default Star;