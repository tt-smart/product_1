import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "@material-ui/core";

import Link from "@material-ui/core/Link";
// import footerlogo from '../assets/images/flogo.png';
// import androiddownloadbutton from '../assets/images/androidbutton.png';
// import appledownloadbutton from '../assets/images/applebutton.png';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {/* <Col lg={12} className="logo">
            <img src='./images/allconnecto.png' alt="#" width="240" />{" "}
          </Col> */}
          <Col lg={2} sm={2} xs={6}>
            <h3>Business</h3>
            <Link href="#">Businesses For Sale</Link>
            <Link href="#">Investment Opportunities</Link>
            <Link href="#">Businesses Seeking Loan</Link>
            <Link href="#">Business Assets For Sale</Link>
            <h3>Franchises</h3>
            <Link href="#">Franchises For Sale </Link>
            <Link href="#">Franchise Investors</Link>
          </Col>
          {/* Venture Capital Firms Private Equity Firms Family Offices Business Lenders */}
          <Col lg={2} sm={2} xs={6}>
            <h3>Investors</h3>
            <Link href="#">Individual Investors</Link>
            <Link href="#">Business Buyers</Link>
            <Link href="#">Corporate Investors</Link>
            <Link href="#">Venture Capital Firms </Link>
            <Link href="#">Private Equity Firms </Link>
            <Link href="#">Family Offices </Link>
            <Link href="#">Business Lenders</Link>
          </Col>
          <Col lg={2} sm={2} xs={6}>
            <h3>Advisors</h3>
            <Link href="#">Businesses Seeking</Link>
            <Link href="#">Investment Banks</Link>
            <Link href="#">M&A Advisors </Link>
            <Link href="#">Business Brokers</Link>
            <Link href="#">CRE Brokers</Link>
            <Link href="#">Financial Consultants</Link>
            <Link href="#">Accountants </Link>
            <Link href="#">Law Firms</Link>
          </Col>
          <Col lg={2} sm={2} xs={6}>
            <h3>Get Started</h3>
            <Link href="#">Sell your Business</Link>
            <Link href="#">Finance your Business</Link>
            <Link href="#">Buy a Business </Link>
            <Link href="#">Invest in a Business</Link>
            <Link href="#">Value your Business</Link>
            <Link href="#">Register as Advisor</Link>
          </Col>
          <Col lg={2} sm={2} xs={6}>
            <h3>Company</h3>
            <Link href="#">About</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Press</Link>
            <Link href="#">FAQ's</Link>
          </Col>
          <Col lg={2} sm={2} xs={2}>
            <h3>stay connected</h3>
            <div className="d-flex justify-content-between">
              <Link href="#">
                <FacebookIcon />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="#">
                <LinkedInIcon />
              </Link>
              <Link href="#">
                <InstagramIcon />
              </Link>
            </div>
          </Col>
          {/* copyright start */}
          <Col lg={6} sm={6} xs={6} className="copyright">
          Copyright © 2021 ALLCONNECTO Online Services Private Limited. All Rights Reserved.
          </Col>
          <Col lg={6} sm={6} xs={6} className="copyright">
          <span>Privacy Policy</span> · <span>Terms of Use</span> · <span>Refund Policy</span> · <span>Best Practices</span> ·<span> Sitemap</span>
          </Col>
          {/* copyright end */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
