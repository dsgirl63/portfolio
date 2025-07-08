import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Data Analytics',
      provider: 'Google',
      description: 'Professional certificate covering data analysis, visualization, and statistical methods',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['#Google', '#DataAnalytics', '#Visualization', '#Statistics']
    },
    {
      title: 'Machine Learning with Python',
      provider: 'IBM/Coursera',
      description: 'Comprehensive course on ML algorithms, implementations, and real-world applications',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['#ML', '#Python', '#AI', '#DataScience']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in data science and analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-medium mb-3">{cert.provider}</p>
                <p className="text-gray-300 mb-4">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;