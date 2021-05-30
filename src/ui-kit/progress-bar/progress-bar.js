import React from "react";
import "./progress-bar.scss";

export default function ProgressBar() {
  return (
    <div className="slider">
      <div className="line"></div>
      <div className="subline inc"></div>
      <div className="subline dec"></div>
    </div>
  );
}
