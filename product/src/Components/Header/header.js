import React from "react";
import "./style.scss";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Tabs,
  Tab,
  Card,
  Row,
  Link,
  Col,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import BusinessIcon from "@material-ui/icons/Business";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import { Input } from "../Input";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useHistory } from "react-router";
import cookie from "react-cookies";

function Head() {
  const history = useHistory();

  const handlelogout = () => {
    history.push("/login");
    localStorage.clear();
    cookie.remove("business", { path: "/" });
  };

  return (
    <div>
      <div className="header">
        <Navbar bg="light" expand="lg">
          <img
            src="https://w7.pngwing.com/pngs/231/404/png-transparent-tarpaulin-logo-canvas-canvas-background-service-textile-logo.png"
            className="logo"
            alt="logo"
          />
          <Navbar.Brand>All ConnectO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Row className="g-2">
              <Col md>
                <Input
                  type="search"
                  placeholder="Business Type"
                  className="mr-2"
                  aria-label="Business"
                />
              </Col>
              <Col md>
                <Input
                  type="search"
                  placeholder="Location"
                  className="mr-2"
                  aria-label="Location"
                />
              </Col>
            </Row>
            <Button variant="primary" size="sm" className="button-one">
              <SearchIcon />
            </Button>
            <Button variant="primary" size="sm" className="button-two">
              <AssignmentIndIcon /> Register
            </Button>
            <Button variant="primary" size="sm" className="button-three">
              <BusinessIcon /> Business Valuation
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="button-four"
              onClick={() => handlelogout()}
            >
              Login
            </Button>

            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100%", display: "block" }}
              navbarScroll
            ></Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <Nav.Link className="home">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link> */}

        <div className="navi">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100%" }}
            navbarScroll
          >
            <Nav.Link href="#home" className="home" style={{ color: "#000" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#Business"
              className="business"
              style={{ color: "#000" }}
            >
              Business For sale
            </Nav.Link>
            <Nav.Link
              href="#franchises"
              className="franchises"
              style={{ color: "#000" }}
            >
              Franchises
            </Nav.Link>
            <Nav.Link
              href="#investors"
              className="investors"
              style={{ color: "#000" }}
            >
              Investors & Buyers
            </Nav.Link>
            <Nav.Link href="#How to" className="How" style={{ color: "#000" }}>
              How to
            </Nav.Link>
            <Nav.Link
              href="#Company"
              className="company"
              style={{ color: "#000" }}
            >
              Company
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
}
export default Head;
