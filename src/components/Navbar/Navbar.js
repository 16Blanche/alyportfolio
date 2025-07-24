import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `group relative block py-2 px-4 text-white transition-colors duration-300 ease-in-out
     ${isActive ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-[#FAEB92]" : ""}
     hover:text-[#FAEB92] hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:right-0 hover:after:h-[3px] hover:after:bg-[#FAEB92]`;

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="relative bg-black text-white px-6 py-4 bg-opacity-85">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-mono font-semibold text-[#FAEB92] hover:text-white transition-colors duration-300"
        >
          alyssabianca
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, to }) => (
            <div key={label}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md z-50 px-6 py-4 space-y-2"
          >
            {navItems.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
