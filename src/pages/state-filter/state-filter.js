import React, { Component } from "react";
import { API } from "../../common/enums/API.enum";
import DropDown from "../../ui-kit/select/select";

import "./state-filter.scss";

export default class StateFilter extends Component {
  states = [];

  state = {};
  selectFeed = [];

  componentDidMount() {
    this.fetchStates();
  }

  stateSelectedChange(event) {
    alert(event.label);
  }
  render() {
    return (
      <div className="row-right">
        <DropDown
          placeholder="State"
          states={this.state.states}
          onStateChange={this.stateSelectedChange}
        ></DropDown>
        <DropDown
          placeholder="District"
          states={this.state.states}
          onStateChange={this.stateSelectedChange}
        ></DropDown>
      </div>
    );
  }

  fetchStates() {
    fetch(API.States_API)
      .then((res) => res.json())
      .then((data) => {
        this.states = data.states;
        this.selectFeed = this.states.map((v) => {
          return { value: v.state_id + "", label: v.state_name };
        });
        this.setState({ states: this.selectFeed });
      });
  }
}
