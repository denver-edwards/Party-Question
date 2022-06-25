import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Button from "./Button.js";

export default function Setup({ gameActive, setGameActive, setCategory }) {
  const [selected, setSelected] = useState("general");

  function HandleClick(category) {
    setSelected(category);
  }

  function StartGame() {
    setCategory(selected);
    setGameActive(true);
  }

  return (
    <>
      <div
        className={
          "h-screen flex items-center" +
          (selected == "general"
            ? " bg-general transition ease-in-out delay-100"
            : " bg-adult transition ease-in-out delay-100")
        }
      >
        <div className="jumbotron-box mx-auto">
          <h1>Pick a category</h1>
          <div className="button-group">
            <button
              className={
                selected == "general"
                  ? " bg-general text-white"
                  : " hover:bg-general transition ease-in-out delay-100 border border-2 border-general text-general hover:text-white"
              }
              onClick={() => HandleClick("general")}
            >
              General
            </button>
            <button
              className={
                selected == "adult"
                  ? " bg-adult text-white"
                  : " hover:bg-adult transition ease-in-out delay-100 border border-2 border-adult text-adult hover:text-white"
              }
              onClick={() => HandleClick("adult")}
            >
              Adult [18+]
            </button>
          </div>
          <button
            className="bg-green-400 start-button"
            onClick={() => StartGame()}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}
