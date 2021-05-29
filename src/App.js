import "./App.scss";
import Toolbar from "./ui-kit/toolbar/toolbar";
import Container from "./ui-kit/container/container";
import React from "react";
import TopCards from "./pages/top-cards/top-cards";
import StateFilter from "./pages/state-filter/state-filter";

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
        </Container>
      </>
    );
  }
}
