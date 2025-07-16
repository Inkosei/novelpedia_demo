"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Constition", path: "/constitution"},
    { name: "News", path: "/news" },
    { name: "Support", path: "/support" },
    { name: "Roadmap", path: "/roadmap" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 w-full px-4 md:px-8 py-3 flex justify-between items-center text-gray-200 border-b border-violet-700/30 backdrop-blur-lg bg-black/50 z-50 shadow-lg shadow-violet-500/10"
    >
      {/* Logo - Now with a placeholder for your icon */}
      <motion.div whileHover={{ scale: 1.05 }} className="text-xl md:text-2xl font-bold">
        <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
          {/* Replace with your icon's path */}
          <img src="./logo-icon.png" alt="NovelPedia Icon" className="h-8 w-8" />
          <span style={{ textShadow: "0 0 8px #c4b5fd" }}>
            Novel<span className="text-violet-400">Pedia</span>
          </span>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`relative px-2 py-1 hover:text-violet-300 transition-colors duration-300 ${
              location.pathname === item.path ? "text-violet-300" : "text-gray-300"
            }`}
          >
            {item.name}
            {location.pathname === item.path && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-2.5 left-0 right-0 h-1 bg-violet-400 rounded-full"
                style={{ boxShadow: "0 0 10px #a78bfa" }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-violet-300 mb-1.5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
        <div className={`w-6 h-0.5 bg-violet-300 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-violet-300 mt-1.5 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 w-full bg-black/80 backdrop-blur-lg border-b border-violet-700/30 shadow-xl shadow-violet-500/10 md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative block px-8 py-5 text-lg font-medium hover:bg-violet-500/10 transition-colors border-t border-violet-900/50 ${
                    location.pathname === item.path ? 'text-violet-300' : 'text-gray-300'
                  }`}
                >
                  {/* Active link indicator for mobile */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-violet-400 rounded-r-full"
                      style={{ boxShadow: "0 0 10px #a78bfa" }}
                    />
                  )}
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}