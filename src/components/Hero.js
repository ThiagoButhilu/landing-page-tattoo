import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/lucas-lenzi-zeT_i6av9rU-unsplash.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Image Overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="font-script text-6xl md:text-8xl text-white mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Luan Tattoo
        </motion.h1>
        <div className="flex items-center justify-center mb-8">
          <motion.div 
            className="w-16 h-px bg-white"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
        <motion.h2 
          className="text-2xl md:text-3xl text-white font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Artista Tatuador
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default Hero;

