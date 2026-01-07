import React from 'react';
import { motion } from 'framer-motion';

const Artists = () => {
  return (
    <section id="artists" className="py-16 px-6 bg-black">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-script text-5xl mb-2 text-white">Artista</h2>
          <h3 className="text-3xl font-bold text-gray-300 uppercase">Luan</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                alt="Luan - Artista Tatuador"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-200 text-lg leading-relaxed">
              Luan é um artista tatuador dedicado e apaixonado pela arte da tatuagem. 
              Com anos de experiência e técnica refinada, ele está comprometido em 
              proporcionar a melhor experiência de tatuagem em um ambiente amigável e 
              acolhedor. Sua dedicação à arte e atenção aos detalhes permitem transformar 
              suas ideias em obras de arte únicas e personalizadas. Descubra sua próxima 
              peça de arte com Luan.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Artists;

