import React, { useRef, useState } from "react";
import axios from "axios";
import "./Dashboard/dashboard.scss";
import Button from "@mui/material/Button";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../apiConstants";
import { Link, withRouter } from "react-router-dom";
var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;

var grammar = "#JSGF V1.0;";

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = "en-IN";
recognition.interimResults = false;

function Module3() {
  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];

  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [listening, setListening] = useState(false);
  const [scoreMap, setscoreMap] = useState(new Map());
  const fetchData = React.useCallback(() => {
    axios
      .get("http://localhost:5000/module3/get")
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

  const speak = (id) => {
    console.log(id);
    recognition.stop();
    recognition.start();
    setListening(true);
    recognition.onresult = (event) => {
      var last = event.results.length - 1;
      var final = event.results[last][0].transcript;
      console.log(final);
      for (var i = 0; i < questions.length; i++) {
        if (questions[i]._id === id) {
          if (final.toLowerCase() === questions[i].answer.toLowerCase())
            scoreMap.set(id, true);
          else scoreMap.set(id, false);

          setscoreMap(scoreMap);
        }
      }
    };
  };

  recognition.onspeechend = () => {
    recognition.stop();
    setListening(false);
  };

  recognition.onerror = (event) => {
    console.log("Error occurred in recognition: " + event.error);
    setListening(false);
  };

  const submitScore = (e) => {
    e.preventDefault();
    var currscore = 0;
    console.log(scoreMap);
    for (var i = 0; i < questions.length; i++) {
      if (scoreMap.has(questions[i]._id)) {
        if (scoreMap.get(questions[i]._id)) currscore++;
      }
    }
    const currDate = new Date();
    axios.defaults.withCredentials = true;
    var data = {
      score: currscore,
      date: currDate,
    };
    axios
      .post(API_BASE_URL + "/module3/score", data)
      .then(function (response) {
        console.log(response.data);
        console.log("Score submitted");
        console.log(currscore);
        setScore(currscore);
        setSubmitted(true);
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
                            onClick={() => speak(question._id)}
                            disabled={listening ? true : false}
                          >
                            Speak
                          </Button>
                          {submitted ? (
                            scoreMap.has(question._id) ? (
                              scoreMap.get(question._id) ? (
                                <img
                                  src={
                                    require("../images/greentick.png").default
                                  }
                                  alt="correct ans"
                                  style={{
                                    maxWidth: "22px",
                                    marginTop: "4px",
                                    marginLeft: "12px",
                                    marginBottom: "8px",
                                  }}
                                />
                              ) : (
                                <img
                                  src={
                                    require("../images/red-cross.png").default
                                  }
                                  alt="correct ans"
                                  style={{
                                    maxWidth: "22px",
                                    marginTop: "6px",
                                    marginLeft: "12px",
                                    marginBottom: "8px",
                                  }}
                                />
                              )
                            ) : null
                          ) : null}
                        </div>
                        <img
                          src={`http://localhost:5000${question.image}`}
                          alt={`question ${index}`}
                          style={{ maxWidth: "300px", maxHeight: "500px" }}
                          class="col-sm-4 col-md-6 col-12"
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                ))
              : null}
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

export default Module3;
