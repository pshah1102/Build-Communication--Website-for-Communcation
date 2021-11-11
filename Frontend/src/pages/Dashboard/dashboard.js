import React, { useState } from "react";
import axios from "axios";
import "./dashboard.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../apiConstants";
import { Link, withRouter } from "react-router-dom";
import { getUser, removeUserSession } from "../../Utils/Common";

function Dashboard(props) {
  const data = getUser();
  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var currMonth = month[d.getMonth()];
  var currDate = d.getDate();
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Sidebar />

        <div className="projects-section" style={{ paddingBottom: "15px" }}>
          <div className="projects-section-header">
            <p>Modules</p>
            <p className="time">
              {currMonth}, {currDate}
            </p>
          </div>
          <div className="project-boxes jsGridView">
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#fee4cb" }}
              >
                <div className="project-box-header">
                  {/* <span>December 10, 2020</span>
                  <div className="more-wrapper">
                    <button className="project-btn-more">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-more-vertical"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </button>
                  </div> */}
                </div>

                <Link
                  to="/module1"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">Module 1</p>
                    <p className="box-content-subheader">Speech Synthesis</p>
                  </div>
                </Link>

                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.module1 ? data.module1.score * 10 : 0
                        }%`,
                        backgroundColor: "#ff942e",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.module1 ? data.module1.score * 10 : 0}%
                  </p>
                </div>
                {/* <div className="project-box-footer">
                  <div className="participants">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      alt="participant"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                      alt="participant"
                    />
                    <button
                      className="add-participant"
                      style={{ color: "#ff942e" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <div className="days-left" style={{ color: "#ff942e" }}>
                    2 Days Left
                  </div>
                </div> */}
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#e9e7fd" }}
              >
                <div className="project-box-header">
                  {/* <span>December 10, 2020</span>
                  <div className="more-wrapper">
                    <button className="project-btn-more">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-more-vertical"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </button>
                  </div> */}
                </div>
                <Link
                  to="/module2"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">Module 2</p>
                    <p className="box-content-subheader">Speech Synthesis</p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.module2 ? data.module2.score * 10 : 0
                        }%`,
                        backgroundColor: "#4f3ff0",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.module2 ? data.module2.score * 10 : 0}%
                  </p>
                </div>
                {/* <div className="project-box-footer">
                  <div className="participants">
                    <img
                      src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                      alt="participant"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                      alt="participant"
                    />
                    <button
                      className="add-participant"
                      style={{ color: "#4f3ff0" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <div className="days-left" style={{ color: "#4f3ff0" }}>
                    2 Days Left
                  </div>
                </div> */}
              </div>
            </div>
            <div className="project-box-wrapper">
              <div className="project-box">
                <div className="project-box-header"></div>
                <Link
                  to="/module3"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">Module 3</p>
                    <p className="box-content-subheader">Speech Recognition</p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.module3 ? data.module3.score * 10 : 0
                        }%`,
                        backgroundColor: "#096c86",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.module3 ? data.module3.score * 10 : 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#c8f7dc" }}
              >
                <div className="project-box-header"></div>
                <Link
                  to="/module4"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <div className="project-box-content-header">
                    <p className="box-content-header">Module 4</p>
                    <p className="box-content-subheader">
                      Extended Speech Synthesis
                    </p>
                  </div>
                </Link>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{
                        width: `${
                          data && data.module4 ? data.module4.score * 10 : 0
                        }%`,
                        backgroundColor: "#34c471",
                      }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">
                    {data && data.module4 ? data.module4.score * 10 : 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="messages-section">
          <button className="messages-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
          <div className="projects-section-header">
            <p>Client Messages</p>
          </div>
          <div className="messages">
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">Stephanie</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-1" />
                    <label for="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  I got your first assignment. It was quite good. 🥳 We can
                  continue with the next assignment.
                </p>
                <p className="message-line time">Dec, 12</p>
              </div>
            </div>
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">Mark</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-2" />
                    <label for="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  Hey, can tell me about progress of project? I'm waiting for
                  your response.
                </p>
                <p className="message-line time">Dec, 12</p>
              </div>
            </div>
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">David</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-3" />
                    <label for="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  Awesome! 🤩 I like it. We can schedule a meeting for the next
                  one.
                </p>
                <p className="message-line time">Dec, 12</p>
              </div>
            </div>
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">Jessica</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-4" />
                    <label for="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  I am really impressed! Can't wait to see the final result.
                </p>
                <p className="message-line time">Dec, 11</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="app-content">
        <div className="app-sidebar" style={{ minWidth: "67px" }}></div>

        <div className="projects-section" style={{ paddingBottom: "9px" }}>
          <div className="projects-section-header">
            <p>All Modules</p>
          </div>

          <div className="project-boxes jsGridView">
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#fee4cb" }}
              >
                <div className="project-box-header"></div>
                <div className="project-box-content-header">
                  <p className="box-content-header">Web Designing</p>
                  <p className="box-content-subheader">Prototyping</p>
                </div>

                {/* <div className="project-box-footer">
                  <div className="participants">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      alt="participant"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                      alt="participant"
                    />
                    <button
                      className="add-participant"
                      style={{ color: "#ff942e" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <div className="days-left" style={{ color: "#ff942e" }}>
                    2 Days Left
                  </div>
                </div> */}
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#c8f7dc" }}
              >
                <div className="project-box-header">
                  {/* <span>December 10, 2020</span>
                  <div className="more-wrapper">
                    <button className="project-btn-more">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-more-vertical"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </button>
                  </div> */}
                </div>
                <div className="project-box-content-header">
                  <p className="box-content-header">Data Analysis</p>
                  <p className="box-content-subheader">Prototyping</p>
                </div>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{ width: "60%", backgroundColor: "#34c471" }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">60%</p>
                </div>
                {/* <div className="project-box-footer">
                  <div className="participants">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      alt="participant"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                      alt="participant"
                    />
                    <button
                      className="add-participant"
                      style={{ color: "#34c471" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <div className="days-left" style={{ color: "#34c471" }}>
                    2 Days Left
                  </div>
                </div> */}
              </div>
            </div>
            <div className="project-box-wrapper">
              <div
                className="project-box"
                style={{ backgroundColor: "#d5deff" }}
              >
                <div
                  className="project-box-header"
                  style={{ minHeight: "10px" }}
                >
                  <span>December 10, 2020</span>
                </div>
                <div className="project-box-content-header">
                  <p className="box-content-header">Web Designing</p>
                  <p className="box-content-subheader">Prototyping</p>
                </div>
                <div className="box-progress-wrapper">
                  <p className="box-progress-header">Progress</p>
                  <div className="box-progress-bar">
                    <span
                      className="box-progress"
                      style={{ width: "40%", backgroundColor: "#4067f9" }}
                    ></span>
                  </div>
                  <p className="box-progress-percentage">40%</p>
                </div>
                <div className="project-box-footer">
                  <div className="participants">
                    <img
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      alt="participant"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                      alt="participant"
                    />
                    <button
                      className="add-participant"
                      style={{ color: "#4067f9" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <div className="days-left" style={{ color: "#4067f9" }}>
                    2 Days Left
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="messages-section">
          <button className="messages-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
          <div className="projects-section-header">
            <p>Client Messages</p>
          </div>
          <div className="messages">
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">Stephanie</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-1" />
                    <label for="star-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  I got your first assignment. It was quite good. 🥳 We can
                  continue with the next assignment.
                </p>
                <p className="message-line time">Dec, 12</p>
              </div>
            </div>
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">Mark</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-2" />
                    <label for="star-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  Hey, can tell me about progress of project? I'm waiting for
                  your response.
                </p>
                <p className="message-line time">Dec, 12</p>
              </div>
            </div>
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">David</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-3" />
                    <label for="star-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  Awesome! 🤩 I like it. We can schedule a meeting for the next
                  one.
                </p>
                <p className="message-line time">Dec, 12</p>
              </div>
            </div>
            <div className="message-box">
              <img
                src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="profile image"
              />
              <div className="message-content">
                <div className="message-header">
                  <div className="name">Jessica</div>
                  <div className="star-checkbox">
                    <input type="checkbox" id="star-4" />
                    <label for="star-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>
                <p className="message-line">
                  I am really impressed! Can't wait to see the final result.
                </p>
                <p className="message-line time">Dec, 11</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default withRouter(Dashboard);
