import "./App.scss";
import Toolbar from "./ui-kit/toolbar/toolbar";
import Container from "./ui-kit/container/container";
import React from "react";
import TopCards from "./pages/top-cards/top-cards";
import StateFilter from "./pages/state-filter/state-filter";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./ui-kit/progress-bar/progress-bar";
import { hide } from "./redux/actions/progress-bar.actions";
import Card from "./ui-kit/card/card";
import Maps from "./pages/maps/map";
import SecondRow from "./pages/second-row/second-row";

export default function App() {
  const showProgressbar = useSelector((state) => state.progressBar);
  return (
    <>
      <Toolbar>
        <div className="brand">
          <p className="brand-name">Vaccine INDIA</p>
        </div>
      </Toolbar>
      {showProgressbar ? <ProgressBar></ProgressBar> : ""}
      <Container>
        <StateFilter></StateFilter>
        <TopCards></TopCards>
        <div className="second-row">
          <SecondRow></SecondRow>
        </div>
        <div className="palce-holder">
          <h4>Work In Progress..... (Beta)</h4>
        </div>
      </Container>
    </>
  );
}
