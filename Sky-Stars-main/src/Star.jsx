import React from 'react';
import './Sky.css';

function Star(props) {
  return (
    <div className="Star" style={{
      left: props.star.left,
      top: props.star.top,
    }}></div>
  );
}

export default Star;