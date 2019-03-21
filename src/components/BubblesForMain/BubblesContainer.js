import React from "react";

export default function BubblesContainer(props) {
  return (
    <div className="bubbles-container">
      <svg
        className="bubbles"
        viewBox="0 0 701 1024"
        style={{ overflow: "visible" }}
      >
        <g className="bubbles-small" strokeWidth="7">
          {props.children}
        </g>
      </svg>
    </div>
  );
}
