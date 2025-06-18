import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import port1 from "../assets/port1.jpg";
import port3 from "../assets/port3.jpg";
import port5 from "../assets/port5.jpg";

const projects = [
  {
    title: "Bold Brand Identity",
    description: "Vibrant visuals and clean typography.",
    image: port1,
  },
  {
    title: "Modern UI Kit",
    description: "Clean, intuitive UI for a web app.",
    image: port3,
  },
  {
    title: "Editorial Illustration",
    description: "Tech magazine visuals on innovation.",
    image: port5,
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    scale: 0.95,
  }),
};

export function Portfolio() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const next = () => {
    setIndex([index === projects.length - 1 ? 0 : index + 1, 1]);
  };

  const prev = () => {
    setIndex([index === 0 ? projects.length - 1 : index - 1, -1]);
  };

  const project = projects[index];

  return (
    <section className="relative min-h-screen w-full px-4 py-24 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* Background floating glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse top-[-100px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse bottom-[-100px] right-[-100px]" />
      </div>

      {/* Header Text */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Selected Works</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          A collection of my proudest design projects, where creativity meets clarity.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl h-[300px] rounded-2xl overflow-hidden shadow-2xl z-10">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={project.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm opacity-80">{project.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={prev}
            className="bg-white text-black p-3 rounded-full shadow pointer-events-auto hover:bg-gray-200 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="bg-white text-black p-3 rounded-full shadow pointer-events-auto hover:bg-gray-200 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
