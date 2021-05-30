import React from "react";
import Select from "react-select";
import "./select.scss";
export default function DropDown(props) {
  const [selectedOption, setSelectedOption] = React.useState(0);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    props.onStateChange(selectedOption);
  };
  return (
    <div className="select">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={props.data}
        placeholder={"Select " + props.placeholder}
        isLoading={props.isLoading}
      />
    </div>
  );
}
