import React, { useState } from "react";
import axios from "axios";
import "../pages/Dashboard/dashboard.scss";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../apiConstants";
import { getUser } from "../Utils/Common";
import { Link, withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import { isSetToken, getCookie } from "../Utils/Common";
function Header() {
  // const [data, setData] = useState();
  const data = getUser();
  // const fetchData = React.useCallback(() => {
  //   axios
  //     .get(`http://localhost:5000/user?id=${getUser()}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // }, []);
  // React.useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <>
      <div className="app-header">
        <div className="app-header-left">
          <span class="app-icon">
            <img
              src={require("../images/logo192.png").default}
              style={{ maxWidth: "100px", minWidth: "7.5%" }}
            />
          </span>

          <Link to="/" className="app-name">
            Bulid Communication
          </Link>
        </div>
        <div className="app-header-right">
          {getCookie("BuildCommunication") && isSetToken() ? (
            <Link to="/profile" className="profile-btn">
              <span>{data ? data.name : null}</span>
            </Link>
          ) : (
            <div
              className="container row"
              style={{ margin: "0px", padding: "0px" }}
            >
              <Link
                to="/login"
                className="column"
                style={{ marginBottom: "5px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: "35px" }}
                >
                  Login
                </Button>{" "}
              </Link>
              <Link to="/register" className="column">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: "35px" }}
                >
                  Register
                </Button>{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
      {navigator.onLine ? null : (
        <div
          class="alert alert-warning"
          role="alert"
          style={{ textAlign: "center" }}
        >
          You are offline
        </div>
      )}
    </>
  );
}

export default Header;
