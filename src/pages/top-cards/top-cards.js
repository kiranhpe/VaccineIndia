import React, { Component } from "react";
import Card from "../../ui-kit/card/card";

import './top-cards.scss';

export default class TopCards extends Component {

  states = [];
  state = {};

  selectFeed = [];

  componentDidMount() {
    this.fetchStates();
  }

  render() {
    return (
      <div className="row">
        <Card className="center-text">
          <i className="fa fa-map fa-2x"></i>
          <p>{this.state.states1}</p>
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

  fetchStates() {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((data) => {
        this.states = data.states;
        this.selectFeed = this.states.map((v) => {
          return { value: v.state_id+'', label: v.state_name };
        });
       this.setState({states:this.states[0].state_id});

       console.log(this.state)
      });
  }
}
