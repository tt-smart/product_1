// import React from "react";
import "./style.scss";
import {
  Card,
  Button,
  Col,
  Row,
  Tab,
  Tabs,
  Form,
  InputGroup,
} from "react-bootstrap";
import Range from "react-range-progress";
import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const Filter = () => {
  const [progressstatus, setProgressStatus] = useState(11.2);

  const onRangeChanged = (value) => {
    setProgressStatus(value);
  };
  return (
    <div style={{ width: "100%", display: "flex", position: "sticky" }}>
      <div style={{ display: "flex", width: "100%" }}>
        <Card style={{ display: "flex", width: "100%", height: "100%" }}>
          <h4 style={{ marginTop: "10%" }}>Filter By</h4>
          <Tabs defaultActiveKey="home">
            <Tab eventKey="home" title="Business ">
              <div style={{ marginTop: "10%" }}>
                <h4>Investors and Buyers</h4>
                <div style={{ display: "flex" }}>
                  <PersonIcon />
                  <h5>Investor Type</h5>
                </div>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`individuals`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`companies`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`lender`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Finance Advisor`}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ display: "flex" }}>
                  <BusinessCenterIcon />
                  <h5>Interested in</h5>
                </div>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`All Transactions`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Buying a Business`}
                      />
                    </div>
                  ))}
                </Form>

                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Investing in a Business `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Lending To a Business `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Buying Business Assets `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Buying A Franchesis`}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ display: "flex" }}>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>Location</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroup"
                      placeholder="Filter"
                    />
                  </InputGroup>
                </div>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Africa`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Antarticia `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Asia `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Europe `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`North America `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Oceania `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`South America `}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ display: "flex" }}>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>Inductries</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroup"
                      placeholder="Filter"
                    />
                  </InputGroup>
                </div>
                {/* <div style={{display:"flex"}}>
                <PersonIcon />
                <h5>Investor Type</h5>
                </div> */}
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Building Counstruction and Maintaince "}
                      />
                    </div>
                  ))}
                </Form>

                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Business Services "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Education "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Energy "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Finance "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Food & Breverage "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Health Care "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Indutrial "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Logistic "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Media "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Retail Shop "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Technology "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Textiles "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Travel & Leisure "}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ borderBottom: "1px solid black" }}>
                  <h6>
                    <p>Inverstment Size</p>
                  </h6>
                  <p>INR {progressstatus} thousand</p>
                  <div style={{ marginBottom: "5px" }}>
                    <Range
                      value={progressstatus}
                      fillColor={{
                        r: 20,
                        g: 150,
                        b: 100,
                        a: 0.75,
                      }}
                      trackColor={{
                        r: 10,
                        g: 10,
                        b: 0,
                        a: 0.5,
                      }}
                      height={14}
                      width="100%"
                      onChange={onRangeChanged}
                    />
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    marginBottom: "5px",
                  }}
                >
                  <p>Investor Location</p>
                  <Form>
                    <Form.Group>
                      <Form.Control type="text" size="md" />
                    </Form.Group>
                  </Form>
                </div>
                <div style={{ marginBottom: "5px" }}>
                  <p>Other</p>
                  <Form style={{ display: "flex", marginLeft: "20px" }}>
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-1">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={"Paid "}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </div>{" "}
            </Tab>
            <br />
            <Tab eventKey="profile" title="Sales ">
              <div style={{ marginTop: "10%" }}>
                <h4>Investors and Buyers</h4>
                <div style={{ display: "flex" }}>
                  <PersonIcon />
                  <h5>Investor Type</h5>
                </div>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`individuals`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`companies`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`lender`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Finance Advisor`}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ display: "flex" }}>
                  <BusinessCenterIcon />
                  <h5>Interested in</h5>
                </div>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`All Transactions`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Buying a Business`}
                      />
                    </div>
                  ))}
                </Form>

                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Investing in a Business `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Lending To a Business `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Buying Business Assets `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Buying A Franchesis`}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ display: "flex" }}>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>Location</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroup"
                      placeholder="Filter"
                    />
                  </InputGroup>
                </div>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Africa`}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Antarticia `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Asia `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Europe `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`North America `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Oceania `}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`South America `}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ display: "flex" }}>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>Inductries</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroup"
                      placeholder="Filter"
                    />
                  </InputGroup>
                </div>

                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Building Counstruction and Maintaince "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Business Services "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Education "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Energy "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Finance "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Food & Breverage "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Health Care "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Indutrial "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Logistic "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Media "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Retail Shop "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Technology "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Textiles "}
                      />
                    </div>
                  ))}
                </Form>
                <Form style={{ display: "flex", marginLeft: "20px" }}>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={"Travel & Leisure "}
                      />
                    </div>
                  ))}
                </Form>
                <hr />
                <div style={{ borderBottom: "1px solid black" }}>
                  <h6>
                    <p>Inverstment Size</p>
                  </h6>
                  <p>INR {progressstatus} thousand</p>
                  <div style={{ marginBottom: "5px" }}>
                    <Range
                      value={progressstatus}
                      fillColor={{
                        r: 20,
                        g: 150,
                        b: 100,
                        a: 0.75,
                      }}
                      trackColor={{
                        r: 10,
                        g: 10,
                        b: 0,
                        a: 0.5,
                      }}
                      height={14}
                      width="100%"
                      onChange={onRangeChanged}
                    />
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    marginBottom: "5px",
                  }}
                >
                  <p>Investor Location</p>
                  <Form>
                    <Form.Group>
                      <Form.Control type="text" size="md" />
                    </Form.Group>
                  </Form>
                </div>
                <div style={{ marginBottom: "5px" }}>
                  <p>Other</p>
                  <Form style={{ display: "flex", marginLeft: "20px" }}>
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-1">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={"Paid "}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};
export default Filter;
