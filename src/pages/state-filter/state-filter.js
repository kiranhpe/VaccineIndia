import React, { Component } from "react";
import DropDown from "../../ui-kit/select/select";

import "./state-filter.scss";

export default class StateFilter extends Component {
  states = [];

  selectFeed = [];

  componentWillMount() {
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
          states={this.selectFeed}
          onStateChange={this.stateSelectedChange}
        ></DropDown>
        <DropDown placeholder="District" states={this.selectFeed}></DropDown>
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

        console.log(this.selectFeed)
      });
  }
}
