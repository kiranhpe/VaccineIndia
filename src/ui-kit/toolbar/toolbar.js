import React from "react";
import "./toolbar.scss";

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="toolbar">{this.props.children}</div>
      </>
    );
  }
}
