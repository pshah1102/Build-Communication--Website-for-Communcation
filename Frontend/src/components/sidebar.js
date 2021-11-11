import React, { useState } from "react";
import axios from "axios";
import "../pages/Dashboard/dashboard.scss";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../apiConstants";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AltRouteRoundedIcon from "@mui/icons-material/AltRouteRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link, withRouter } from "react-router-dom";
import { getToken, removeUserSession } from "../Utils/Common";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Tooltip from "@mui/material/Tooltip";

function Sidebar(props) {
  const logout = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/user/logout/${getToken()}`)
      .then((res) => {
        console.log("Logout");
        console.log(res);
        removeUserSession();
        alert("Successfully Logged out");
        props.history.push("/login");
      })
      .catch((err) => {
        if (err.response) alert(err.response);
        else alert("Please try again");
      });
  };

  return (
    <div className="app-sidebar">
      <Link to="/dashboard" className="app-sidebar-link">
        <Tooltip title="Dashboard" placement="right">
          <HomeRoundedIcon sx={{ fontSize: 30 }} />
        </Tooltip>
      </Link>
      <Link to="/guidedpath" className="app-sidebar-link">
        <Tooltip title="Guided Learning" placement="right">
          <AltRouteRoundedIcon sx={{ fontSize: 30 }} />
        </Tooltip>
      </Link>
      <Link to="/profile" className="app-sidebar-link">
        <Tooltip title="Profile" placement="right">
          <AccountCircleRoundedIcon sx={{ fontSize: 30 }} />
        </Tooltip>
      </Link>
      <Tooltip title="Logout" placement="right">
        <LogoutRoundedIcon
          className="app-sidebar-link"
          sx={{ fontSize: 28 }}
          style={{ cursor: "pointer", marginLeft: "2px" }}
          onClick={logout}
        />
      </Tooltip>
    </div>
  );
}
export default withRouter(Sidebar);
