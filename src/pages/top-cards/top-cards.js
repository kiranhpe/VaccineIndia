import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard_API } from "../../common/enums/API.enum";
import getData from "../../common/service/api.service";
import getTodayDate from "../../common/utils/date";
import Card from "../../ui-kit/card/card";
import ProgressBar from "../../ui-kit/progress-bar/progress-bar";
import { hide } from "../../redux/actions/progress-bar.actions";
import "./top-cards.scss";

export default function TopCards(props) {
  const [topCards, setTopCards] = React.useState({
    sites: { total: 0 },
    registration: { total: 0, today: 0 },
    vaccination: { total: 0, today: 0 },
  });

  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.states);
  const currentDistrict = useSelector((state) => state.districts);

  useEffect(() => {
    getCardsData();
  }, [dispatch, currentState, currentDistrict]);

  return (
    <div className="row">
      <Card>
        <div className={topCards.sites.total === 0 ? "progress" : "no-display"}>
          <ProgressBar />
        </div>
        <div className="stat-count">
          <i className="fa fa-map fa-2x"></i>
          <div className="content">
            <h4>Vaccine Centers</h4>
            <h5>
              Total:{" "}
              {topCards.sites.total > 0
                ? topCards.sites.total.toLocaleString("en-IN")
                : ""}
            </h5>
          </div>
        </div>
      </Card>
      <Card>
        <div
          className={
            topCards.registration.total === 0 ? "progress" : "no-display"
          }
        >
          <ProgressBar />
        </div>
        <div className="stat-count">
          <i className="fa fa-users fa-2x"></i>
          <div className="content">
            <h4>Registered Users</h4>
            <h5>
              Total:{" "}
              {topCards.registration.total > 0
                ? topCards.registration.total.toLocaleString("en-IN")
                : ""}
            </h5>
            <b className="delta">
              Today:{" "}
              {topCards.registration.today > 0
                ? topCards.registration.today.toLocaleString("en-IN")
                : ""}
            </b>
          </div>
        </div>
      </Card>
      <Card>
        <div
          className={
            topCards.vaccination.total === 0 ? "progress" : "no-display"
          }
        >
          <ProgressBar />
        </div>
        <div className="stat-count">
          <i className="fa fa-medkit fa-2x"></i>
          <div className="content">
            <h4>Vaccines</h4>
            <h5>
              Total:{" "}
              {topCards.vaccination.total > 0
                ? topCards.vaccination.total.toLocaleString("en-IN")
                : ""}
            </h5>
            <b className="delta">
              Today:{" "}
              {topCards.vaccination.today > 0
                ? topCards.vaccination.today.toLocaleString("en-IN")
                : ""}
            </b>
          </div>
        </div>
      </Card>
    </div>
  );

  function getCardsData(
    state_id = "",
    district_id = "",
    date = getTodayDate()
  ) {
    let URL = "";
    if (currentState) {
      URL = `${
        Dashboard_API() + currentState.value
      }&district_id=${district_id}&date=${date}`;
      if (currentDistrict) {
        URL = `${Dashboard_API() + currentState.value}&district_id=${
          currentDistrict.value
        }&date=${date}`;
      }
    } else {
      URL = `${Dashboard_API()}&district_id=${district_id}&date=${date}`;
    }

    getData(URL).then((data) => {
      setTopCards({
        sites: { total: data.topBlock.sites.total },
        registration: {
          total: data.topBlock.registration.total,
          today: data.topBlock.registration.today,
        },
        vaccination: {
          total: data.topBlock.vaccination.total,
          today: data.topBlock.vaccination.today,
        },
      });
      dispatch(hide());
    });
  }
}
