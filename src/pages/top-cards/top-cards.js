import React, { Component } from "react";
import Card from "../../ui-kit/card/card";

import './top-cards.scss';

export default class TopCards extends Component {
  render() {
    return (
      <div className="row">
        <Card className="center-text">
          <i className="fa fa-map fa-2x"></i>
        </Card>
        <Card>
          <i className="fa fa-users fa-2x"></i>
        </Card>
        <Card>
          <i className="fa fa-medkit fa-2x"></i>
        </Card>
      </div>
    );
  }
}
