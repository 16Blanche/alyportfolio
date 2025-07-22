import React from "react"; 
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Projects = () => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    return(
        <>
    <div className="relative w-screen h-screen overflow-hidden bg-black">
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
            
            </div>
            </div>
        </>
    );

}

export default Projects;