
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
    title: 'Grace Logistics Foods & Items',
    subtitle: 'Connecting Nigeria to the World with Air & Sea Cargo Excellence.',
    accent: 'Fast. Reliable. Professional.'
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    title: 'Authentic Nigerian Sourcing',
    subtitle: 'Local foodstuffs sourced from all 36 states, packaged and shipped safely anywhere.',
    accent: 'From Home to Abroad.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop',
    title: 'Your Trusted Shipping Partner',
    subtitle: 'Grace Logistics Foods and Items ensures your shipments arrive on time, every time.',
    accent: 'Credibility in Every Mile.'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Fix: Explicitly casting ease to a tuple of 4 numbers to satisfy framer-motion Easing requirements
  const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={smoothTransition}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>

          <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...smoothTransition, delay: 0.3 }}
                className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6 tracking-wider uppercase"
              >
                {slides[current].accent}
              </motion.div>
              
              <motion.h1 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...smoothTransition, delay: 0.5 }}
                className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
              >
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? 'text-blue-500' : ''}>{word} </span>
                ))}
              </motion.h1>
              
              <motion.p 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...smoothTransition, delay: 0.7 }}
                className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light"
              >
                {slides[current].subtitle}
              </motion.p>
              
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...smoothTransition, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#foodstuff"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <span>Request Food Shipping</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-1000 ${i === current ? 'bg-blue-500 w-12' : 'bg-white/20 w-3'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#05050a] to-transparent z-10" />
    </section>
  );
};

export default Hero;
