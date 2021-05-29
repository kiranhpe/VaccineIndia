import React, { Component } from "react";
import { API } from "../../common/enums/API.enum";
import DropDown from "../../ui-kit/select/select";
import "./state-filter.scss";
export default class StateFilter extends Component {
  state = { districts: [], states: [] };

  constructor() {
    super();
    this.stateSelectedChange = this.stateSelectedChange.bind(this);
  }
  componentDidMount() {
    this.fetchStates();
  }

  stateSelectedChange(event) {
    this.fetchDistricts(event.value);
  }

  districtSelectedChange(event) {
    // Todo: handle event state change
  }
  render() {
    return (
      <div className="row-right">
        <DropDown
          placeholder="State"
          data={this.state.states}
          onStateChange={this.stateSelectedChange}
        ></DropDown>
        <DropDown
          placeholder="District"
          data={this.state.districts}
          onStateChange={this.districtSelectedChange}
        ></DropDown>
      </div>
    );
  }

  fetchStates() {
    fetch(API.States_API)
      .then((res) => res.json())
      .then((data) => {
        this.selectStatesFeed = data.states.map((v) => {
          return { value: v.state_id, label: v.state_name };
        });
        this.setState({ states: this.selectStatesFeed });
      });
  }

  fetchDistricts(id) {
    fetch(API.District_API + id.toString())
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let selectDistictsFeed = data.districts.map((v) => {
          return { value: v.district_id, label: v.district_name };
        });
        this.setState({ districts: selectDistictsFeed });
      });
  }
}
