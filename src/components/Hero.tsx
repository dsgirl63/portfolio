import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,179,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(51,179,255,0.05)_0%,transparent_50%)] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(51,179,255,0.05)_0%,transparent_50%)] animate-pulse delay-2000"></div>
        {/* Glitter effect overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 glitter-bg"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-blue-400/30">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Khushi Sharma
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
          >
            Full-Stack Developer & Data Science Enthusiast
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions that bridge the gap between AI, automation, and user experience. 
            Currently pursuing B.Tech in Data Science at Jaipur Engineering College, building the future one project at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6 mb-8"
          >
            <a
              href="https://github.com/dsgirl63"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/khushi-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:khushiveshnav123@gmail.com"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-300 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Mail className="w-4 h-4" />
              <span className="text-sm">khushiveshnav123@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91-6378288504</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="/assets/Doc1 (3).pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-medium"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-medium"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;