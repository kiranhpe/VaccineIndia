import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { District_API, States_API } from "../../common/enums/API.enum";
import getData from "../../common/service/api.service";
import districtChange from "../../redux/actions/districts.action";
import statesChange from "../../redux/actions/states.action";
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

  const currentState = useSelector((state) => state.states);
  const currentDistrict = useSelector((state) => state.districts);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchDistricts(currentState);
  }, [currentState]);


  return (
    <div className="row-right">
      <DropDown
        placeholder="State"
        data={states.states}
        onStateChange={(e) => {
          dispatch(statesChange({ state: e }));
          setDistrictsLoading(true);
        }}
        isLoading={statesLoading}
      ></DropDown>
      <DropDown
        placeholder="District"
        data={districts.districts}
        onStateChange={(e)=>{
          dispatch(districtChange({ district: e }));
        }}
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

  function fetchDistricts(state) {
    if (state) {
      getData(District_API() + state.value.toString()).then((data) => {
        let selectDistictsFeed = data.districts.map((v) => {
          return { value: v.district_id, label: v.district_name };
        });
        setDistricts({ districts: selectDistictsFeed });
        setDistrictsLoading(false);
      });
    }
  }
}
