import React from "react";
import "./toolbar.scss";

export default function Toolbar(props) {
  return (
    <>
      <div className="toolbar">{props.children}</div>
    </>
  );
}
