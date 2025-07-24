import React, { useRef, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const About = () => {
  const [isScrolling, setIsScrolling] = useState(false);
const [activeSection, setActiveSection] = useState("INTRODUCTION");
  const scrollRef = useRef(null);

  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToSection = (ref) => {
    if (scrollRef.current && ref.current) {
      const scrollContainer = scrollRef.current;
  const offsetTop = ref.current.offsetTop - 100;
      scrollContainer.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const sections = [
        { name: "INTRODUCTION", ref: introRef },
        { name: "SKILLS", ref: skillsRef },
        { name: "EXPERIENCE", ref: experienceRef },
        { name: "EDUCATION", ref: educationRef },
      ];

      const containerTop = scrollContainer.getBoundingClientRect().top;

      for (const section of sections) {
        const el = section.ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = rect.top - containerTop;

          if (offset >= -100 && offset <= 200) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-screen h-screen overflow-hidden"
        >
          {/* About Content */}
          <div className="flex w-screen h-screen justify-center">
          <div className="flex flex-col md:flex-row w-[90%] sm:w-4/5 md:w-2/3 h-[90vh]">

              {/* Left side - Navigation */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0 hidden md:block">
                <h2 className="text-5xl font-bold text-white mb-6 mt-6">ABOUT ME</h2>
                <ul className="space-y-4 text-white/80">
                {[
                  { label: "INTRODUCTION", ref: introRef },
                  { label: "SKILLS", ref: skillsRef },
                  { label: "EXPERIENCE", ref: experienceRef },
                  { label: "EDUCATION", ref: educationRef },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer flex items-center gap-2 hover:text-white group"
                    onClick={() => scrollToSection(item.ref)}
                  >
                    <span
                      className={`h-[2px] bg-white transition-all duration-300 ${
                        activeSection === item.label ? "w-10" : "w-4 group-hover:w-6"
                      }`}
                    ></span>
                    <span
                      className={`transition-all ${
                        activeSection === item.label ? "text-white font-semibold" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
                </ul>
              </div>

              {/* Right side - Scrollable content */}
              <div
                ref={scrollRef}
                className={`w-full md:w-2/3 h-full overflow-y-auto space-y-20 pr-2 pl-4 custom-scrollbar ${
                  isScrolling ? "scrolling" : ""
                }`}
              >
                {/* Introduction Section */}
                <section ref={introRef}>

                  {/* Mobile: "ABOUT ME", Desktop: "INTRODUCTION" */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-6 text-left md:text-left">
                    <span className="block md:hidden text-5xl text-center w-full mb-8">ABOUT ME</span>
                    <span className="hidden md:block">INTRODUCTION</span>
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Image - centered on mobile using mx-auto */}
                    <img
                      src={`${process.env.PUBLIC_URL}/images/alyssa2.jpg`}
                      alt="Alyssa"
                      className="w-44 h-44 sm:w-60 sm:h-60 rounded-xl object-cover border-2 border-white/20 shadow-xl mx-auto sm:mx-0"
                    />

                    {/* Info */}
                    <div className="space-y-2 text-white">
                      <h4 className="text-xl font-semibold">
                        ALYSSA BIANCA A. ESTIPONA
                      </h4>
                      <p className="text-lg text-[#FAEB92] font-semibold">
                        Full-Stack Web Developer
                      </p>
                      <p className="text-md text-white/70 text-justify">
                        I specialize in developing responsive, user-friendly web applications using the MERN stack, with a strong focus on both functionality and user experience. With a background in full-stack development and UI/UX design, I build scalable backend systems and craft intuitive, visually engaging interfaces guided by design thinking principles.
                      </p>
                    </div>
                  </div>
                </section>


                {/* Skills Section */}
                <section ref={skillsRef}>
                  <h3 className="text-3xl font-bold text-white mb-6">SKILLS</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                      { name: "React", icon: `${process.env.PUBLIC_URL}/images/react.png` },
                      { name: "Node.js", icon: `${process.env.PUBLIC_URL}/images/node.png` },
                      { name: "Express", icon: `${process.env.PUBLIC_URL}/images/express.png` },
                      { name: "Laravel", icon: `${process.env.PUBLIC_URL}/images/laravel.png` },
                      { name: "Python", icon: `${process.env.PUBLIC_URL}/images/python.png` },
                      { name: "Javascript", icon: `${process.env.PUBLIC_URL}/images/javascript.png` },
                      { name: "PHP", icon: `${process.env.PUBLIC_URL}/images/php.png` },
                      { name: "MySQL", icon: `${process.env.PUBLIC_URL}/images/mysql.png` },
                      { name: "MongoDB", icon: `${process.env.PUBLIC_URL}/images/mongodb.png` },
                      { name: "Tailwind CSS", icon: `${process.env.PUBLIC_URL}/images/tailwind.png` },
                      { name: "Bootstrap", icon: `${process.env.PUBLIC_URL}/images/bootstrap.png` },
                      { name: "React Bootstrap", icon: `${process.env.PUBLIC_URL}/images/reactbootstrap.png` },
                      { name: "Figma", icon: `${process.env.PUBLIC_URL}/images/figma.png` },
                      { name: "Canva", icon: `${process.env.PUBLIC_URL}/images/canva.png` },
                      { name: "Git", icon: `${process.env.PUBLIC_URL}/images/git.png` },

                    ].map((skill, idx) => (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        key={idx}
                        className="flex flex-col items-center justify-center backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-md p-4 shadow-xl"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain"
                        />
                        <p className="text-md text-white text-center">{skill.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Experience Section */}
                <section ref={experienceRef}>
                  <h3 className="text-3xl font-bold text-white mb-6">EXPERIENCE</h3>

                  {/* Experience 1 */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-lg mb-6 p-4 shadow-xl items-center sm:items-center"
                    >
                    {/* Logo Wrapper */}
                    <div className="w-full sm:w-1/5 flex justify-center sm:justify-center items-center sm:items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/quickflo.png`}
                        alt="Quickflo Forwarders, Inc. Logo"
                        className="w-auto h-28 object-contain rounded-md"
                      />
                    </div>

                    {/* Company Info */}
                    <div className="w-full sm:w-4/5 relative">
                      <h4 className="text-xl font-semibold text-white text-justify pr-4">
                        QUICKFLO FORWARDERS, INC.
                      </h4>

                      <h1 className="text-md text-[#FAEB92] font-semibold pr-4">
                        Technical Support Intern
                      </h1>

                      {/* Date - mobile below position, desktop absolute top-right */}
                      <span className="text-md text-white/70 pr-4 mt-1 block sm:absolute sm:top-0 sm:right-0">
                        Apr 2025 – Jun 2025
                      </span>

                      <p className="text-md text-white/70 mt-1 text-justify pr-4">
                        Assisted in troubleshooting hardware and software issues, set up and configured desktops and printers, and helped with data entry in the accounting department.
                      </p>
                    </div>
                   </motion.div>

                  {/* Experience 2 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-lg mb-6 p-4 shadow-xl items-center sm:items-center"
                  >
                    {/* Logo Wrapper */}
                    <div className="w-full sm:w-1/5 flex align-center justify-center sm:justify-center items-center sm:items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/cti.png`}
                        alt="Columbia Technologies, Inc. Logo"
                        className="w-auto h-28 object-contain rounded-md"
                      />
                    </div>

                    {/* Company Info */}
                    <div className="w-full sm:w-4/5 relative">
                      <h4 className="text-xl font-semibold text-white text-justify pr-4">
                        Columbia Technologies, Inc.
                      </h4>

                      <h1 className="text-md text-[#FAEB92] font-semibold pr-4">
                        Web Systems Development Intern
                      </h1>

                      {/* Date - mobile below position, desktop absolute top-right */}
                      <span className="text-md text-white/70 pr-4 mt-1 block sm:absolute sm:top-0 sm:right-0">
                        Jan 2025 – Apr 2025
                      </span>

                      <p className="text-md text-white/70 mt-1 text-justify pr-4">
                        Developed a Requisition Approval System for internal office use, allowing employees to request office-related items through a multi-step, role-based approval workflow.
                      </p>
                    </div>

                  </motion.div>
                  
                  {/* Experience 3 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-lg mb-6 p-4 shadow-xl items-center sm:items-center"
                  >
                    {/* Logo Wrapper */}
                    <div className="w-full sm:w-1/5 flex justify-center sm:justify-center items-center sm:items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nulogo.png`}
                        alt="National University Logo"
                        className="w-auto h-28 object-contain rounded-md"
                      />
                    </div>

                    {/* Company Info */}
                    <div className="w-full sm:w-4/5 relative">
                      <h4 className="text-xl font-semibold text-white text-justify pr-4">
                        NATIONAL UNIVERSITY - MALL OF ASIA
                      </h4>

                      <h1 className="text-md text-[#FAEB92] font-semibold pr-4">
                        Capstone Web Developer
                      </h1>

                      {/* Date - mobile below position, desktop absolute top-right */}
                      <span className="text-md text-white/70 pr-4 mt-1 block sm:absolute sm:top-0 sm:right-0">
                        Mar 2025 – May 2025
                      </span>

                      <p className="text-md text-white/70 mt-1 text-justify pr-4">
                        Served as the web developer for the capstone project titled <span className="italic">“E-Pet Adopt: A Mobile and Web Application of Pet Services Management System for Pasay Animal Shelter.”</span> Also assisted in preparing the project's documentation and contributed to the development of the mobile application.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Education Section */}
                <section ref={educationRef}>
                  <h3 className="text-3xl font-bold text-white mb-4">EDUCATION</h3>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-lg p-4 shadow-xl items-center sm:items-center"
                    >
                      {/* Logo Wrapper */}
                      <div className="w-full sm:w-1/5 flex justify-center sm:justify-center items-center sm:items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/nulogo.png`}
                          alt="National University Logo"
                          className="w-auto h-28 object-contain rounded-md"
                        />
                      </div>

                      {/* Info */}
                      <div className="w-full sm:w-4/5 relative">
                        <h4 className="text-xl font-semibold text-white pr-4">
                          National University - Mall of Asia
                        </h4>

                        <h1 className="text-md text-[#FAEB92] font-semibold text-justify pr-4">
                          Bachelor of Science in Information Technology with Specialization in Mobile and Web Applications
                        </h1>

                        {/* Date */}
                        <span className="text-md text-white/70 pr-4 mt-1 block sm:absolute sm:top-0 sm:right-0">
                          2021-2025
                        </span>

                        <p className="text-md text-white/70 mt-1 text-justify pr-4">
                          Graduated as <span className="italic">magna cum laude</span> with a GWA of 3.57/4.00. Served as the web developer for the capstone project <span className="italic">“E-Pet Adopt: A Mobile and Web Application of Pet Services Management System for Pasay Animal Shelter”</span>.
                        </p>
                      </div>
                    </motion.div>

                    <div className="h-[32rem]"></div>
                </section>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    </div>

  );
};

export default About;

// Init function for particles
const particlesInit = async (engine) => {
  await loadFull(engine);
};
