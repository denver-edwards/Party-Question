import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

// Local
import Question from "./../components/Question.js";
import Setup from "../components/Setup.js";

export default function Home() {
  const [gameActive, setGameActive] = useState(false);
  const [category, setCategory] = useState("");

  const blueColor = "#324067";
  const redColor = "#750D37";

  // useEffect(() => {
  //   document.onkeyup = function (event) {
  //     if (event.which == 32 || event.keyCode == 32) {
  //       NextQuestion();
  //     } else if (event.which == 27 || event.keyCode == 27) {
  //       setDefaultDiv(true);
  //     }
  //   };
  // });

  function StartGame() {
    let category = "";

    GetList(category);
    setDefaultDiv(false);

    NextQuestion();
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <div>
        {gameActive ? (
          <Question
            gameActive={gameActive}
            setGameActive={setGameActive}
            category={category}
          />
        ) : (
          <Setup
            gameActive={gameActive}
            setGameActive={setGameActive}
            setCategory={setCategory}
          />
        )}
      </div>
    </motion.div>
  );
}
