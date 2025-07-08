import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-400 to-purple-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
};

export default FloatingContactButton;