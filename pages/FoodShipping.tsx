
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, PackageCheck, HeartHandshake } from 'lucide-react';
import FoodstuffSection from '../components/FoodstuffSection';
import SEO from '../components/SEO';

const FoodShipping: React.FC = () => {
  return (
    <div className="pt-32">
      <SEO
        title="Ship Foodstuff from Nigeria to UK, USA & Canada | Affordable Delivery"
        description="Nigerian groceries delivery UK, USA & Canada. Specialized export-compliant food shipping from Nigeria. Sourced from 36 states, legally documented for global delivery."
        keywords="Nigerian food shipping to UK, Ship foodstuff from Nigeria to UK, Nigerian groceries delivery UK, Send food from Nigeria to USA, Nigerian food delivery Canada, Ship egusi stockfish crayfish to UK"
        ogUrl="https://gracelogisticsfoodanditems.vercel.app/food-shipping"
      />
      <section className="relative py-24 bg-[#0a0a14] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              Ship <span className="text-blue-500">Foodstuff</span> from Nigeria to UK, USA & Canada.
            </motion.h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
              We are more than a logistics company; we are your direct link to the heart of Nigeria. Our dedicated <strong>Nigerian groceries delivery UK</strong> service ensures that local delicacies like egusi, stockfish, and crayfish arrive safely, legally, and fresh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="text-orange-500" />, title: 'Export Compliant', desc: 'Proper documentation for US, UK, and EU.' },
              { icon: <Truck className="text-blue-500" />, title: 'Fast Transit', desc: 'Minimized time in transit for freshness.' },
              { icon: <PackageCheck className="text-green-500" />, title: 'Secure Packing', desc: 'Double-walled and moisture-proof.' },
              { icon: <HeartHandshake className="text-purple-500" />, title: 'Sourcing Pros', desc: 'We source exactly what you need.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                className="bg-[#05050a] p-8 rounded-2xl border border-white/5"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FoodstuffSection />

      <section className="py-24 bg-[#05050a]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Ship?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Contact Mrs. Grace directly on WhatsApp for a personalized quote on your custom foodstuff list.
          </p>
          <a
            href="https://wa.me/2348033204246"
            className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-10 py-5 rounded-full font-bold text-white transition-all transform hover:scale-105"
          >
            <span>Chat with Mrs. Grace</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FoodShipping;
