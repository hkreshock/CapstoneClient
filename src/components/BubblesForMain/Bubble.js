import React from "react";

export default function Bubble(props) {
  let animS = Math.random() * 6.5 + (props.num % 4) + 0.6;
  let animMs = Math.random() * 900;
  let tranfX = Math.random() * 300;
  let tranfY = Math.random() * 960;
  let transX = Math.random() * 750;
  let rad = Math.random() * 90;

  return (
    <g
      style={{
        animation: `up ${animS}s ${animMs}ms infinite`
      }}
    >
      <g
        transform={`translate(${tranfX} ${tranfY})`}
        style={{
          transform: `translateX(${transX}px)`
        }}
      >
        <circle cx="35" cy="35" r={`${rad}`} />
      </g>
    </g>
  );
}
