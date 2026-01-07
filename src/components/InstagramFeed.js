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
    <section id="fotos" className="py-16 px-6 bg-black">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header do Instagram */}
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
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
          transition={{ duration: 0.3 }}
        >
          {instagramPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="relative cursor-pointer aspect-square overflow-hidden rounded-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ 
                opacity: { duration: 0.2, delay: index * 0.03 },
                scale: { duration: 0.2 }
              }}
            >
              <img 
                src={post.image} 
                alt={`Tatuagem por @faria_tattoo`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Botão para seguir no Instagram */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.a 
            href="https://instagram.com/faria_tattoo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white uppercase font-semibold rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            Seguir @faria_tattoo
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstagramFeed;

