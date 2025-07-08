import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Breast Cancer Analysis',
      description: 'Advanced machine learning model for breast cancer prediction using clinical data',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/dsgirl63/Breast-Cancer-Analysis-Project.git',
      tags: ['#AI', '#MachineLearning', '#Python', '#Sklearn', '#Healthcare']
    },
    {
      title: 'House Price Prediction',
      description: 'Predictive model for real estate pricing using regression algorithms',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/dsgirl63/House-Price-Prediction.git',
      tags: ['#ML', '#Regression', '#Python', '#DataAnalysis', '#RealEstate']
    },
    {
      title: 'Smart Inventory Expiry Predictor',
      description: 'Intelligent system for predicting product expiry dates and managing inventory',
      image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/dsgirl63/Smart-Inventory-Expiry-Predictor.git',
      tags: ['#AI', '#Inventory', '#Python', '#Streamlit', '#BusinessIntelligence']
    },
    {
      title: 'MessageHub App',
      description: 'Full-stack messaging application with SQL database integration',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/dsgirl63/Project-with-SQL-and-python.git',
      tags: ['#FullStack', '#SQL', '#Python', '#WebDevelopment', '#Database']
    },
    {
      title: 'AWI Chatbot',
      description: 'AI-powered chatbot with natural language processing capabilities',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/dsgirl63/AIW.git',
      tags: ['#AI', '#NLP', '#Chatbot', '#Python', '#MachineLearning']
    },
    {
      title: 'Chat Box UI',
      description: 'Modern and responsive chat interface with real-time messaging',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/dsgirl63/chat-box.git',
      tags: ['#UI/UX', '#JavaScript', '#WebDevelopment', '#RealTime', '#Frontend']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my data science and development projects showcasing AI, ML, and full-stack capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;