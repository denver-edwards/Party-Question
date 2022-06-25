import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Button from "./Button.js";

export default function Question({ gameActive, setGameActive, category }) {
  const defaultQ = "How are you doing today? :)";

  const [questionBank, setQuestionBank] = useState([]);
  const [currentQuestion, setQuestion] = useState(defaultQ);
  const [boxQ, setBoxQ] = useState("Next Question");

  useEffect(() => {
    function NQ() {
      var randInt = ~~(Math.random() * questionBank.length);

      console.log("currQ", currentQuestion);
      console.log("list", questionBank);

      setQuestion(questionBank[randInt]["question"]);
    }

    document.onkeyup = function (event) {
      if (event.which == 32 || event.keyCode == 32) {
        NQ();
      } else if (event.which == 27 || event.keyCode == 27) {
        setGameActive(false);
      }
    };

    const API_GET_QUESTIONS =
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-jonbw/service/api_partyquestion/incoming_webhook/get_questions";
    let url = API_GET_QUESTIONS + "?arg=" + category;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestionBank(data);
        return data;
      });
  }, [category, currentQuestion, questionBank]);

  function NextQuestion() {
    var randInt = ~~(Math.random() * questionBank.length);

    console.log("currQ", currentQuestion);
    console.log("list", questionBank);

    setQuestion(questionBank[randInt]["question"]);
  }

  return (
    <>
      <div
        className={
          "h-screen flex items-center " +
          (category == "adult" ? "bg-adult" : "bg-general")
        }
      >
        <div className="jumbotron-box mx-auto">
          <a
            className="back-arrow-icon"
            onClick={() => {
              setGameActive(false);
            }}
          >
            <IoIosArrowBack
              size={50}
              className={
                "opacity-50 ml-12 mt-4" +
                (category == "adult" ? " text-adult" : " text-general")
              }
            />
          </a>

          <h2 className="question-text">{currentQuestion}</h2>

          <button className="next-question-btn" onClick={() => NextQuestion()}>
            {boxQ}
          </button>
        </div>
      </div>
    </>
  );
}
