import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <motion.div
            className="flex flex-col gap-4"
            whileHover={{ x: 4 }}
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              FD
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvedor Python, Analista de Dados e Entusiasta de IA. Criando soluções inovadoras
              com tecnologia.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: 'Sobre', href: '#about' },
                { label: 'Tecnologias', href: '#technologies' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors relative group"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold">Conecte-se</h3>
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

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Fernando Defendi. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Desenvolvido com</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              💜
            </motion.span>
            <span>e React + Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
