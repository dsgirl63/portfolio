import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Shield, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'C++', 'SQL', 'HTML/CSS']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow']
    },
    {
      title: 'Data Science & AI',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analysis']
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB', 'Power BI', 'Excel', 'Git', 'Docker']
    },
    {
      title: 'Cloud & Deployment',
      icon: <Zap className="w-6 h-6" />,
      skills: ['AWS', 'Heroku', 'Netlify', 'Vercel', 'CI/CD']
    },
    {
      title: 'Security & Testing',
      icon: <Shield className="w-6 h-6" />,
      skills: ['API Security', 'Penetration Testing', 'Unit Testing', 'Integration Testing']
    }
  ];

  const certifications = [
    {
      name: 'Python Programming',
      issuer: 'Coursera',
      year: '2023'
    },
    {
      name: 'Machine Learning Fundamentals',
      issuer: 'Google',
      year: '2024'
    },
    {
      name: 'Data Science Specialization',
      issuer: 'IBM',
      year: '2024'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across multiple domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-400/20 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-300 mb-1">{cert.issuer}</p>
                <p className="text-blue-400 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 