import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHeart, FaGithub, FaDiscord, FaLinkedinIn } from 'react-icons/fa';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Tailwind shadow-xl equivalent
    transition: {
      duration: 0.3,
    },
  },
};

const buttonHoverVariants = {
  hover: {
    y: -3,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Tailwind shadow-md equivalent
    transition: {
      duration: 0.2,
    },
  },
};

// Container for staggering items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-400 text-white flex flex-col items-center py-16 px-4 pt-24">
      {/* Main title with Framer Motion */}
      <motion.h1
        className="text-5xl font-bold mb-12"
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
      >
        Support us
      </motion.h1>

      {/* Introductory text box with Framer Motion */}
      <motion.div
        className="bg-purple-800 bg-opacity-70 rounded-lg p-8 mb-12 max-w-3xl text-center shadow-lg"
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ delay: 0.3 }}
        hover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }} // Direct hover for simplicity, or use cardHoverVariants
      >
        <p className="text-xl leading-relaxed">
          Simplest way of supporting would be joining us on social medias and discord and telling your friends
        </p>
      </motion.div>

      {/* Grid container for staggering */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Social Support Section */}
        <motion.div
          className="bg-purple-800 bg-opacity-70 rounded-lg p-8 shadow-lg flex flex-col items-center text-center"
          variants={itemVariants} // Inherits from container's stagger
          whileHover="hover"
          transition={{ ease: "easeOut" }}
          hover={cardHoverVariants.hover} // Applying card hover variants
        >
          <div className="flex items-center text-3xl font-semibold mb-6">
            <FaUsers className="h-8 w-8 mr-3 text-purple-200 transition-colors duration-300" />
            Social Support
          </div>
          <p className="mb-8 text-lg">
            Other options to support: social media, discord etc.
          </p>
          <div className="w-full space-y-4">
            <motion.button
              className="flex items-center justify-center w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg"
              whileHover="hover"
              transition={{ ease: "easeOut" }}
              hover={buttonHoverVariants.hover} // Applying button hover variants
            >
              <FaGithub className="h-5 w-5 mr-2" />
              Follow on GitHub
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg"
              whileHover="hover"
              transition={{ ease: "easeOut" }}
              hover={buttonHoverVariants.hover}
            >
              <FaDiscord className="h-5 w-5 mr-2" />
              Join Discord
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg"
              whileHover="hover"
              transition={{ ease: "easeOut" }}
              hover={buttonHoverVariants.hover}
            >
              <FaLinkedinIn className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </motion.button>
          </div>
        </motion.div>

        {/* Monetary Support Section */}
        <motion.div
          className="bg-purple-800 bg-opacity-70 rounded-lg p-8 shadow-lg flex flex-col items-center text-center"
          variants={itemVariants} // Inherits from container's stagger
          whileHover="hover"
          transition={{ ease: "easeOut" }}
          hover={cardHoverVariants.hover} // Applying card hover variants
        >
          <div className="flex items-center text-3xl font-semibold mb-6">
            <FaHeart className="h-8 w-8 mr-3 text-purple-200 transition-colors duration-300" />
            Monetary Support
          </div>
          <p className="mb-8 text-lg">
            If you'd like to support monetarily, this is our patreon / onlyfans
          </p>
          <motion.button
            className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-6 rounded-lg text-lg"
            whileHover="hover"
            transition={{ ease: "easeOut" }}
            hover={buttonHoverVariants.hover}
          >
            <FaHeart className="h-6 w-6 mr-3" />
            Support on Patreon
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SupportPage;