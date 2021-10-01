import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "./history";
import Test from "./test";
import Test1 from "./test2";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Test} />
          <Route exact path="/test" component={Test1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
