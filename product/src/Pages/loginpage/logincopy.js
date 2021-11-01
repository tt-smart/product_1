//Login Page
import React, { useState, useEffect } from "react";
import "./login.scss";
import { Col, Button, Form, FormGroup, Card, Row } from "reactstrap";
import { Input } from "../../Components/Input";
import firebase from "../../firebase";
import { notification } from "antd";
import cookie from "react-cookies";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [error, setError] = useState({});
  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
    cookie.remove("business");
    console.log("on login session cleared");
  }, []);

  const onChangePassword = (value) => {
    setpassword(value);
  };

  const onChangeEmail = (value) => {
    setemail(value);
  };

  const onChangeCreatePassword = (value) => {
    setCreatePassword(value);
  };

  const onChangeCreateEmail = (value) => {
    setCreateEmail(value);
  };

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem("organizatation", "business");
        history.push("/landing-page");
        cookie.save("organizatation", "business");
      })
      .catch((error) => {
        console.log("err", error);
        setError(error);
        notification.warning({
          message: "Login Error",
          description: error.message,
        });
      });
  };

  const onLogup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(createEmail, createPassword)
      .then((user) => {
        notification.success({
          message: "You are successfully LogUp",
          description: error.message,
        });
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  return (
    <div className="wrapper">
      <Row className="mt-5 ml-5">
        {/* //login column */}
        <Col lg={5}>
          <h2 className="login-heading">Login</h2>
          <hr className="hor-line"></hr>
          <Form>
            <Card className="login-page">
              <FormGroup row>
                <Input
                  className="input-email"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Enter Your Email"
                  onChange={(val, name, e) => {
                    onChangeEmail(val);
                  }}
                  value={email}
                />
              </FormGroup>
              <FormGroup row>
                <Input
                  className="input-password"
                  type="password"
                  name="password"
                  onChange={(val, name, e) => {
                    onChangePassword(val);
                  }}
                  value={password}
                  id="examplePassword"
                  placeholder="Enter Your Password"
                />
              </FormGroup>
              <Button
                color="primary"
                size="sm"
                className="input-Button"
                onClick={() => onLogin()}
              >
                Sign in
              </Button>
              <a href="#" className="Forgot-password">
                Forgot Password ?
              </a>
              <span className="span-name">sign in using</span>
            </Card>
          </Form>
        </Col>
        <Col lg={1}>
          <div className="v1"></div>
        </Col>
        {/* create an account column */}
        <Col lg={6}>
          <h2 className="login-heading">Create An Account</h2>
          <hr className="hor-line"></hr>
          <Card className="register">
            <span className="span-name">sign in using</span>
            <div className="content-rignt">
              <div className="content-form">
                <Input
                  type="text"
                  className="first-name"
                  placeholder="First Name"
                />
                <Input
                  type="text"
                  className="last-name"
                  placeholder="Last Name"
                />
              </div>
              <Form inline>
                <FormGroup>
                  <Input
                    type="text"
                    className="email"
                    placeholder="Enter Your Email"
                    name="createEmail"
                    value={createEmail}
                    onChange={(val, name, e) => {
                      onChangeCreateEmail(val);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    className="password"
                    placeholder="Enter your Password!"
                    onChange={(val, name, e) => {
                      onChangeCreatePassword(val);
                    }}
                    value={createPassword}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="number"
                    className="number"
                    placeholder="Mobile No"
                  />
                </FormGroup>
                <FormGroup>
                  <Input type="text" className="city" placeholder="City" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" className="select" placeholder="select" />
                </FormGroup>

                <FormGroup>
                  <Input type="checkbox" className="checkbox" />
                </FormGroup>
                <div className="check-item">
                  <span className="agree">i agree to</span>
                  <a href="#" className="terms">
                    terms and conditions
                  </a>
                </div>
                <Button
                  color="primary"
                  size="sm"
                  className="input-Button"
                  onClick={() => onLogup()}
                >
                  Sign me up!
                </Button>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
