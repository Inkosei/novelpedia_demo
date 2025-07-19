import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaHeart,
  FaGithub,
  FaDiscord,
  FaLinkedinIn,
} from 'react-icons/fa';

const SupportPage = () => {
  return (
    <div className="min-h-screen text-gray-200 flex flex-col items-center py-16 px-4 pt-32 md:pt-40">
      {/* Animated Title */}
      <motion.h1
        className="text-5xl font-bold mb-12 text-violet-300 text-center"
        style={{
          textShadow: '0 0 15px #a78bfa, 0 0 25px #8b5cf6',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Support Us
      </motion.h1>

      {/* Intro Card */}
      <motion.div
        className="bg-black/30 border border-violet-600/50 backdrop-blur-sm rounded-lg p-8 mb-12 max-w-3xl text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      >
        <p className="text-xl leading-relaxed text-gray-200">
          The simplest way to support us is by joining our community and telling your friends about NovelPedia.
        </p>
      </motion.div>

      {/* Support Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Community Support Card */}
        <motion.div
          className="bg-black/30 border border-violet-600/50 backdrop-blur-sm rounded-lg p-8 shadow-lg flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          whileHover={{
            scale: 1.03,
            boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex items-center text-3xl font-semibold mb-6 text-gray-100">
            <FaUsers className="h-8 w-8 mr-3 text-violet-300" />
            Join the Community
          </div>
          <p className="mb-8 text-lg text-gray-300">
            Follow our journey, contribute to discussions, and connect with fellow creators and readers.
          </p>
          <div className="w-full space-y-4">
            {/* Buttons */}
            <motion.button
              className="flex items-center justify-center w-full border border-violet-500 bg-transparent text-violet-300 font-bold py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-violet-500 hover:text-white cursor-pointer"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={() => window.open('https://github.com/Inkosei', '_blank')}
            >
              <FaGithub className="h-5 w-5 mr-3" />
              Follow on GitHub
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-full border border-violet-500 bg-transparent text-violet-300 font-bold py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-violet-500 hover:text-white cursor-pointer"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={() => window.open('https://discord.gg/FwubN8S6aZ', '_blank')}
            >
              <FaDiscord className="h-5 w-5 mr-3" />
              Join our Discord
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-full border border-violet-500 bg-transparent text-violet-300 font-bold py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-violet-500 hover:text-white cursor-pointer"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={() => window.open('https://www.linkedin.com/company/karmicsphere-media/', '_blank')}
            >
              <FaLinkedinIn className="h-5 w-5 mr-3" />
              Connect on LinkedIn
            </motion.button>
          </div>
        </motion.div>

        {/* Monetary Support Card */}
        <motion.div
          className="bg-black/30 border border-violet-600/50 backdrop-blur-sm rounded-lg p-8 shadow-lg flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          whileHover={{
            scale: 1.03,
            boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex items-center text-3xl font-semibold mb-6 text-gray-100">
            <FaHeart className="h-8 w-8 mr-3 text-violet-300" />
            Monetary Support
          </div>
          <p className="mb-8 text-lg text-gray-300">
            If you're able, direct support helps us cover server costs and accelerate development.
          </p>
          <motion.button
            className="flex items-center justify-center w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 hover:shadow-lg hover:shadow-violet-500/40 cursor-pointer"
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            onClick={() => window.open('https://www.patreon.com/Novelpedia', '_blank')}
          >
            <FaHeart className="h-6 w-6 mr-3" />
            Support on Patreon
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportPage;
