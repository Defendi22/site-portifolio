import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categories = [
    {
      title: 'Back-end & APIs',
      technologies: ['Python', 'FastAPI', 'JWT', 'WebSocket'],
      icon: '⚙️',
    },
    {
      title: 'Machine Learning & Data',
      technologies: ['scikit-learn', 'MediaPipe', 'Pandas', 'NumPy'],
      icon: '🤖',
    },
    {
      title: 'Front-end',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js'],
      icon: '🎨',
    },
    {
      title: 'Banco de Dados',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      icon: '🗄️',
    },
    {
      title: 'DevOps, Cloud & Deploy',
      technologies: ['AWS', 'Docker', 'GitHub Actions', 'Render'],
      icon: '☁️',
    },
    {
      title: 'Boas Práticas',
      technologies: ['SOLID', 'TDD', 'Clean Code', 'CI/CD'],
      icon: '✨',
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
    <section id="technologies" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Tecnologias &</span>
            <span className="ml-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Ferramentas
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Stack completo para desenvolvimento moderno</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"
              />

              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {category.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 hover:text-blue-200 hover:border-blue-400/60 transition-all"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Border Glow */}
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
