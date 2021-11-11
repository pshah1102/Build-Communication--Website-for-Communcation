import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import "./RegistrationForm.css";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../apiConstants";
import { withRouter } from "react-router-dom";
import { setSpeechRate, setUserSession } from "../../Utils/Common";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fname: "",
    lname: "",
    dob: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const sendDetailsToServer = () => {
    if (
      state.email.length &&
      state.password.length &&
      state.lname.length &&
      state.fname.length &&
      state.dob.length
    ) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
        name: state.fname + state.lname,
        dob: state.dob,
        speech_rate: "0.5",
      };
      console.log(payload);
      axios
        .post(API_BASE_URL + "/user/signup", payload)
        .then(function (response) {
          if (response.status === 201) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            console.log(response.data);
            setUserSession(response.data.token, response.data.user);
            setSpeechRate(response.data.user.speech_rate);
            redirectToHome();
            props.showError(null);
            console.log(response.data);
          } else {
            props.showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error.response);
          if (error.response.data) {
            props.showError(
              error.response.data.message
                ? error.response.data.message
                : "Please enter unique email id"
            );
          } else {
            props.showError("Some error ocurred");
          }
          // if (error.response.data && error.response.data.errors.email) {
          //   props.showError(error.response.data.errors.email.message);
          // } else if (error.response.data.errors.password) {
          //   props.showError(error.response.data.errors.password.message);
          // }
        });
    } else {
      props.showError("Please enter all valid details");
    }
  };
  const redirectToHome = () => {
    console.log("In the function");
    props.history.push("/dashboard");
  };
  const redirectToLogin = () => {
    props.history.push("/login");
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };
  return (
    <div className="card col-10 col-lg-6 col-md-6 login-card mt-4 hv-center">
      <h2 className="loginText" style={{ marginBottom: "5%" }}>
        Register
      </h2>
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputfname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            aria-describedby="fname"
            placeholder="Enter first name"
            value={state.fname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputlname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            aria-describedby="lname"
            placeholder="Enter last name"
            value={state.lname}
            onChange={handleChange}
          />
          <div className="form-group text-left">
            <label htmlFor="exampleInputdob">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              aria-describedby="dob"
              value={state.dob}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="mt-3">
        <span>Already have an account? </span>
        <span className="loginText" onClick={() => redirectToLogin()}>
          Login here
        </span>
      </div>
    </div>
  );
}

export default withRouter(RegistrationForm);
