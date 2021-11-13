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
        history.push("/dashboard");
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
    <div style={{ display: "flex" }}>
      <Row style={{ width: "97%", marginTop: "5%", marginLeft: "3%" }}>
        {/* //login column */}
        <Col lg={6}>
          <h2 className="login-heading">Create An Account</h2>
          <hr className="hor-line"></hr>
          <div>
            <Card className="register">
              <div style={{ backgroundColor: "#eeeeee" }}>
                {/* <span className="span-name">sign in using</span> */}
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#eeeeee",
                    width: "100%",
                  }}
                >
                  <span className="span-name">sign in using</span>
                  <div
                    style={{
                      display: "flex",
                      width: "45%",
                      marginLeft: "-65px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        borderRight: "1px solid #ccc8c8",
                        width: "50%",
                      }}
                    >
                      <img
                        style={{
                          height: "60%",
                          width: "29%",
                          display: "flex",
                          marginLeft: "45px",
                          borderRadius: "50%",
                          marginTop: "10px",
                        }}
                        src="https://s3-symbol-logo.tradingview.com/facebook--600.png"
                      />
                    </div>
                    <div style={{ display: "flex", width: "50%" }}>
                      <img
                        style={{
                          height: "45%",
                          width: "40%",
                          display: "flex",
                          marginLeft: "1px",
                          marginTop: "13px",
                          borderRadius: "50%",
                        }}
                        src="https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="content-rignt">
                  <div className="content-form">
                    <div
                      style={{
                        display: "flex",
                        width: "45%",
                      }}
                    >
                      <Input
                        // style={{width:"20%"}}
                        type="text"
                        className="first-name"
                        placeholder="First Name"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "45%",
                      }}
                    >
                      <Input
                        style={{ width: "20%" }}
                        type="text"
                        className="last-name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <Form style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <Col>
                        <div style={{ display: "flex", width: "100%" }}>
                          <FormGroup style={{ width: "100%" }}>
                            <Input
                              type="text"
                              placeholder="Enter Your Email"
                              name="createEmail"
                              value={createEmail}
                              onChange={(val, name, e) => {
                                onChangeCreateEmail(val);
                              }}
                            />
                          </FormGroup>
                        </div>
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
                          <Input
                            type="text"
                            className="city"
                            placeholder="City"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="text"
                            className="select"
                            placeholder="select"
                          />
                        </FormGroup>

                        <FormGroup style={{ marginLeft: "7%" }}>
                          <Input type="checkbox" />
                        </FormGroup>
                      </Col>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "12%",
                        fontSize: "12px",
                        marginTop: "4%",
                      }}
                    >
                      <span>I Agree to</span>
                      <br />
                      <div style={{ marginLeft: "1%" }}>
                        <a href="#" className="terms">
                          Terms and Conditions
                        </a>
                      </div>
                    </div>

                    <Button
                      style={{
                        display: "flex",
                        marginTop: "1%",
                        justifyContent: "center",
                        marginLeft: "25%",
                        width: "50%",
                        marginBottom: "2%",
                      }}
                      color="primary"
                      size="sm"
                      onClick={() => onLogup()}
                    >
                      Sign me up!
                    </Button>
                  </Form>
                </div>
              </div>
            </Card>
          </div>
        </Col>
        <Col lg={1}>
          <div className="v1"></div>
        </Col>
        {/* create an account column */}
        <Col lg={5}>
          <h2 className="login-heading">Login</h2>
          <hr className="hor-line"></hr>
          <div style={{ width: "100%" }}>
            <Form>
              <Card className="login-page">
                <div style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "5%",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <FormGroup style={{ width: "80%" }}>
                      <Input
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
                  </div>
                  <div
                    style={{
                      backgroundColor: "#eeeeee",
                      display: "flex",
                      marginTop: "%",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <FormGroup style={{ width: "80%" }}>
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
                  </div>
                </div>
                <div style={{ backgroundColor: "#eeeeee" }}>
                  <Button
                    color="primary"
                    size="sm"
                    className="input-Button"
                    onClick={() => onLogin()}
                  >
                    Sign in
                  </Button>
                  <a href="#" className="Forgot-password" onClick={()=> <Form>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Your Email"
                        />
                        <Button>reset password</Button>
                  </Form>
                  
                }>
                    Forgot Password ?
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#eeeeee",
                    width: "100%",
                  }}
                >
                  <span className="span-name">sign in using</span>
                  <div
                    style={{
                      display: "flex",
                      width: "35%",
                      marginLeft: "-41px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        borderRight: "1px solid #ccc8c8",
                        width: "50%",
                      }}
                    >
                      <img
                        style={{
                          height: "60%",
                          width: "40%",
                          display: "flex",
                          marginLeft: "28px",
                          marginTop: "10px",
                          borderRadius: "50%",
                        }}
                        src="https://s3-symbol-logo.tradingview.com/facebook--600.png"
                      />
                    </div>
                    <div style={{ display: "flex", width: "50%" }}>
                      <img
                        style={{
                          height: "45%",
                          width: "48%",
                          display: "flex",
                          marginLeft: "1px",
                          marginTop: "12px",
                          borderRadius: "50%",
                        }}
                        src="https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol.png"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
