import React from "react";
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const HomePage = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">


      {/* Animated stars background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#000000" },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />

        <div className="flex w-screen min-h-screen md:h-screen justify-center items-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-2/3 max-h-[90vh] md:h-3/4 bg-white/10 mb-[5%] backdrop-blur-md border border-white/20 rounded-xl shadow-lg text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-10 space-y-4 md:space-y-0 md:gap-10"
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center md:order-2">
              <img
                src="/Images/alyssa2.jpg"
                alt="Alyssa Bianca"
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] rounded-full object-cover border-2 border-white/30 shadow-2xl"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left md:order-1">
              <p className="text-md text-white/70">Hello World, I'm</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Alyssa Bianca A. Estipona
              </h1>
              <h2 className="text-lg md:text-2xl font-semibold text-[#FAEB92]">
                Full-Stack Web Developer
              </h2>
              <p className="text-md md:text-base text-white/70">
                Welcome to my personal website.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
