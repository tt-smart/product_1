//home freshvoice description block
import React, { useState } from "react";
import "./style.scss";

import { Navbar, Nav, Button } from "react-bootstrap";
import { Avatar } from "../Avatar";
import { Input } from "../Input";
import SearchIcon from "@material-ui/icons/Search";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { BiLogIn } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";
import ReactFlagsSelect from "react-flags-select";
import {BiMessageDetail} from "react-icons/bi";
import {IoIosNotifications} from "react-icons/io"
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router';
import {
  Popover,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import cookie from "react-cookies";

const Header = () => {
  const [flagselect, setFlagSelect] = useState("IN");
  const [isOpen, setisOpen] = useState(false);
  const history = useHistory();
  const handleOpenUser = () => {
    setisOpen(true);
  };

  const handlelogout = () => {
    console.log("hiii")

    history.push("/login");
    localStorage.clear();
    cookie.remove("organizatation", { path: "/" });
  };

  return (
    <header>
      <Navbar expand="lg">
        <Navbar.Brand href="/dashboard">
          <img src="./images/allconnecto.png" width="200px" alt="#" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="hed-cnt">
            <Nav className="fv-menu" style={{ color: "#fff" }}>
              <Input placeholder="Business Type" type="text" />
              <Input placeholder="Location" type="text" />
              <Button
                variant="primary"
                size="sm"
                style={{ borderRadius: "0px", height: "38px" }}
              >
                <SearchIcon />
              </Button>
              <Nav.Link href="#">
                <AccountBoxIcon /> Profile
              </Nav.Link>
              <Nav.Link href="#">
                <IoMdBusiness fontSize="25px" /> Business Valuation
              </Nav.Link>
              <Nav.Link href="#">
                <BiLogIn fontSize="25px" /> Login
              </Nav.Link>
              {/* <span className="d-flex mt-1"> */}
              {/* <ReactFlagsSelect
                selected={flagselect}
                onSelect={(code) => setFlagSelect(code)}
                showSelectedLabel={false}
                showSecondarySelectedLabel={false}
                showOptionLabel={false}
                selectedSize={12}
                optionsSize={12}
                className="flag-color"
                fullWidth={true}
              />
              {flagselect === "IN" ? (
                <p
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    marginTop: "8px",
                    marginLeft: "3px",
                  }}
                >
                  INR
                </p>
              ) : (
                <p
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    marginTop: "8px",
                    marginLeft: "3px",
                  }}
                >
                  USD
                </p>
              )} */}
              {/* </span> */}
              <Nav.Link href="#" className="ml-2">
                <BiMessageDetail fontSize="25px" />
              </Nav.Link>
              <Nav.Link href="#" className="ml-2">
                <IoIosNotifications fontSize="25px" />
              </Nav.Link>
            </Nav>
          </div>
          <div className="hdr-atr user-profile-avatar" id="userMenu" onClick={handleOpenUser}>
            <Avatar image="/images/user_profile.jpg" size="medium" />
          </div>
          <UncontrolledPopover
              placement="bottom"
              trigger="legacy"
              target="userMenu"
            >
              <PopoverHeader className="logout">
                <div className="logout-modal">logged as <span style={{ fontSize: '12px', fontWeight: '500', color: 'blue'}}>ragul@gmail.com</span></div>
                {/* <div className="logout-modal">Designation: Cheif Doctor</div> */}
              </PopoverHeader>
              <PopoverBody>
                <div className="account">
                  <div className="account-modal mr-3">My Account</div>
                  <div>|</div>
                  <div
                    className="account-logout ml-3"
                    onClick={handlelogout}
                    // onClick={() => {
                    //   firebase
                    //     .auth()
                    //     .signOut()
                    //     .then(() => {
                    //       // Sign-out successful.
                    //     })
                    //     .catch((error) => {
                    //       // An error happened.
                    //       console.log("consols")
                    //     });
                    // }}
                  >
                    Logout
                  </div>
                </div>
              </PopoverBody>
            </UncontrolledPopover>
          <br />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
