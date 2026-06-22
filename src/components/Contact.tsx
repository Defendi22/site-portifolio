import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const linkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.514 0-9.398h3.554v1.329c.43-.664 1.199-1.61 2.919-1.61 2.134 0 3.734 1.39 3.734 4.376v5.303zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.769-1.71 1.959-1.71 1.19 0 1.916.755 1.934 1.71 0 .951-.744 1.71-1.978 1.71zm1.581 11.597H3.715V9.054h3.203v11.398zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 24 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );

  const githubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! 🎉');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Clear message after 3 seconds
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fwdefendi20@gmail.com',
      link: 'mailto:fwdefendi20@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 (11) 9 6336-5389',
      link: 'https://wa.me/5511963365389',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      link: '#',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Entre em</span>
            <span className="ml-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Contato
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Quer conversar sobre um projeto? Tem uma dúvida? Sinta-se à vontade para entrar em
            contato comigo. Respondo em até 24 horas!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 p-6 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl hover:border-white/20 transition-all"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  </motion.div>

                  <div className="flex-1">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              className="pt-6 border-t border-white/10"
              variants={itemVariants}
            >
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                Conecte-se comigo
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/fernando-defendi-b83b142b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {linkedinIcon()}
                </motion.a>
                <motion.a
                  href="https://github.com/Defendi22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {githubIcon()}
                </motion.a>
                <motion.a
                  href="mailto:fwdefendi20@gmail.com"
                  className="p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:border-red-400/30 transition-all"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="Seu nome"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="seu.email@exemplo.com"
                  />
                </motion.div>

                {/* Subject Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Sua mensagem aqui..."
                  />
                </motion.div>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-sm"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg font-semibold relative overflow-hidden group disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-2 text-white">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
