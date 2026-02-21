
import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Our Services"
        description="Explore our comprehensive logistics powerhouse: Air Cargo, Sea Freight, and Local Food Sourcing for both individual and corporate clients."
        ogUrl="https://gracelogisticsfoodanditems.vercel.app/services"
      />
      <section className="bg-gradient-to-b from-[#0a0a14] to-[#05050a] py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Best way to <span className="text-blue-500">send food from Nigeria</span> to abroad
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
            Wondering <strong>how to ship Nigerian food to UK</strong> or if you <strong>can ship Nigerian food internationally</strong>? Our expert logistics and sourcing services provide a seamless, legal, and fast solution.
          </p>
        </div>
      </section>
      <Services />
    </div>
  );
};

export default ServicesPage;
