import React, { useRef, useState } from "react";
import axios from "axios";
import "./Dashboard/dashboard.scss";
import "../master.css";
import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/core/styles";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../apiConstants";
import { Link, withRouter } from "react-router-dom";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { getUser } from "../Utils/Common";
import { getToken, getCookie } from "../Utils/Common";

function Homepage() {
  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        {getCookie("BuildCommunication") && getToken() ? <Sidebar /> : null}

        <div className="projects-section">
          <section id="header">
            <div class="header-text">
              <h1>Want your Juniors to grasp vocal and acoustic skills ?</h1>
              <span class="square"></span>
              <p>
                WFJ (Website for Juniors) provides an immersive experience for
                kids to develop and enhance their vocal as well as acoustic
                skills. So, what are you waiting for?
              </p>
              <div class="text">
                <h3>Get started now!</h3>
              </div>
              <div class="line">
                <div class="line-1"></div>
                <br />
                <div class="line-2"></div>
                <br />
                <div class="line-3"></div>
              </div>
            </div>
          </section>
          <section id="about">
            <div class="about-left-call">
              <img src={require("../images/about_us.jpg").default} alt="" />
            </div>
            <div class="about-right-call">
              <div class="about-text">
                <h1>About Us</h1>
                <span class="square"></span>
                <p>
                  A child starts to speak properly and correlate different
                  sounds at 4-5 years. So, that is right time for them to start
                  developing and improving these skills. We have prepared this
                  platform for skill development of children where they can
                  learn with fun on their own. Our platform provides various
                  modules where children can learn and practice these skills.
                </p>
                <br />
                <div class="line">
                  <div class="line-1"></div>
                  <br />
                  <div class="line-2"></div>
                  <br />
                  <div class="line-3"></div>
                </div>

                <h2>“When you know better you do better.” </h2>
                <h3>– Maya Angelou</h3>
              </div>
            </div>
          </section>

          <section id="features">
            <h1>Features</h1>
            <div class="feature-row">
              <div class="feature-col">
                <img src={require("../images/pic-1.png").default} />
                <h4>Learn Anywhere</h4>
                <p>
                  Learn at your comfort from anywhere, anytime.
                  <br />
                  <br />
                </p>
              </div>
              <div class="feature-col">
                <img src={require("../images/Modules.png").default} />
                <h4>Various Modules</h4>
                <p>
                  Designed modules for kids so that they can systematically
                  develop and enhance their skills.
                </p>
              </div>
              <div class="feature-col">
                <img src={require("../images/pic-3.png").default} />
                <h4>Unlimited Access</h4>
                <p>
                  No limitation for access materials. Learn what you want, when
                  you want.
                </p>
              </div>
            </div>
          </section>

          <section id="courses">
            <div class=" course-row">
              <div class="course-left-col">
                <div class="course-text">
                  <h1>Explore Modules</h1>
                  <span class="square"></span>
                  <p>
                    Learn to correlate different sounds of complete English
                    Alphabet, differentiate between similar kind of sounds and
                    identify different words, sort the word on base of its sound
                    and more.{" "}
                  </p>
                  {/* <button class="common-btn"><a href="Modules.html">Browse Modules</a></button> */}
                  <br />
                  <div class="line">
                    <div class="line-1"></div>
                    <br />
                    <div class="line-2"></div>
                    <br />
                    <div class="line-3"></div>
                  </div>
                </div>
              </div>
              <div class="course-right-col">
                <img src={require("../images/Browse_modules.jpg").default} />
              </div>
            </div>
          </section>
          <section id="creators">
            <h1>Creators</h1>
          </section>
          <div className="project-boxes jsGridView d-flex justify-content-center">
            <div className="project-box-wrapper d-flex justify-content-center">
              <div
                className="project-box"
                style={{
                  backgroundColor: colors[0],
                  borderRadius: "35px",
                  paddingTop: "20px",
                  minWidth: "65%",
                }}
              >
                <div className="project-box-content-header">
                  <img
                    src={require("../images/Dev.jpg").default}
                    style={{
                      maxWidth: "200px",
                      borderRadius: "35px",
                      marginBottom: "8px",
                    }}
                  />
                  <p className="box-content-header">Dev Patel</p>
                  <p className="box-content-subheader">IT-CSPIT</p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper d-flex justify-content-center">
              <div
                className="project-box"
                style={{
                  backgroundColor: colors[1],
                  borderRadius: "35px",
                  paddingTop: "20px",
                  minWidth: "65%",
                }}
              >
                <div className="project-box-content-header">
                  <img
                    src={require("../images/poojan.jpg").default}
                    style={{
                      maxWidth: "200px",
                      borderRadius: "35px",
                      marginBottom: "8px",
                    }}
                  />
                  <p className="box-content-header">Poojan Shah</p>
                  <p className="box-content-subheader">IT-CSPIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Homepage);
