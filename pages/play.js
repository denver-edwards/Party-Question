import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Button from "./../components/Button.js";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

// Local
import Question from "./../components/Question.js";
import Setup from "../components/Setup.js";

export default function Play() {
  const [gameActive, setGameActive] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    document.onkeyup = function (event) {
      if (event.which == 32 || event.keyCode == 32) {
        NextQuestion();
      } else if (event.which == 27 || event.keyCode == 27) {
        setGameActive(false);
      }
    };
  });

  console.log(gameActive);
  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div>
        {!gameActive ? (
          <Setup
            gameActive={gameActive}
            setGameActive={setGameActive}
            setCategory={setCategory}
          />
        ) : (
          <Question
            gameActive={gameActive}
            setGameActive={setGameActive}
            category={category}
          />
        )}
      </div>
    </motion.div>
  );
}
