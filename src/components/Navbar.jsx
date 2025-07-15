"use client";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Find us", path: "/find-us" },
    { name: "Support", path: "/support" },
    { name: "Affiliates", path: "/affiliates" },
    { name: "Roadmap", path: "/roadmap" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 w-full px-4 md:px-8 py-4 flex justify-between items-center text-white border-b border-purple-500/30 backdrop-blur-md bg-gray-900/90 z-50 shadow-lg shadow-purple-500/10"
    >
      {/* Logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="text-xl md:text-2xl font-bold"
      >
        <Link to="/" className="hover:text-purple-400 transition-colors">
          Novel<span className="text-purple-400">Pedia</span>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="flex items-center"
          >
            <Link
              to={item.path}
              className={`relative hover:text-purple-400 transition-colors duration-300 ${
                location.pathname === item.path ? 'text-purple-400' : ''
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 shadow-lg shadow-purple-400/50"
                />
              )}
            </Link>
            {index < navItems.length - 1 && (
              <span className="ml-6 lg:ml-8 text-gray-500">-</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white focus:outline-none z-60"
      >
        <div className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </motion.button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-purple-500/30 shadow-xl shadow-purple-500/20 md:hidden"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 hover:bg-purple-500/20 transition-colors border-b border-gray-700/50 last:border-b-0 ${
                  location.pathname === item.path ? 'text-purple-400 bg-purple-500/10' : ''
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
