import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CountUp } from 'use-count-up';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      number: 1000,
      label: 'Linhas de Código',
      suffix: '+',
      icon: '💻',
    },
    {
      number: 50,
      label: 'Issues Resolvidas',
      suffix: '+',
      icon: '🐛',
    },
    {
      number: 15,
      label: 'Tecnologias',
      suffix: '+',
      icon: '🔧',
    },
    {
      number: 100,
      label: 'Commits',
      suffix: '%',
      icon: '📈',
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all group overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{stat.icon}</div>
                
                {isInView && (
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <CountUp
                      isCounting={isInView}
                      end={stat.number}
                      duration={2.5}
                      easing="easeOutCubic"
                      formatter={(value: number) =>
                        `${Math.round(value).toLocaleString()}${stat.suffix}`
                      }
                    />
                  </div>
                )}

                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0)',
                    '0 0 40px rgba(59, 130, 246, 0.3)',
                    '0 0 20px rgba(59, 130, 246, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
