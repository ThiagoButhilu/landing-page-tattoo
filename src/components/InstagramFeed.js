import React from 'react';
import { motion } from 'framer-motion';
import IMG2733 from '../assets/images/IMG_2733.jpg';
import IMG2734 from '../assets/images/IMG_2734.jpg';
import IMG2735 from '../assets/images/IMG_2735.jpg';
import IMG2736 from '../assets/images/IMG_2736.jpg';
import IMG2738 from '../assets/images/IMG_2738.jpg';
import IMG2739 from '../assets/images/IMG_2739.jpg';

const InstagramFeed = () => {
  const instagramPosts = [
    { id: 1, image: IMG2735, likes: 245, comments: 12 },
    { id: 2, image: IMG2736, likes: 189, comments: 8 },
    { id: 3, image: IMG2738, likes: 312, comments: 15 },
    { id: 4, image: IMG2739, likes: 278, comments: 10 },
    { id: 5, image: IMG2733, likes: 201, comments: 9 },
    { id: 6, image: IMG2734, likes: 267, comments: 11 },
  ];

  return (
    <section className="py-16 px-6 bg-black">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header do Instagram */}
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full p-0.5">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">faria_tattoo</h2>
              <p className="text-gray-400 text-sm">Arte em tatuagem • Traços únicos</p>
            </div>
          </div>
        </motion.div>

        {/* Instagram Grid - Layout real do Instagram */}
        <motion.div 
          className="grid grid-cols-3 gap-1 md:gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          {instagramPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="relative cursor-pointer aspect-square overflow-hidden rounded-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={post.image} 
                alt={`Tatuagem por @faria_tattoo`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              {/* Overlay com ícones do Instagram */}
              <motion.div 
                className="absolute inset-0 bg-black flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex items-center space-x-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-2 text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="font-bold">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="font-bold">{post.comments}</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão para seguir no Instagram */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.a 
            href="https://instagram.com/faria_tattoo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white uppercase font-semibold rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Seguir @faria_tattoo
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstagramFeed;

