import React, { Component } from "react";
import Select from "react-select";
import "./select.scss";
const options = [
 
];
export default class DropDown extends Component {
  state = {};
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
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
          options={this.props.data}
          placeholder={'Select ' + this.props.placeholder}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}
