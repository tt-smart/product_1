// App.js

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../../firebase";
import history from "../../history";

import { LandingPage, Businesspage, LoginCopy } from "../../Pages";

function App() {
  const [authenticated, setauthenticated] = useState({
    authenticated: false,
    initializing: true,
  });

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          authenticated.authenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? setauthenticated({
            authenticated: true,
            initializing: false,
          })
        : setauthenticated({
            authenticated: false,
            initializing: false,
          });
    });
    console.log("authenticated", authenticated);
  }, [setauthenticated]);

  if (authenticated.initializing) {
    return <div></div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginCopy} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/login" component={LoginCopy} />
          <PrivateRoute exact path="/landing-page" component={LandingPage} />
          <PrivateRoute exact path="/business-page" component={Businesspage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
