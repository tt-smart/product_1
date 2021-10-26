// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../../history";
import Test from "../../Pages/test";
import { LandingPage } from "../../Pages";
import BusinessRegister from "../../Pages/business_reg";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/business-page" component={BusinessRegister} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
