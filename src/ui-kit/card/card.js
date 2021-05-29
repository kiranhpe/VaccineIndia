import React from "react";
import "./card.scss";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="card">{this.props.children}</div>;
  }
}