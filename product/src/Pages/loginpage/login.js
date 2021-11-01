// // LoginPage
// import React, { useEffect, useState } from "react";
// import { Input } from "../../Components/Input";
// import { Button } from "../../Components/Button";
// import { Grid } from "../../Components/Grid";
// import PropTypes from "prop-types";
// import isEqual from "react-fast-compare";
// import { Form } from "reactstrap";
// import firebase from "../../firebase";
// import { notification } from "antd";
// import cookie from "react-cookies";
// import "./style.scss";
// import { useHistory } from "react-router";
// import { Box, Paper } from "@material-ui/core";

// // Main Component
// const LoginPage = () => {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [error, setError] = useState({});
//   const history = useHistory();

//   useEffect(() => {
//     localStorage.clear();
//     cookie.remove("business");
//     console.log("on login session cleared");
//   }, []);

//   const onChangePassword = (value) => {
//     setpassword(value);
//   };

//   const onChangeEmail = (value) => {
//     setemail(value);
//   };

//   const onSubmit = (event) => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((user) => {
//         localStorage.setItem("organizatation", "business");
//         history.push("/landing-page");
//         cookie.save("organizatation", "business");
//       })
//       .catch((error) => {
//         console.log("err", error);
//         setError(error);
//         notification.warning({
//           message: "Login Error",
//           description: error.message,
//         });
//       });
//   };

//   return (
//     <div className="login">
//       <Grid break="lg">
//         <Grid.Cell span={50}>
//           <div className="d-flex align-items-center justify-content-center">
//             <Box component={Paper} p={2}>

//             </Box>
//           </div>
//         </Grid.Cell>
//         <Grid.Cell span={50}>
//           <div className="mt-5 login-form">
//             <div className="form-login">
//               <div className="mt- login-txt" style={{ marginTop: "20px" }}>
//                 Login
//               </div>
//               <Form>
//                 <div className="mt-5">
//                   <Input
//                     placeholder="Enter Email"
//                     size="small"
//                     onChange={(val, name, e) => {
//                       onChangeEmail(val);
//                     }}
//                     name="email"
//                     value={email}
//                     autoComplete="off"
//                     // onKeyPress={this.handleKeyPress}
//                     className="inp-bot"
//                   />
//                 </div>
//                 <div className="mt-5">
//                   <Input
//                     placeholder="Enter Password"
//                     size="small"
//                     onChange={(val, name, e) => {
//                       onChangePassword(val);
//                     }}
//                     type="password"
//                     name="password"
//                     value={password}
//                   />
//                 </div>
//                 <div className="d-flex mt-2">
//                   <span className="rem-for">
//                     <a
//                       href="/forgot-password"
//                       style={{ color: "#4A42ED", cursor: "pointer" }}
//                     >
//                       Forgot Password
//                     </a>
//                   </span>
//                 </div>
//                 <div className="mt-5 d-flex">
//                   <Button
//                     variant="primary"
//                     label="Login"
//                     onClick={() => onSubmit()}
//                   />
//                 </div>
//               </Form>
//             </div>
//           </div>
//         </Grid.Cell>
//       </Grid>
//     </div>
//   );
// };

// export default LoginPage;
