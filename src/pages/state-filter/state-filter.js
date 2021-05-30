import React, { useEffect } from "react";
import { District_API, States_API } from "../../common/enums/API.enum";
import getData from "../../common/service/api.service";
import DropDown from "../../ui-kit/select/select";
import "./state-filter.scss";
export default function StateFilter(props) {
  const [states, setStates] = React.useState({
    states: {},
  });

  const [districts, setDistricts] = React.useState({
    districts: {},
  });

  const [statesLoading, setStatesLoading] = React.useState(true);

  const [districtsLoading, setDistrictsLoading] = React.useState(false);

  useEffect(() => {
    fetchStates();
  }, [])

  function stateSelectedChange(event) {
    setDistrictsLoading(true);
    fetchDistricts(event.value);
  }

  function districtSelectedChange(event) {
    // Todo: handle event state change
  }

  return (
    <div className="row-right">
      <DropDown
        placeholder="State"
        data={states.states}
        onStateChange={stateSelectedChange}
        isLoading={statesLoading}
      ></DropDown>
      <DropDown
        placeholder="District"
        data={districts.districts}
        onStateChange={districtSelectedChange}
        isLoading={districtsLoading}
      ></DropDown>
    </div>
  );

  function fetchStates() {
    getData(States_API()).then((data) => {
      let selectStatesFeed = data.states.map((v) => {
        return { value: v.state_id, label: v.state_name };
      });
      setStates({ states: selectStatesFeed });
      setStatesLoading(false);
      setDistrictsLoading(true);
    });
  }

  function fetchDistricts(id) {
    getData(District_API() + id.toString()).then((data) => {
      let selectDistictsFeed = data.districts.map((v) => {
        return { value: v.district_id, label: v.district_name };
      });
      setDistricts({ districts: selectDistictsFeed });
      setDistrictsLoading(false);
    });
  }
}
