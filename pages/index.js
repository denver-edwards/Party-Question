import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Button from "./../components/Button.js";
import Footer from "./../components/Footer.js";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home() {
  const First = () => {
    return (
      <>
        <div className="pt-8">
          <p>Partycular</p>
          <p>Break out these questions to entertain the masses.</p>
          <Image
            src="/googleplaycomingsoon.svg"
            height={60}
            width={180}
            onClick={() => {}}
          />
          <p className="text-sm text-gray-500">(Try it now. It's free!)</p>
        </div>

        <div class="custom-shape-divider-bottom-1651106587">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </>
    );
  };

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
        <div className="first snap-box text-center relative">
          <First />
        </div>
        <div className="second snap-box"></div>
        <div className="third snap-box"></div>
        <div className="fourth snap-box"></div>
        <Footer />
      </div>
    </motion.div>
  );
}
