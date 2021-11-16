// import { Divider } from "@material-ui/core";

import React, {useEffect} from "react";
import { Card, Button, Col, Row, Badge } from "react-bootstrap";
import "./style.scss";
import { Grid } from "../../Components/Grid";
import Filter from "../../Components/Filter";
// import EmailIcon from '@material-ui/icons/Email';
// import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
// import StarRateIcon from '@material-ui/icons/StarRate';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ReactStars from "react-rating-stars-component";
// import Rating from '@material-ui/Rating';
// import GoogleIcon from '@material-ui/icons//Google';
// import { FcGoogle } from "@react-icons/all-files/fa/FcGoogle";

const ListingPage = () => {
  useEffect (() => {
    document.title="Listing | allconnecto"
  })

  const data = [
    {
      id: 1,
      title: "Facility Management Comapny For Sale",
      subtitle:
        "For Sale:Hospitality & Facility Management Company With a Track",
      email: "E-mail",
      phone: "Phone",
      google: "Google",
      body: "Thirty Five Years Ago, We Started a Small Comapny in a modest office in Mumbai, With just 4 people as our staff, We offered Housekeeping and janitorial services to..",
      starrating: "7.7",
      location: "Mumbai",
      runratesales: "Run Rate Sales",
      inr: "INR 114 Crore",
      ebitda: "EBITDA Margin",
      percentage: "7%",
      footer: "Business For Sale",
      price: "107 CR",
      buttonname: "Contact Business",
    },
    {
      id: 2,
      title: "Facility Management Comapny For Sale",
      subtitle:
        "For Sale:Hospitality & Facility Management Company With a Track",
      email: "E-mail",
      phone: "Phone",
      google: "Google",
      body: "Thirty Five Years Ago, We Started a Small Comapny in a modest office in Mumbai, With just 4 people as our staff, We offered Housekeeping and janitorial services to..",
      runratesales: "Run Rate Sales",
      inr: "INR 114 Crore",

      location: "Mumbai",
      ebitda: "EBITDA Margin",
      percentage: "7%",
      footer: "Business For Sale",
      price: "107 CR",
      buttonname: "Contact Business",
    },
    {
      id: 3,
      title: "Facility Management Comapny For Sale",
      subtitle:
        "For Sale:Hospitality & Facility Management Company With a Track",
      email: "E-mail",
      phone: "Phone",
      google: "Google",
      body: "Thirty Five Years Ago, We Started a Small Comapny in a modest office in Mumbai, With just 4 people as our staff, We offered Housekeeping and janitorial services to..",
      runratesales: "Run Rate Sales",

      location: "Mumbai",
      inr: "INR 114 Crore",
      ebitda: "EBITDA Margin",
      percentage: "7%",
      footer: "Business For Sale",
      price: "107 CR",
      buttonname: "Contact Business",
    },
    {
      id: 4,
      title: "Facility Management Comapny For Sale",
      subtitle:
        "For Sale:Hospitality & Facility Management Company With a Track",
      email: "E-mail",
      phone: "Phone",
      google: "Google",
      body: "Thirty Five Years Ago, We Started a Small Comapny in a modest office in Mumbai, With just 4 people as our staff, We offered Housekeeping and janitorial services to..",
      runratesales: "Run Rate Sales",

      location: "Mumbai",
      inr: "INR 114 Crore",
      ebitda: "EBITDA Margin",
      percentage: "7%",
      footer: "Business For Sale",
      price: "107 CR",
      buttonname: "Contact Business",
    },
    {
      id: 5,
      title: "Facility Management Comapny For Sale",
      subtitle:
        "For Sale:Hospitality & Facility Management Company With a Track",
      email: "E-mail",
      phone: "Phone",
      google: "Google",
      body: "Thirty Five Years Ago, We Started a Small Comapny in a modest office in Mumbai, With just 4 people as our staff, We offered Housekeeping and janitorial services to..",
      runratesales: "Run Rate Sales",

      location: "Mumbai",
      inr: "INR 114 Crore",
      ebitda: "EBITDA Margin",
      percentage: "7%",
      footer: "Business For Sale",
      price: "107 CR",
      buttonname: "Contact Business",
    },
    {
      id: 6,
      title: "Facility Management Comapny For Sale",
      subtitle:
        "For Sale:Hospitality & Facility Management Company With a Track",
      email: "E-mail",
      phone: "Phone",
      google: "Google",

      location: "Mumbai",
      body: "Thirty Five Years Ago, We Started a Small Comapny in a modest office in Mumbai, With just 4 people as our staff, We offered Housekeeping and janitorial services to..",
      runratesales: "Run Rate Sales",
      inr: "INR 114 Crore",
      ebitda: "EBITDA Margin",
      percentage: "7%",
      footer: "Business For Sale",
      price: "107 CR",
      buttonname: "Contact Business",
    },
  ];
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ display: "flex", width: "20%" }}>
        <Filter />
      </div>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: "80%",
          flexWrap: "wrap",
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* <Row >
        <Col lg={3} > */}
        {data.map((user) => (
          <div style={{ display: "flex" }}>
            <Grid>
              <Grid.Cell span={25}>
                <Card
                  style={{ width: "294px", height: "368px", marginTop: "10%" }}
                >
                  <Card.Body>
                    <div style={{ display: "flex" }}>
                      <Badge className="bdg"> </Badge>{" "}
                      <h6
                        className="profilename "
                        style={{
                          display: "flex",
                          // opacity: "60%",
                          fontSize: "11px",
                          marginLeft: "5px",
                        }}
                      >
                        {/* <Badge className="bdg"> </Badge> */}

                        <br />
                        {user.title}
                      </h6>
                    </div>
                    <h5
                      style={{
                        display: "flex",
                        fontWeight: "20px",
                        fontSize: "15px",
                      }}
                    >
                      {user.subtitle}
                    </h5>
                    <hr />
                    <div className="list">
                      <img
                        style={{
                          display: "flex",
                          width: "15%",
                          height: "21px",
                        }}
                        src="https://www.technobezz.com/files/uploads/2020/05/gmail-4-1200x758-1.png"
                      />
                      <img
                        style={{
                          display: "flex",
                          width: "15%",
                          height: "21px",
                        }}
                        src="https://www.pngkey.com/png/detail/779-7794676_phone-phone-icon-green-png.png"
                      />
                      <img
                        style={{
                          display: "flex",
                          width: "15%",
                          height: "21px",
                        }}
                        src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                      />
                    </div>
                    <br />
                    <h6 style={{ display: "flex", fontSize: "13px" }}>
                      {user.body}
                    </h6>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={20}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <LocationOnIcon style={{ width: "20%" }} />
                        <b style={{ fontSize: "15px" }}>{user.location}</b>
                      </div>
                    </div>
                    <div className="run-rate">
                      <h5
                        style={{
                          fontWeight: "5px",
                          fontSize: "12px",
                          display: "flex",
                          marginTop: "1%",
                        }}
                      >
                        {user.runratesales}
                      </h5>
                      {user.inr}
                    </div>
                    <div className="style">
                      <h5
                        style={{
                          fontWeight: "5px",
                          fontSize: "12px",
                          display: "flex",
                          marginTop: "1%",
                        }}
                      >
                        {user.ebitda}
                      </h5>
                      {user.percentage}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "column",
                        marginTop: "2%",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          // display: "flex",
                          borderRight: "1px solid grey",
                          fontSize: "12px",
                          marginTop: "1%",
                          width: "45%",
                        }}
                      >
                        <div>
                          {user.footer}
                          <br />
                          <div style={{ display: "flex", fontSize: "18px" }}>
                            {user.price}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          // paddingRight: "15px",
                          width: "55%",
                          marginLeft: "5%",
                          marginTop: "1%",
                        }}
                      >
                        <Button size="sm" style={{}}>
                          {user.buttonname}
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Grid.Cell>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
