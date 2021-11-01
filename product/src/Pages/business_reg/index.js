// Business Registration

import React, { useState } from "react";
import "./style.scss";
import { Grid } from "../../Components/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import Avatar from "@material-ui/core/Avatar";
import { Row, Col, Tabs, Tab, Form, ProgressBar } from "react-bootstrap";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TextEditer } from "../../Components/TextEditer";
import Select from "react-select";
import { customStyles } from "../../helper/styles";
import DatePicker from "react-datepicker";
import OfficeDetails from "./office_details";
import { Button } from "react-bootstrap";
import { Table, Pagination } from "antd";
import { businesslist } from "../helpers/table_data";
import Range from "react-range-progress";
import {
  businesstype,
  subindustry,
  stateoptions,
  cityoptions,
  companytype,
  businessmodal,
  licenseavailable,
  anualturnover,
  netprofitturnover,
  ebitdamargin,
  amountsdetails,
  reasonforsale
} from "../helpers/options_data";
import Header from "../../Components/Header/header";

const BusinessRegister = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [progressstatus, setProgressStatus] = useState(60);

  const onRangeChanged = (value) => {
    setProgressStatus(value);
  };

  return (
    <div className="wrapper">
      <Header />
      <Grid break="lg">
        <Grid.Cell span={30}>
          <Box component={Paper} p={3} className="m-2">
            <Row>
              <Col lg="4">
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
                <br />
                <div className="ml-1">
                  <p>
                    <b>Ragul V</b>
                  </p>
                </div>
              </Col>
              <Col lg="8">
                <br />
                <DateRangeIcon fontSize="inherit" />
                &ensp;21/01/2021
                <br />
                <EmailIcon fontSize="inherit" />
                &ensp;vragul0602@gmail.com
                <br />
                <LocalPhoneIcon fontSize="inherit" />
                &ensp;9994972098
              </Col>
            </Row>
          </Box>
          <Box component={Paper} p={3} className="m-2">
            <h6>AllConnetO Recommendations</h6>
          </Box>
        </Grid.Cell>
        <Grid.Cell span={70} className="mr-2 mb-5">
          <Box component={Paper} p={2} className="mt-2">
            <h5>My Business List</h5>
          </Box>
          <Box component={Paper} p={2} className="mt-2">
            <Tabs
              defaultActiveKey="addnewbusiness"
              id="uncontrolled-tab-example"
              className="mb-3 mt-2"
            >
              <Tab
                eventKey="addnewbusiness"
                title={
                  <span>
                    {" "}
                    <IoMdAddCircle size="20px" /> Add New Business
                  </span>
                }
              >
                <Form.Row as={Row}>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>Comapany Name*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Company Name"
                      name="patientname"
                      size="md"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="businessname">
                    <Form.Label>Business Title*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Eg. Acquisition oppurtunity"
                      name="patientname"
                      size="md"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2">
                  <Form.Group as={Col} md="12" controlId="generaldes">
                    <Form.Label>General Description*</Form.Label>
                    <TextEditer
                      placeholder="Write your description here..."
                      // value={values.overview.note || ""}
                      // onChange={(event) => {
                      //   setFieldValue(`overview.note`, event);
                      //   //this.setState({note:event});
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2">
                  <Form.Group as={Col} md="12" controlId="generaldes">
                    <Form.Label>Additional Information</Form.Label>
                    <TextEditer
                      placeholder="Write your information here..."
                      // value={values.overview.note || ""}
                      // onChange={(event) => {
                      //   setFieldValue(`overview.note`, event);
                      //   //this.setState({note:event});
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2">
                  <Form.Group as={Col} md="12" controlId="generaldes">
                    <Form.Label>USP's</Form.Label>
                    <TextEditer
                      placeholder="Write your usp here..."
                      // value={values.overview.note || ""}
                      // onChange={(event) => {
                      //   setFieldValue(`overview.note`, event);
                      //   //this.setState({note:event});
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>Business/Industry Type*</Form.Label>
                    <Select
                      id="businesstype"
                      label="businesstype"
                      // className="col-10"
                      placeholder="Select Business Type"
                      options={businesstype}
                      name="businesstype"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="businessname">
                    <Form.Label>Sub Industry Type</Form.Label>
                    <Select
                      id="subindustrytype"
                      label="subindustrytype"
                      // className="col-10"
                      placeholder="Select Sub Industry Type"
                      options={subindustry}
                      name="subindustrytype"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>State*</Form.Label>
                    <Select
                      id="state"
                      label="state"
                      // className="col-10"
                      placeholder="Select State"
                      options={stateoptions}
                      name="state"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="businessname">
                    <Form.Label>City</Form.Label>
                    <Select
                      id="city"
                      label="city"
                      // className="col-10"
                      placeholder="Select City"
                      options={cityoptions}
                      name="city"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group as={Col} md="12" controlId="generaldes">
                    <Form.Label>Expansion Opportunitites</Form.Label>
                    <TextEditer
                      placeholder="Write your expansion opportunities here..."
                      // value={values.overview.note || ""}
                      // onChange={(event) => {
                      //   setFieldValue(`overview.note`, event);
                      //   //this.setState({note:event});
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <h5>Nature Of Organization</h5>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>Establishment Year*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      as={DatePicker}
                      dateFormat="yyyy"
                      showYearPicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholder="Enter Year"
                      name="establishment year"
                      size="md"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="businessname">
                    <Form.Label>No of Customers(approx)*</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter No of Customers"
                      name="noofcustomers"
                      size="md"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>Comapany Type*</Form.Label>
                    <Select
                      id="companytype"
                      label="companytype"
                      // className="col-10"
                      placeholder="Select Comapany Type"
                      options={companytype}
                      name="companytype"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="businessname">
                    <Form.Label>Business Modal*</Form.Label>
                    <Select
                      id="businessmodal"
                      label="businessmodal"
                      // className="col-10"
                      placeholder="Select Business Modal"
                      options={businessmodal}
                      name="businessmodal"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>Staff Size*</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Staff Size"
                      name="staffsize"
                      size="md"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="businessname">
                    <Form.Label>Licenses Available*</Form.Label>
                    <Select
                      id="licensesavailable"
                      label="licensesavailable"
                      // className="col-10"
                      placeholder="Select Yes or No"
                      options={licenseavailable}
                      name="licensesavailable"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <div className="mt-2 pay-table">
                  <h5>Office Details</h5>
                  <OfficeDetails />
                </div>
                <Row className="mt-4">
                  <Col lg={6}>
                    <h6>
                      <p>Annual Turnover (approx)</p>
                    </h6>
                    <div className="mt-2">
                      <Form.Row className="mt-2" as={Row}>
                        <Form.Group as={Col} md="6" controlId="companyname">
                          <Form.Label>2017-2018*</Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter your details"
                            name="staffsize"
                            size="md"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="businessname">
                          <Form.Label>&nbsp;</Form.Label>
                          <Select
                            id="selectdate"
                            label="selectdate"
                            // className="col-10"
                            placeholder="Select"
                            options={anualturnover}
                            name="selectdate"
                            // value={{ label: values.businesstype }}
                            styles={customStyles}
                            // onChange={(value) => {
                            //   setFieldValue("gender", value.label);
                            // }}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <h6>
                      <p>Net Profit</p>
                    </h6>
                    <div className="mt-2">
                      <Form.Row className="mt-2" as={Row}>
                        <Form.Group as={Col} md="6" controlId="companyname">
                          <Form.Label>2017-2018*</Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter your details"
                            name="staffsize"
                            size="md"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="businessname">
                          <Form.Label>&nbsp;</Form.Label>
                          <Select
                            id="selectdate"
                            label="selectdate"
                            // className="col-10"
                            placeholder="Select"
                            options={netprofitturnover}
                            name="selectdate"
                            // value={{ label: values.businesstype }}
                            styles={customStyles}
                            // onChange={(value) => {
                            //   setFieldValue("gender", value.label);
                            // }}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={6}>
                    <h6>
                      <p>Annual Turnover (approx)</p>
                    </h6>
                    <p>Approx: 0 % - {progressstatus}%</p>
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
                    {/* <Form.Group as={Col} md="3" controlId="companyname">
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter your value"
                      value={progressstatus}
                      max={100}
                      onChange={(event) => setProgressStatus(event.target.value)}
                      name="staffsize"
                      size="md"
                    />
                    </Form.Group>
                    <br />
                    <ProgressBar now={progressstatus} /> */}
                  </Col>
                  <Col lg={6}>
                    <h6>
                      <p>EBITDA Margin*</p>
                    </h6>
                    <div className="mt-2">
                      <Form.Row className="mt-2" as={Row}>
                        <Form.Group as={Col} md="6" controlId="companyname">
                          <Form.Label>2017-2018*</Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter your details"
                            name="staffsize"
                            size="md"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="businessname">
                          <Form.Label>&nbsp;</Form.Label>
                          <Select
                            id="selectdate"
                            label="selectdate"
                            // className="col-10"
                            placeholder="Select"
                            options={ebitdamargin}
                            name="selectdate"
                            // value={{ label: values.businesstype }}
                            styles={customStyles}
                            // onChange={(value) => {
                            //   setFieldValue("gender", value.label);
                            // }}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>
                  </Col>
                </Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="formFile"
                    className="mb-3"
                  >
                    <h6>
                      <Form.Label>Documents Upload*</Form.Label>
                    </h6>
                    <Form.Control type="file" multiple />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="formFile"
                    className="mb-3"
                  >
                    <h6>
                      <Form.Label>Business Images*</Form.Label>
                    </h6>
                    <Form.Control type="file" multiple />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="formFile"
                    className="mb-3"
                  >
                    <h6>
                      {" "}
                      <Form.Label>Upload Video*</Form.Label>
                    </h6>
                    <Form.Control type="file" placeholder="Choose Video" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>What brings you here*</Form.Label>
                    <Select
                      id="selectdate"
                      label="selectdate"
                      // className="col-10"
                      placeholder="Select"
                      options={ebitdamargin}
                      name="selectdate"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mt-2" as={Row}>
                  <Form.Group as={Col} md="4" controlId="companyname">
                    <Form.Label>Offer Price (approx)*</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter your details"
                      name="staffsize"
                      size="md"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="2" controlId="companyname">
                    <Form.Label>&nbsp;</Form.Label>
                    <Select
                      id="selectdate"
                      label="selectdate"
                      // className="col-10"
                      placeholder="Select"
                      options={amountsdetails}
                      name="selectdate"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="companyname">
                    <Form.Label>Reason For Sale*</Form.Label>
                    <Select
                      id="selectdate"
                      label="selectdate"
                      // className="col-10"
                      placeholder="Select"
                      options={reasonforsale}
                      name="selectdate"
                      // value={{ label: values.businesstype }}
                      styles={customStyles}
                      // onChange={(value) => {
                      //   setFieldValue("gender", value.label);
                      // }}
                    />
                  </Form.Group>
                </Form.Row>
                <div className="mt-2">
                  <Button variant="success">Add Now</Button>{" "}
                  <Button variant="info">Save as Draft</Button>{" "}
                </div>
              </Tab>
              <Tab
                eventKey="businesslist"
                title={
                  <span>
                    {" "}
                    <AiOutlineUnorderedList size="20px" /> Business List
                  </span>
                }
              >
                <div className="m-3 mb-5 pay-table">
                  <Table
                    // dataSource={dataSource}
                    columns={businesslist}
                    size="small"
                    bordered
                    pagination={false}
                  />
                </div>
              </Tab>
            </Tabs>
          </Box>
        </Grid.Cell>
      </Grid>
    </div>
  );
};

export default BusinessRegister;
