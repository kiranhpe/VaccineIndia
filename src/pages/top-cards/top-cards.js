import React, { Component } from "react";
import { API } from "../../common/enums/API.enum";
import APIService from "../../common/service/api.service";
import getTodayDate from "../../common/utils/date";
import Card from "../../ui-kit/card/card";
import Spinner from "../../ui-kit/spinner/spinner";

import "./top-cards.scss";

export default class TopCards extends Component {
  state = {
    sites: { total: 0 },
    registration: { total: 0, today: 0 },
    vaccination: { total: 0, today: 0 },
  };

  _api = new APIService();
  componentDidMount() {
    this.getCardsData();
  }

  render() {
    return (
      <div className="row">
        <Card className="center-text">
          <div className="stat-count">
            <i className="fa fa-map fa-2x"></i>
            <div className="content">
              <h4>Vaccine Centers</h4>
              <h5>{this.state.sites.total > 0 ?this.state.sites.total.toLocaleString("en-IN"): ''}</h5>
              <Spinner show={this.state.sites.total === 0}></Spinner>
              <p></p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="stat-count">
            <i className="fa fa-users fa-2x"></i>
            <div className="content">
              <h4>Registered Users</h4>
              <h5>{this.state.registration.total > 0 ? this.state.registration.total.toLocaleString("en-IN"): ''}</h5>
              <Spinner show={this.state.registration.total === 0}></Spinner>

            </div>
          </div>
        </Card>
        <Card>
          <div className="stat-count">
            <i className="fa fa-medkit fa-2x"></i>
            <div className="content">
              <h4>Vaccines</h4>
              <h5>{this.state.vaccination.total > 0 ? this.state.vaccination.total.toLocaleString("en-IN"): ''}</h5>
              <Spinner show={this.state.vaccination.total === 0}></Spinner>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  getCardsData(state_id = "", district_id = "", date = getTodayDate()) {
    const URL = `${
      API.Dashboard_API + state_id
    }&district_id=${district_id}&date=${date}`;
    this._api.getData(URL).then((data) => {
      this.setState({
        sites: { total: data.topBlock.sites.total },
        registration: { total: data.topBlock.registration.total },
        vaccination: { total: data.topBlock.vaccination.total },
      });
    });
  }
}
