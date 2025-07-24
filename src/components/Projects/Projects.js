import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";


const sampleProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    type: "Website",
    technologies: ["React", "Tailwind", "EmailJS"],
    description: "A personal portfolio website designed to showcase development projects, highlight technical skills, and provide contact information for potential collaborations or job opportunities.",
    images: [
      `${process.env.PUBLIC_URL}/images/portfolio1.png`,
      `${process.env.PUBLIC_URL}/images/portfolio2.png`,
      `${process.env.PUBLIC_URL}/images/portfolio4.png`,
      `${process.env.PUBLIC_URL}/images/portfolio3.png`
    ],
  },
  {
    id: 2,
    title: "Requisition Approval System",
    type: "Website",
    technologies: ["React", "Laravel","Tailwind", "MySQL", "Nodemailer"],
    description: "A Requisition Approval System designed for internal office use, allowing employees to request office-related items through a multi-step, role-based approval workflow. This project is confidential and is owned by Columbia Technologies, Inc.",
    images: [`${process.env.PUBLIC_URL}/images/rsapp1.png`],
  },
    {
    id: 3,
    title: "Pet Services Management System",
    type: "Website",
    technologies: ["MERN", "CSS3", "React Bootstrap", "Nodemailer"],
    description: "A Pet Services Management System developed as a capstone project to support shelter operations, including pet and adoption management, barangay animal record tracking, and posting of animal related events. The system also features a map of nearby pet services within Pasay City and a built-in messaging platform for communication between adopters and the shelter. A system demo is available upon request.",
    images: [
      `${process.env.PUBLIC_URL}/images/epetadopt1.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt2.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt3.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt4.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt5.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt6.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt7.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt8.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt9.png`,
      `${process.env.PUBLIC_URL}/images/epetadopt10.png`,
    ],
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);


  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

const filteredProjects =
  selectedFilter === "All"
    ? sampleProjects
    : sampleProjects.filter((p) => p.type === selectedFilter);

useEffect(() => {
  if (!selectedProject) return;

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev + 1 >= selectedProject.images.length ? 0 : prev + 1
      );
    }, 3000);
  };

  startAutoSlide();

  return () => clearInterval(intervalRef.current);
}, [selectedProject]);


  return (
    <>
      <div className="relative w-screen min-h-screen bg-black overflow-hidden">
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

        <div className="relative z-10 text-white">
          <Navbar />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold text-center mb-2 mt-6">PROJECTS</h1>
            <p className="text-center text-white/70 mb-8">
              Browse through my works and designs
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              {["All", "Website", "Design"].map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setSelectedFilter(filterOption)}
                  className={`px-4 py-2 rounded-md transition border border-white ${
                    selectedFilter === filterOption
                      ? "text-black bg-white"
                      : "text-white hover:text-black hover:bg-[#FAEB92] hover:border-[#FAEB92]"
                  }`}
                >
                  {filterOption}
                </button>
              ))}
            </div>


            {/* Project Grid */}
            <div className="px-4 py-4 sm:py-6 sm:px-6 md:py-8 md:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-lg hover:bg-white/20 transition cursor-pointer border-2 border-white/20"
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0); // ✅ Reset the image index
                    }}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#FAEB92] text-black text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal */}
            {selectedProject && (
              <div className="fixed inset-0 z-20 bg-black/80 flex items-center justify-center px-4">
                <div
                  className="bg-white/10 backdrop-blur-lg text-white rounded-xl p-6 
                  w-full max-w-[50rem] sm:max-w-[53.125rem] lg:max-w-[56.25rem] overflow-auto relative border-2 border-white/20"
                >
                  <button
                    className="absolute top-1 right-1 text-2xl"
                    onClick={() => setSelectedProject(null)}
                  >
                    <FaTimes />
                  </button>

                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt=""
                    className="w-full rounded mb-4"
                  />

                  <div className="flex justify-center gap-2 mb-5">
                    {selectedProject.images.map((_, i) => (
                      <button
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          currentImageIndex === i ? "bg-white" : "bg-gray-500"
                        }`}
                        onClick={() => {
                          setCurrentImageIndex(i);

                          // 🆕 Reset the timer
                          clearInterval(intervalRef.current);
                          intervalRef.current = setInterval(() => {
                            setCurrentImageIndex((prev) =>
                              prev + 1 >= selectedProject.images.length ? 0 : prev + 1
                            );
                          }, 3000);
                        }}
                      />
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{selectedProject.title}</h2>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-black text-xs font-medium bg-[#FAEB92] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/70 text-md">{selectedProject.description}</p>

                </div>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default Projects;
