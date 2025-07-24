import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_ao799is",  
        "template_0x6hrzp", 
        formData,
        "bHXJNbdIh_1NPHeoK"
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setIsSuccessModalOpen(true);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send email. Please try again.");
        }
      )
      .finally(() => setIsLoading(false));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alyssaestipona8@gmail.com").then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
    });
  };


return (
    <>
      <div className="relative w-screen min-h-screen bg-black overflow-y-auto">
        {/* Background Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
            className="absolute inset-0 z-0 pointer-events-none"
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
              modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
            },
            detectRetina: true,
          }}
        />

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center px-4 py-10 sm:py-16"
        >

          <h1 className="text-5xl sm:text-5xl font-bold text-white mb-6 mt-6">CONTACT</h1>
          <p className="text-white/70 mb-6 text-sm sm:text-base max-w-md">
            Feel free to reach out via this form or any of my social links below.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-white text-xl sm:text-2xl mb-8">
            <div className="relative inline-block">
              <button
                onClick={handleCopyEmail}
                className="text-white hover:text-[#FAEB92] transition"
              >
                <FaGoogle />
              </button>
              {showTooltip && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                  Email copied to clipboard
                </div>
              )}
            </div>
            <a href="https://github.com/16Blanche" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#FAEB92] transition" />
            </a>
            <a href="https://www.linkedin.com/in/alyssaestipona" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#FAEB92] transition" />
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-4 text-left text-white"
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-white/80 text-sm">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-[#FAEB92] border border-white/20"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-white/80 text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-[#FAEB92] border border-white/20"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-white/80 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 backdrop-blur-mdtext-white placeholder-white/50 focus:outline-none focus:border-[#FAEB92] border border-white/20 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.currentTarget.style.backgroundColor = "#FAEB92";
              }}
              onMouseLeave={(e) => {
                if (!isLoading) e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
              }}
              onMouseDown={(e) => {
                if (!isLoading) e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
              }}
              onMouseUp={(e) => {
                if (!isLoading) e.currentTarget.style.backgroundColor = "#FAEB92";
              }}
              className={`w-full flex items-center justify-center gap-2 text-black font-semibold py-2 px-4 rounded transition duration-300 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Email"
              )}
            </button>

          </form>
        </motion.div>

        {/* Success Modal */}
        {isSuccessModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl shadow-2xl p-6 text-center max-w-md w-full">
              <h2 className="text-2xl font-bold text-white mb-2">Email Sent!</h2>
              <p className="text-white/70 mb-4 text-md text-center">
                Your message has been sent successfully. I'll get back to you soon.
              </p>
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="bg-white text-black px-4 py-2 rounded hover:bg-[#FAEB92] transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
