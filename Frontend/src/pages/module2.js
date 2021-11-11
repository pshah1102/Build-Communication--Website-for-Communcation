import React, { useRef, useState } from "react";
import axios from "axios";
import "./Dashboard/dashboard.scss";
import Button from "@mui/material/Button";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../apiConstants";
import { Link, withRouter } from "react-router-dom";
import { getSpeechRate } from "../Utils/Common";

function Module2() {
  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];
  const synthRef = useRef(window.speechSynthesis);
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [scoreMap, setscoreMap] = useState(new Map());
  const fetchData = React.useCallback(() => {
    axios
      .get("http://localhost:5000/module2/get")
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occurred. Please refresh the page.");
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const captureAnswer = (e) => {
    console.log(e.target.name + " " + e.target.value);
    scoreMap.set(e.target.name, e.target.value);
  };

  function speak(text) {
    if (text !== "") {
      // Get speak text
      const speakText = new SpeechSynthesisUtterance(text);

      // Speak error
      // speakText.onerror = (e) => {
      //   console.error("Something went wrong");
      // };

      // Selected voice
      // const selectedVoice =
      //   voiceSelect.selectedOptions[0].getAttribute("data-name");

      // Loop through voices
      // voices.forEach((voice) => {
      //   if (voice.name === selectedVoice) {
      //     speakText.voice = voice;
      //   }
      // });

      // Set pitch and rate
      const speech_rate = getSpeechRate();
      if (speech_rate) speakText.rate = speech_rate;
      else speakText.rate = "0.5";
      speakText.pitch = 1.4;
      // Speak
      synthRef.current.speak(speakText);
    }
  }

  const submitScore = (e) => {
    e.preventDefault();
    var currscore = 0;
    for (var i = 0; i < questions.length; i++) {
      if (scoreMap.has(questions[i]._id)) {
        if (
          scoreMap.get(questions[i]._id) ===
          questions[i].options[questions[i].answer]
        )
          currscore++;
      }
    }

    const currDate = new Date();
    axios.defaults.withCredentials = true;
    var data = {
      score: currscore,
      date: currDate,
    };
    axios
      .post(API_BASE_URL + "/module2/score", data)
      .then(function (response) {
        console.log(response.data);
        console.log("Score submitted");
        console.log(currscore);
        setScore(currscore);
        setSubmitted(true);
        // else{
        //     props.showError("Username does not exists");
        // }
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
            <p>Module Name</p>
            <p className="time">
              {questions ? questions.length : 10} Questions
            </p>
          </div>

          <div className="project-boxes jsListView">
            {questions
              ? questions.map((question, index) => (
                  <div className="project-box-wrapper" key={question._id}>
                    <div
                      style={{
                        backgroundColor: colors[index % colors.length],
                        borderRadius: "35px",
                        padding: "20px",
                      }}
                    >
                      <div class="row">
                        <div class="col-sm-8 col-md-6 col-12">
                          <div style={{ fontSize: "120%" }}>
                            {index + 1}. {question.question}
                          </div>

                          <Button
                            variant="contained"
                            color="primary"
                            endIcon={<GraphicEqRoundedIcon />}
                            style={{
                              maxWidth: "100px",
                              alignSelf: "center",
                              marginTop: "20px",
                              marginBottom: "20px",
                            }}
                            onClick={() =>
                              speak(question.options[question.answer])
                            }
                          >
                            Listen
                          </Button>
                        </div>
                        <img
                          src={`http://localhost:5000${question.image}`}
                          alt={`question ${index}`}
                          style={{ maxWidth: "300px", maxHeight: "500px" }}
                          class="col-sm-4 col-md-6 col-12"
                        />
                      </div>
                      <br />
                      <div
                        style={{ fontSize: "110%" }}
                        onChange={captureAnswer}
                      >
                        {question.options
                          ? question.options.map((option, index) => (
                              <div style={{ margin: "10px" }} key={index}>
                                <input
                                  type="radio"
                                  name={question._id}
                                  value={option}
                                />
                                <span
                                  // htmlFor="question11"
                                  style={{ marginLeft: "8px" }}
                                >
                                  {option}
                                  {index === question.answer && submitted ? (
                                    <img
                                      src={
                                        require("../images/greentick.png")
                                          .default
                                      }
                                      alt="correct ans"
                                      style={{
                                        maxWidth: "17px",
                                        marginLeft: "12px",
                                        marginBottom: "8px",
                                      }}
                                    />
                                  ) : null}
                                </span>
                              </div>
                            ))
                          : "No options available"}
                      </div>
                    </div>
                  </div>
                ))
              : null}
            {/* <div className="project-box-wrapper">
              <div
                style={{
                  backgroundColor: "#fee4cb",
                  borderRadius: "35px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "120%" }}>
                  Temp Identify the object from the sound.
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<GraphicEqRoundedIcon />}
                  style={{
                    maxWidth: "100px",
                    alignSelf: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Listen
                </Button>
                <br />
                <div style={{ fontSize: "110%" }}>
                  <div style={{ margin: "10px" }}>
                    <input
                      type="radio"
                      name="question1"
                      value="option1"
                      id="question11"
                    />
                    <label htmlFor="question11" style={{ marginLeft: "8px" }}>
                      Option1
                    </label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input
                      type="radio"
                      name="question1"
                      value="option2"
                      id="question12"
                    />
                    <label htmlFor="question12" style={{ marginLeft: "8px" }}>
                      Option2
                    </label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input
                      type="radio"
                      name="question1"
                      value="option3"
                      id="question13"
                    />
                    <label htmlFor="question13" style={{ marginLeft: "8px" }}>
                      Option3
                    </label>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <input
                      type="radio"
                      name="question1"
                      value="option4"
                      id="question14"
                    />
                    <label htmlFor="question14" style={{ marginLeft: "8px" }}>
                      Option4
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div style={{ margin: "15px 5px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "35px" }}
              onClick={submitScore}
            >
              Submit
            </Button>

            <span
              style={{
                paddingLeft: "5%",
                fontSize: "110%",
                fontWeight: "bold",
              }}
            >
              {score}/{questions ? questions.length : 10}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module2;
