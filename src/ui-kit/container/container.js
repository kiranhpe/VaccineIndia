import React from "react";
import "./container.scss";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
