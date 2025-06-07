import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-no-repeat transform scale-100"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/DSC_2456.JPG)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 8%'
          }}
        ></div>
        {/* Dark gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-40 left-20 w-32 h-32 rounded-full bg-neon-blue/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-56 h-56 rounded-full bg-neon-blue/5 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm </span>
            <span className="neon-text">Akash</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-light-text-700 mb-8 leading-relaxed"
          >
            A Salesforce Developer since 2019. I specialize in Apex, Visualforce pages, Flows, Triggers, 
            Batch Apex, and Lightning Web Components (LWC). I've also worked with Salesforce Data Cloud 
            and hold relevant certifications. Additionally, I'm specialized in AI development with hands-on 
            experience and certifications in artificial intelligence technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="btn btn-primary w-full sm:w-auto"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="btn btn-outline w-full sm:w-auto"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neon-blue"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} />
      </motion.button>
    </section>
  );
};

export default Hero;