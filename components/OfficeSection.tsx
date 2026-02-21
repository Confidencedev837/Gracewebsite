
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

const officeImages = [
  '/image/office1.jpeg',
  '/image/office1.jpeg',
  '/image/office1.jpeg',

];

const OfficeSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % officeImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % officeImages.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? officeImages.length - 1 : prev - 1));

  const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section className="py-32 bg-[#05050a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={smoothTransition}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest shadow-lg">
              <Building2 className="w-4 h-4" />
              <span>Visit Us In Person</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Doors are <span className="text-blue-500">Always Open</span> For You
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed font-light">
              Experience the PGGS standard firsthand. Whether you're dropping off cargo, discussing bulk sourcing, or just need professional logistics advice, our team is ready to welcome you at our Lagos headquarters.
            </p>

            <div className="bg-[#0a0a14] p-8 rounded-3xl border border-white/5 space-y-6 shadow-2xl relative group">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/20 text-blue-500 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Corporate Headquarters</h4>
                  <p className="text-gray-400 leading-relaxed">No 12 Afari Ogun street oshodi, Lagos, Nigeria.</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=No+12+Afari+Ogun+street+oshodi+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group/link relative z-20 cursor-pointer pointer-events-auto"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            <p className="text-orange-500 font-medium italic">
              "Providing reliable logistics solutions for the Nigerian community at home and abroad."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={smoothTransition}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={officeImages[current]}
                  alt="Nigerian food supplier Lagos - GLFI Office"
                  className="w-full h-full object-cover transform transition-transform duration-[5s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prev} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={next} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {officeImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
