import React from "react";
import "./style.scss";
// import Header from '../../common/header';
// import Footer from '../../common/footer';

import { Container, Divider } from "@material-ui/core";

import { Col, Image, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import Avatar from "@material-ui/core/Avatar";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsLink45Deg, BsFillPencilFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Background from "./background-image.jpg";
import Background1 from "./background1.jpg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Dashboard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background1})`,
        objectFit: "contain",
        objectPosition: "center",
      }}
    >
      <Header />
      {/* <main> */}
        <Container className='p-0'>
          <Row className="p-2">
            <Col lg={3}>
              <Box component={Paper} p={1}>
                <Row>
                  <Col lg={3}>
                    <Avatar
                      className="user_avatar"
                      style={{
                        width: 70,
                        height: 70,
                        backgroundColor: "#FFB744",
                      }}
                      alt="Remy Sharp"
                      src="/images/user_profile.jpg"
                    />
                  </Col>
                  <Col lg={9}>
                    <div className="ml-1">
                      <b>Ragul V</b>
                    </div>
                    {/* <EmailIcon fontSize="inherit" /> */}
                    <div>vragul0602@gmail.com</div>
                  </Col>
                </Row>
              </Box>
              <Box component={Paper} p={1} className="mt-1">
                <p className="text-center active-tag">Profile Activated</p>
                <Row className="ml-1" style={{ lineHeight: "3px" }}>
                  <Col lg={6}>
                    <p style={{ fontSize: "13px" }}>Industries</p>
                    <p style={{ fontSize: "13px" }}>Locations</p>
                    <p style={{ fontSize: "13px" }}>Deal Size</p>
                    <p style={{ fontSize: "13px" }}>Recent Payments</p>
                  </Col>
                  <Col lg={6}>
                    <p style={{ fontSize: "13px" }}>All Industries</p>
                    <p style={{ fontSize: "13px" }}>India</p>
                    <p style={{ fontSize: "13px" }}>500 C</p>
                    <p style={{ fontSize: "13px" }}>Free Trial</p>
                  </Col>
                </Row>
                <Divider />
                <Row className="ml-1 mt-2" style={{ lineHeight: "2px" }}>
                  <Col lg={6}>
                    <p style={{ fontSize: "13px" }}>
                      <GoLocation />
                      &nbsp;India
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      <AiTwotoneCalendar />
                      &nbsp;Joined Oct 21
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      <BsLink45Deg />
                      &nbsp;Asia/Kolkata
                    </p>
                  </Col>
                  <Col lg={6}>
                    <p style={{ fontSize: "13px" }}>
                      <AiFillFacebook />
                      &nbsp;Facebook
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      <AiFillLinkedin />
                      &nbsp;LinkedIn
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      <AiFillGoogleCircle />
                      &nbsp;Google
                    </p>
                  </Col>
                </Row>
                <Divider />
                <p className="text-center mt-2" style={{ cursor: "pointer" }}>
                  <BsFillPencilFill />
                  &nbsp;Account Details
                </p>
              </Box>
              <Box component={Paper} p={0} className="mt-2" height={30}>
                <p className="ml-1">Who viewd my profile</p>
              </Box>
              <Box component={Paper} p={0} className="mt-2" height={30}>
                <p className="ml-1">Who showed interest on my profile </p>
              </Box>
              <Box component={Paper} p={0} className="mt-2" height={30}>
                <p className="ml-1">Received proposal</p>
              </Box>
            </Col>
            <Col lg={6} style={{ overflowY: "scroll", height: "80vh" }}>
              <Box component={Paper} p={3}>
                <p>Hi Ragul,</p>
                <p>
                  Welcome to ALLCONNECTO, We help you acquire businesses, raise
                  capital for your company, find franchise partners, or realize
                  value through a strategic sale. Our global network of
                  investors and businesses helps you successfully achieve your
                  strategic objectives.
                </p>
                <Row>
                  <Col lg={3} style={{ cursor: "pointer" }}>
                    <Image
                      src="/images/sellbusiness.png"
                      alt="sell business"
                      width={110}
                      height={100}
                      style={{ borderRadius: "50%" }}
                    />
                    <p className="text-center text-justify">
                      Sell Your Business or Find Investers
                    </p>
                  </Col>
                  <Col lg={3} style={{ cursor: "pointer" }}>
                    <Image
                      src="/images/buybusiness.png"
                      alt="sell business"
                      width={110}
                      height={100}
                      style={{ borderRadius: "50%" }}
                    />
                    <p className="text-center text-justify">
                      Buy a business or Investing in a business
                    </p>
                  </Col>
                  <Col lg={3} style={{ cursor: "pointer" }}>
                    <Image
                      src="/images/franchise.jpg"
                      alt="sell business"
                      width={110}
                      height={100}
                      style={{ borderRadius: "50%" }}
                    />
                    <p className="text-center text-justify">
                      Franchise Your Brand or Get Distributers
                    </p>
                  </Col>
                  <Col lg={3} style={{ cursor: "pointer" }}>
                    <Image
                      src="/images/advisor.jpg"
                      alt="sell business"
                      width={110}
                      height={100}
                      style={{ borderRadius: "50%" }}
                    />
                    <p className="text-center text-justify">
                      Register as an Advisor or Business Broker
                    </p>
                  </Col>
                </Row>
              </Box>
              <Box component={Paper} p={2} className="mt-2">
                <b>Recommendations</b>
              </Box>
            </Col>
            <Col lg={3}>
              <Box component={Paper} p={3}>
                <b>Industry Update</b>
                <p>You may be interested in these industries</p>
                <Divider />
              </Box>
              <Box component={Paper} className="mt-2">
                <p className="text-center">View All</p>
              </Box>
            </Col>
          </Row>
        </Container>
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default Dashboard;
