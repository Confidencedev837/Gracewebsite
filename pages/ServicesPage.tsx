
import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-b from-[#0a0a14] to-[#05050a] py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Core <span className="text-blue-500">Logistics</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
            We provide specialized cargo and sourcing services tailored to the needs of individual exporters and corporate importers alike.
          </p>
        </div>
      </section>
      <Services />
    </div>
  );
};

export default ServicesPage;
