import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../apiConstants";
import { withRouter } from "react-router-dom";
import { setSpeechRate, setUserSession } from "../../Utils/Common";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios.defaults.withCredentials = true;
    axios
      .post(API_BASE_URL + "/user/login", payload)
      .then(function (response) {
        if (response.status === 201) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          console.log(response.data);
          setUserSession(response.data.token, response.data.user);
          setSpeechRate(response.data.user.speech_rate);
          redirectToHome();
          props.showError(null);
          console.log("Syccessful login");
        }
        // else{
        //     props.showError("Username does not exists");
        // }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          props.showError(error.response.data);
        } else {
          props.showError("Network Error");
        }
      });
  };
  const redirectToHome = () => {
    props.history.push("/dashboard");
  };
  const redirectToRegister = () => {
    props.history.push("/register");
  };
  return (
    <div className="card col-10 col-lg-4 col-md-6 login-card mt-5 hv-center">
      <h2 className="loginText" style={{ marginBottom: "7%" }}>
        Login
      </h2>
      <form>
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
        <div className="form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Submit
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
        <span>Dont have an account? </span>
        <span className="loginText" onClick={() => redirectToRegister()}>
          Register
        </span>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
