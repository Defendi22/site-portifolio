import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Qual é sua experiência com Python?',
      answer:
        'Tenho mais de 5 anos de experiência com Python, especializando-me em desenvolvimento back-end com FastAPI, análise de dados com Pandas, e machine learning com scikit-learn. Sou apaixonado por código limpo e práticas como TDD e SOLID principles.',
    },
    {
      question: 'Quais banco de dados você trabalha?',
      answer:
        'Trabalho com uma variedade de banco de dados incluindo PostgreSQL e MySQL para bancos relacionais, MongoDB e Redis para NoSQL. Tenho experiência em design de schemas, otimização de queries e gerenciamento de dados em produção.',
    },
    {
      question: 'Você tem experiência com cloud?',
      answer:
        'Sim! Tenho experiência sólida com AWS, incluindo EC2, S3, Lambda, RDS e outros serviços. Também trabalho com Docker para containerização e CI/CD com GitHub Actions para automatizar deployments.',
    },
    {
      question: 'Qual é sua abordagem para machine learning?',
      answer:
        'Utilizo scikit-learn para tarefas de classificação e regressão, MediaPipe para visão computacional e reconhecimento de gestos. Sempre começo com exploração de dados, feature engineering, e validação cruzada antes de finalizar modelos.',
    },
    {
      question: 'Você trabalha em modalidade remota?',
      answer:
        'Sim! Prefiro trabalhar em modalidade híbrida ou totalmente remota. Tenho toda infraestrutura necessária para colaborar efetivamente com times distribuídos e mantenho excelente comunicação.',
    },
    {
      question: 'Como começar um projeto com você?',
      answer:
        'Entre em contato através do formulário abaixo, LinkedIn ou e-mail. Gosto de entender seus objetivos, desafios e visão do projeto antes de propor soluções. Podemos agendar uma chamada para discussão.',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="faq" className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Perguntas</span>
            <span className="ml-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Frequentes
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Respostas para as principais dúvidas</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <motion.button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full text-left"
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: expandedIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 leading-relaxed pt-4 border-t border-white/10 mt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">
            Ainda tem dúvidas? Entre em contato comigo!
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />
            <span className="relative text-white">Vamos conversar</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
