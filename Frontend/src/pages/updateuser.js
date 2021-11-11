import React, { useRef, useState } from "react";
import axios from "axios";
import "./Dashboard/dashboard.scss";
import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/core/styles";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../apiConstants";
import { Link, withRouter } from "react-router-dom";
import { getSpeechRate, setUserSession } from "../Utils/Common";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { getUser } from "../Utils/Common";

function convertDate(date) {
  var finaldate = new Date(date);
  console.log(finaldate.getDate() + " " + (finaldate.getMonth() + 1));
  console.log(finaldate.toISOString());
  return finaldate.toISOString();
}

function convertISO(isodate) {
  let date = new Date(isodate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  console.log(year + "-" + month + "-" + dt);
  return year + "-" + month + "-" + dt;
}

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

function UpdateUser() {
  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];
  const synthRef = useRef(window.speechSynthesis);
  const [data, setdata] = useState({
    username: "",
    email: "",
    dob: "",
    speech_rate: "",
  });

  const fetchData = React.useCallback(() => {
    // axios
    //   .get(`http://localhost:5000/user?id=${getUser()}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log(parseFloat(res.data.speech_rate));
    let userData = getUser();
    setdata({
      id: userData._id,
      username: userData.name,
      email: userData.email,
      dob: convertISO(userData.dob),
      speech_rate: parseFloat(userData.speech_rate),
    });
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    // console.log(data);
    var userdata = {
      id: data.id,
      name: data.username,
      dob: convertDate(data.dob),
      speech_rate: data.speech_rate.toString(),
    };
    axios
      .post(API_BASE_URL + "/user/update", userdata)
      .then(function (res) {
        console.log(res.data);
        setdata({
          username: res.data.name,
          email: res.data.email,
          dob: convertISO(res.data.dob),
          speech_rate: parseFloat(res.data.speech_rate),
        });
        localStorage.setItem("userData", JSON.stringify(res.data));
        alert("Data Updated");
      })
      .catch(function (error) {
        if (error.response && error.response.data) alert(error.response.data);
        else alert("Please try again");
      });
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Sidebar />
        <div className="projects-section">
          <div className="projects-section-header">
            <p>Update Details</p>
          </div>

          <div className="project-boxes jsListView">
            <div className="project-box-wrapper">
              <div
                style={{
                  backgroundColor: "#fee4cb",
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "120%" }}>
                  <label for="username">User name:</label>
                  <div className="search-wrapper" style={{ marginTop: "5px" }}>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="search-input"
                      onChange={handleInputChange}
                      value={data.username}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                style={{
                  backgroundColor: "#e9e7fd",
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "120%" }}>
                  Email:
                  <div className="search-wrapper" style={{ marginTop: "5px" }}>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="search-input"
                      disabled
                      value={data.email}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                style={{
                  backgroundColor: "#ffd3e2",
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "120%" }}>
                  Date of Birth:
                  <div className="search-wrapper" style={{ marginTop: "5px" }}>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      className="search-input"
                      onChange={handleInputChange}
                      value={data.dob}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                style={{
                  backgroundColor: "#c8f7dc",
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "120%" }}>
                  Speech Rate:
                  <Box sx={{ m: 3 }} />
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={data.speech_rate}
                    name="speech_rate"
                    onChange={handleInputChange}
                    step={0.1}
                    min={0}
                    max={2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "15px 5px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "35px" }}
              onClick={submit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
