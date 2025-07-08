import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2023',
      title: 'Started B.Tech in Data Science',
      description: 'Began my studies at Jaipur Engineering College, Kukas. Excited to embark on my journey in Data Science!',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2024',
      title: '2nd Year: Building Strong Foundations',
      description: 'Currently mastering Python, SQL, C++, and working on foundational data projects. Actively participating in college activities and exploring core subjects.',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: '2025',
      title: '3rd Year: Advanced Skills & Projects',
      description: 'Looking forward to developing expertise in Excel, Power BI, Machine Learning, and AI. Planning to take on more advanced projects and internships.',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: '2026',
      title: '4th Year: Real-World Experience',
      description: 'Aiming to build real-world applications and work on industry-level integration projects and internships.',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: '2027',
      title: 'Expected Graduation',
      description: 'Will complete B.Tech with specialization in Data Science.',
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A visual timeline of my academic and professional growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full z-10 hidden md:block"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-400/20 rounded-full">
                      {event.icon}
                    </div>
                    <span className="text-2xl font-bold text-blue-400">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Download My Resume</h3>
            <p className="text-gray-300 mb-6">Get a detailed overview of my skills and experience</p>
            <a
              href="/assets/Doc1 (3).pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;