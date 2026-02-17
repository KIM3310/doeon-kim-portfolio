import React from 'react';
import { Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-bg">
      {/* High-Resolution CSS Aura Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-soft/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-accent-gold/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left max-w-3xl"
          >
            <div className="inline-block px-3 py-1 mb-8 border-b border-accent-gold/50">
              <span className="text-accent-gold text-sm font-medium tracking-widest uppercase">
                AI Engineer & Solution Architect
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif-heading font-medium text-white mb-8 leading-[1.1]">
              Defining the <br/>
              <span className="italic soft-gradient-text">Future of AI</span> <br/>
              Implementation.
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-primary-muted font-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              안녕하십니까, <span className="text-white font-medium">김도언</span>입니다.<br/>
              <span className="text-lg mt-2 block">{PROFILE.intro}</span>
            </h2>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-gold/50 transition-all group"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-primary">Contact Me</span>
              </a>
              <div className="flex gap-4">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-primary hover:text-white"
                  aria-label="Open GitHub profile"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-primary hover:text-white"
                  aria-label="Open LinkedIn profile"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* High-Res Infinite Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative w-full max-w-lg aspect-square flex-shrink-0"
          >
             {/* Abstract CSS Art - "The Sphere of Intelligence" */}
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Core Sphere */}
                <div className="absolute w-[60%] h-[60%] bg-gradient-to-tr from-accent-gold/20 to-accent-soft/20 rounded-full blur-xl animate-pulse"></div>
                
                {/* Orbiting Rings - High Res via CSS Borders */}
                <div className="absolute w-[80%] h-[80%] border border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                <div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                    <div className="absolute top-1/2 -right-1 w-2 h-2 bg-accent-gold rounded-full shadow-[0_0_10px_rgba(226,209,195,0.8)]"></div>
                </div>

                {/* Glassmorphism Foreground */}
                <div className="relative w-[50%] h-[50%] bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 print:hidden"
        >
          <div className="animate-bounce text-white/20">
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
