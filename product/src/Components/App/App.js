import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../../history";
import Test from "../../Pages/test";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Test} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
