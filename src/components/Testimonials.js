import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IMG2735 from '../assets/images/IMG_2735.jpg';
import IMG2736 from '../assets/images/IMG_2736.jpg';
import IMG2738 from '../assets/images/IMG_2738.jpg';
import IMG2739 from '../assets/images/IMG_2739.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const tattooImages = [
    IMG2735,
    IMG2736,
    IMG2738,
    IMG2739
  ];

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tattooImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + tattooImages.length) % tattooImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToImage = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tattooImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [tattooImages.length]);

  return (
    <section className="py-16 px-6 bg-white">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-black uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Traços Únicos
            </motion.h2>
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Cada traço é uma expressão única da capacidade artística de transformar 
                ideias em arte permanente na pele. Com técnica refinada e sensibilidade 
                artística, cada tatuagem é cuidadosamente desenhada e executada, garantindo 
                que cada obra seja uma verdadeira manifestação de criatividade e habilidade. 
                A arte não apenas decora a pele, mas conta histórias, expressa identidade e 
                cria conexões duradouras através de traços precisos e                 estilos inconfundíveis.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-auto">
                <img 
                  src={tattooImages[currentIndex]} 
                  alt={`Tatuagem exemplo ${currentIndex + 1}`}
                  className={`w-full h-auto object-cover transition-opacity duration-500 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </div>
              
              {/* Botões de navegação */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Imagem anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Próxima imagem"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicadores de slide */}
            <div className="flex justify-center mt-4 space-x-2">
              {tattooImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;

