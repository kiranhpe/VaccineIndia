import React, { Component } from "react";
import Select from "react-select";
import "./select.scss";
const options = [
 
];
export default class DropDown extends Component {
  state = {};
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    this.props.onStateChange(selectedOption);
  };

  constructor(props) {
    super(props);
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="select">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.props.states}
          placeholder={'Select ' + this.props.placeholder} 
        />
      </div>
    );
  }
}
