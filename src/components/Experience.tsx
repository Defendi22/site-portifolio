import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: 'Desenvolvedor de Software',
      company: 'Projetos Próprios',
      period: '2021 - Presente',
      location: 'São Paulo, Brasil',
      description: [
        'Desenvolvimento de APIs REST com FastAPI',
        'Implementação de machine learning com scikit-learn',
        'Automação de processos com Python',
        'Deploy em AWS e Docker',
      ],
    },
    {
      title: 'Analista de Dados',
      company: 'Projetos Diversos',
      period: '2020 - 2023',
      location: 'São Paulo, Brasil',
      description: [
        'Análise exploratória de dados públicos',
        'Visualização com Chart.js e Pandas',
        'Modelagem de dados em SQL',
        'Trabalho com MongoDB e Redis',
      ],
    },
    {
      title: 'Desenvolvedor Python Junior',
      company: 'Iniciante na Carreira',
      period: '2019 - 2020',
      location: 'São Paulo, Brasil',
      description: [
        'Primeiros projetos em Python',
        'Aprendizado de conceitos web',
        'Desenvolvimento de scripts de automação',
        'Estudos em Machine Learning',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Experiência</span>
            <span className="ml-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Profissional
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Minha trajetória e conquistas</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2"
            animate={{ scaleY: [0, 1] }}
            transition={{ duration: 1 }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-2"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                />

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <motion.div
                    className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 flex-1">
                        <Briefcase className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      </div>
                    </div>

                    {/* Company */}
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-3">
                      {exp.company}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-blue-400 font-bold mt-1">→</span>
                          <span>{desc}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(59, 130, 246, 0)',
                          '0 0 40px rgba(59, 130, 246, 0.2)',
                          '0 0 20px rgba(59, 130, 246, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
