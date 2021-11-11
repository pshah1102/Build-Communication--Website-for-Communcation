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
import Slider, { SliderThumb } from "@mui/material/Slider";
import { getUser } from "../Utils/Common";
import ReactPlayer from "react-player";

function Guidedpath() {
  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];

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
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[0],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                {/* <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8JmCrl4FHj8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                /> */}
                <ReactPlayer
                  controls="true"
                  pip="true"
                  stopOnUnmount="false"
                  url="https://www.youtube.com/embed/8JmCrl4FHj8"
                />
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: colors[1],
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <div className="project-box-header"></div>
                <div className="project-box-content-header">
                  <p className="box-content-header">Web Designing</p>
                  <p className="box-content-subheader">Prototyping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Guidedpath);
