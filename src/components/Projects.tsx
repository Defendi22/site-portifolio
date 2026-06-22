import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Reconhecimento de Gestos com IA',
      description: 'Aplicação de reconhecimento de gestos em tempo real usando MediaPipe e Python',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'WebSocket'],
      color: 'from-blue-500 to-purple-500',
      icon: '🤖',
    },
    {
      title: 'API REST com FastAPI',
      description: 'Backend robusto com autenticação JWT, websockets e documentação automática',
      tech: ['FastAPI', 'JWT', 'PostgreSQL', 'Docker'],
      color: 'from-purple-500 to-pink-500',
      icon: '⚙️',
    },
    {
      title: 'Dashboard de Análise de Dados',
      description: 'Visualização interativa de dados públicos com Chart.js e análise em Pandas',
      tech: ['Chart.js', 'Pandas', 'Python', 'PostgreSQL'],
      color: 'from-pink-500 to-red-500',
      icon: '📊',
    },
    {
      title: 'Sistema de Automação',
      description: 'Automação inteligente de processos com integração entre sistemas',
      tech: ['Python', 'AWS', 'Docker', 'GitHub Actions'],
      color: 'from-red-500 to-orange-500',
      icon: '🔄',
    },
    {
      title: 'Machine Learning Model',
      description: 'Modelo de ML com scikit-learn para predição e classificação de dados',
      tech: ['scikit-learn', 'Pandas', 'NumPy', 'TensorFlow'],
      color: 'from-orange-500 to-yellow-500',
      icon: '🧠',
    },
    {
      title: 'API NoSQL',
      description: 'Backend escalável com MongoDB e Redis para cache de alta performance',
      tech: ['MongoDB', 'Redis', 'Python', 'FastAPI'],
      color: 'from-yellow-500 to-green-500',
      icon: '💾',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Projetos &</span>
            <span className="ml-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Portfólio
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Trabalhos realizados e soluções criadas</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-80"
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
              />

              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all overflow-hidden flex flex-col">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  animate={
                    hoveredIndex === index
                      ? { rotate: 360, y: [0, -10, 0] }
                      : { rotate: 0 }
                  }
                  transition={{
                    duration: hoveredIndex === index ? 0.6 : 0.3,
                  }}
                >
                  {project.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon />
                    Ver
                  </motion.button>
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mais
                  </motion.button>
                </div>

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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
