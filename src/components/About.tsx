import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my journey, passions, and what drives me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-400/20 rounded-lg">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Full-Stack Developer and Data Science enthusiast currently pursuing my B.Tech in Data Science at Jaipur Engineering College. 
                My journey in technology began with a curiosity about how data can transform businesses and improve lives.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of innovation and automation to solve real-world problems. My approach combines technical expertise with creative problem-solving, 
                always focusing on user experience and practical applications.
              </p>
            </div>
          </motion.div>

          {/* Interests & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-400/20 rounded-lg">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">My Interests</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">AI Tools & Automation</h4>
                    <p className="text-gray-300 text-sm">Exploring cutting-edge AI technologies and building intelligent automation solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">Web Development</h4>
                    <p className="text-gray-300 text-sm">Creating responsive, modern web applications with focus on user experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">Data Science</h4>
                    <p className="text-gray-300 text-sm">Transforming raw data into actionable insights and predictive models</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-400/20 rounded-lg">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">My Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To leverage technology to create meaningful solutions that make a positive impact on people's lives. 
                I strive to bridge the gap between complex technical problems and user-friendly solutions, 
                always keeping the end-user experience at the forefront of my work.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="p-3 bg-blue-400/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">6+ Projects</h3>
              <p className="text-gray-300 text-sm">Successfully completed and deployed innovative solutions</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="p-3 bg-purple-400/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2+ Years</h3>
              <p className="text-gray-300 text-sm">Experience in programming and data science</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="p-3 bg-green-400/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Passionate</h3>
              <p className="text-gray-300 text-sm">About creating innovative and impactful solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 