import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    'Atualmente trabalhando com desenvolvimento back-end e análise de dados',
    'Especialista em Python com foco em automação, APIs e Machine Learning',
    'Experiência em projetos de dados públicos e sistemas de informação em saúde',
    'Desenvolvendo soluções com IA aplicada, como reconhecimento de gestos em tempo real',
    'Experiência com AWS (deploy, armazenamento e serviços em nuvem)',
    'Trabalho com bancos relacionais e NoSQL: PostgreSQL, MySQL, MongoDB, Redis',
    'Desenvolvimento orientado a princípios SOLID e Clean Code',
    'Praticante de TDD — testes como parte central do ciclo de desenvolvimento',
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Sobre</span>
            <span className="ml-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Mim
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Conheça mais sobre minha trajetória e habilidades</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start group"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="mt-1 flex-shrink-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  </motion.div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats Card */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Premium Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 shadow-xl hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Missão & Visão</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Desenvolvedor apaixonado por criar soluções inovadoras que combinam Python, análise de dados e
                inteligência artificial. Acredito que a tecnologia deve ser usada para resolver problemas reais e
                criar valor.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Abordagem</p>
                  <p className="text-white font-semibold">SOLID • Clean Code • TDD</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Modalidade</p>
                  <p className="text-white font-semibold">Híbrido ou Remoto</p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Anos de Experiência', value: '5+' },
                { label: 'Projetos Concluídos', value: '10+' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
