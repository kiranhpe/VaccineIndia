import "./App.scss";
import Toolbar from "./ui-kit/toolbar/toolbar";
import Container from "./ui-kit/container/container";
import React from "react";
import TopCards from "./pages/top-cards/top-cards";
import StateFilter from "./pages/state-filter/state-filter";
import ProgressBar from "./ui-kit/progress-bar/progress-bar";

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Toolbar>
          <div className="brand">
            <p className="brand-name">Vaccine INDIA</p>
          </div>
        </Toolbar>
        <Container>
          <StateFilter></StateFilter>
          <TopCards></TopCards>
          <div className="palce-holder"><h4>Work In Progress.....</h4></div>
        </Container>
      </>
    );
  }
}
