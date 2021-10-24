// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../../history";
import Test from "../../Pages/test";
import { LandingPage } from "../../Pages";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/landing-page" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
