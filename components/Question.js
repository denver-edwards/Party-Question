import { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

export default function Question({ gameActive, setGameActive, category }) {
  const defaultQ = "How are you doing today? :)";

  const [questionBank, setQuestionBank] = useState([]);
  const [currentQuestion, setQuestion] = useState(defaultQ);
  const [boxQ, setBoxQ] = useState("Next Question");

  const blueColor = "#324067";
  const redColor = "#750D37";
  let bgColor = "";

  if (category == "general") {
    bgColor = blueColor;
  } else {
    bgColor = redColor;
  }

  useEffect(() => {
    async function GetList(category) {
      const API_GET_QUESTIONS =
        "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-jonbw/service/api_partyquestion/incoming_webhook/get_questions";
      let url = API_GET_QUESTIONS + "?arg=" + category;

      return await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setQuestionBank(data);
          return data;
        });
    }
    setQuestionBank(GetList(category));
  }, [category]);

  function NextQuestion() {
    var randInt = ~~(Math.random() * questionBank.length);

    console.log("currQ", currentQuestion);
    console.log("list", questionBank);

    setQuestion(questionBank[randInt]["question"]);
  }

  return (
    <>
      <div style={{ backgroundColor: bgColor, height: "100vh" }}>
        <div className="jumbotron-box">
          <a
            className="back-arrow-icon"
            onClick={() => {
              setGameActive(false);
            }}
          >
            <IoIosArrowBack size={50} />
          </a>
          <h2 className="question-text">{currentQuestion}</h2>
          <Button className="next-question-btn" onClick={NextQuestion}>
            {boxQ}
          </Button>
        </div>
      </div>
    </>
  );
}
