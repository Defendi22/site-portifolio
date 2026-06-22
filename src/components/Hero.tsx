import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5"
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="flex flex-col gap-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 w-fit">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold">
                    ✨ Bem-vindo ao meu portfólio
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-white">Fernando</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Defendi
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-400"
                variants={itemVariants}
              >
                Desenvolvedor Python Back-end • Analista de Dados • Entusiasta de IA
              </motion.p>

              <motion.p
                className="text-gray-500 text-lg max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                Apaixonado por automação de processos, integração de sistemas e aplicações com
                Inteligência Artificial. Criando soluções inovadoras e transformadoras.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white">Entrar em contato</span>
              </motion.a>

              <motion.a
                href="https://github.com/Defendi22"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-semibold backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver no GitHub
              </motion.a>
            </motion.div>

            {/* Info Pills */}
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              variants={itemVariants}
            >
              {['📍 São Paulo, Brasil', '💼 Trabalho Híbrido/Remoto', '🚀 Disponível para novos projetos'].map(
                (info, i) => (
                  <motion.div
                    key={i}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400 hover:bg-white/10 transition-colors"
                  >
                    {info}
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right - Avatar/Image Area */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />

              {/* Avatar Circle */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 shadow-2xl">
                {/* Avatar Image */}
                <img
                  src="/avatar.jpg"
                  alt="Fernando Defendi"
                  className="w-full h-full object-cover"
                />

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 40px rgba(139, 92, 246, 0.3)',
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-6 -right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 px-6 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-sm font-semibold text-white">
                  5+ Anos de Experiência
                </p>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 px-6 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  delay: 0.5,
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-sm font-semibold text-white">
                  10+ Projetos Concluídos
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
