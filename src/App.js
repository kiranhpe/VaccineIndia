import Card from "./ui-kit/card/card";
import "./App.scss";
import Toolbar from "./ui-kit/toolbar/toolbar";
import Container from "./ui-kit/container/container";

function App() {
  return (
    <>
      <Toolbar>
        <div><p className="app-name">INDIA Vaccine</p></div>
      </Toolbar>
      <Container>
        <div className="row">
          <Card className="center-text">
            <i className="fa fa-map fa-2x"></i>
          </Card>
          <Card>
            <i className="fa fa-users fa-2x"></i>
          </Card>
          <Card>
            <i className="fa fa-medkit fa-2x"></i>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default App;
