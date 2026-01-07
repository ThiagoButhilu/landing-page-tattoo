import React from 'react';
import { motion } from 'framer-motion';
import needleImage from '../assets/images/149786-200.png';

const About = () => {
  const skills = [
    {
      title: "Habilidades",
      description: "Anos de experiência e técnica refinada com precisão cirúrgica"
    },
    {
      title: "Qualidade",
      description: "Produtos de primeira linha e materiais premium importados"
    },
    {
      title: "Arte",
      description: "Capacidade artística para transformar ideias em obras únicas"
    },
    {
      title: "Preços",
      description: "Valores justos e transparentes, sem comprometer a qualidade"
    }
  ];

  return (
    <section id="about" className="py-16 px-6 bg-white">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="font-script text-5xl text-center mb-4 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sobre
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-black uppercase mb-6">Nossa Arte</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Com anos de experiência e técnica refinada, cada tatuagem é executada com 
              precisão cirúrgica e paixão artística. Utilizamos apenas produtos de primeira 
              linha e materiais premium importados, garantindo não apenas resultados excepcionais, 
              mas também máxima segurança e durabilidade. Nossa capacidade artística permite 
              transformar suas ideias em obras únicas, combinando traços precisos, cores vibrantes 
              e um estilo inconfundível. Oferecemos preços justos e transparentes, sem comprometer 
              a qualidade - porque acreditamos que arte de excelência deve ser acessível a todos.
            </p>
            <button className="px-8 py-3 border-2 border-black bg-transparent text-black uppercase font-semibold hover:bg-black hover:text-white transition-colors">
              Saiba Mais
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-full border-4 border-gray-300 text-center aspect-square flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2 flex items-center justify-center">
                  <img 
                    src={needleImage} 
                    alt="Agulha de tatuagem" 
                    className="w-16 h-16 object-contain opacity-60"
                  />
                </div>
                <h4 className="text-sm font-bold text-black mb-2 leading-tight">{skill.title}</h4>
                <p className="text-xs text-gray-700 leading-tight px-2">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

