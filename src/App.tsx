import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <ParticleBackground />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Technologies />
        <Experience />
        {/* <Projects /> */}
        <FAQ />
        <Contact />
        <Footer />
      </div>

      {/* Gradiente flutuante de fundo */}
      <motion.div
        className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <motion.div
        className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}
