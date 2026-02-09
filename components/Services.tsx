
import React, { useState } from 'react';
import { Plane, Ship, Package, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Plane className="w-12 h-12 text-blue-500" />,
      title: 'Air Cargo Service',
      description: 'We leverage top-tier air freight partners like DHL to ensure your goods reach any destination in the world within 3-7 business days.',
      process: ['Pickup & Verification', 'Customs Documentation', 'Priority Flight Booking', 'Last-mile Delivery'],
      benefits: 'Perfect for urgent shipments and perishables.'
    },
    {
      icon: <Ship className="w-12 h-12 text-blue-500" />,
      title: 'Sea Freight Service',
      description: 'The most cost-effective method for bulk trade. We manage full container loads (FCL) and less than container loads (LCL).',
      process: ['Container Consolidation', 'Port Logistics', 'Ocean Transit Management', 'Destination Handling'],
      benefits: 'Best for heavy machinery and commercial inventory.'
    },
    {
      icon: <Package className="w-12 h-12 text-blue-500" />,
      title: 'Local Food Sourcing',
      description: 'We source directly from local farmers and markets across Nigeria. From Yam to Egusi, we ensure authenticity and quality.',
      process: ['Direct Farm Sourcing', 'Quality Inspection', 'Export-Grade Packaging', 'Compliance Labeling'],
      benefits: 'Supporting local economies, feeding the diaspora.'
    }
  ];

  const faqs = [
    { question: 'What are the estimated shipping times?', answer: 'Air cargo typically takes 3-7 business days depending on destination. Sea freight takes 4-8 weeks.' },
    { question: 'Do you handle customs clearance?', answer: 'Yes, we handle all necessary export documentation from Nigeria and assist with destination guidance.' },
    { question: 'How is pricing calculated?', answer: 'Pricing depends on weight, volume, and destination. Air cargo is charged per KG/Volumetric weight, Sea freight by Container space.' },
    { question: 'Can I track my shipment?', answer: 'Absolutely. We provide real-time tracking IDs for all air and sea shipments.' }
  ];

  // Fix: Explicitly casting ease to a tuple of 4 numbers to satisfy framer-motion Easing requirements
  const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section id="services" className="py-24 bg-[#05050a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            transition={smoothTransition}
            className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Global Reach
          </motion.h2>
          <motion.h3 
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} 
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Our Logistics Powerhouse
          </motion.h3>
        </div>

        <motion.div 
          className="space-y-32"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={smoothTransition}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
            >
              <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-1000" />
                <img 
                   src={`https://images.unsplash.com/photo-${idx === 0 ? '1544027993-37dbfe43562a' : idx === 1 ? '1494412574643-ff11b0a5c1c3' : '1586528116311-ad8dd3c8310d'}?q=80&w=1200&auto=format&fit=crop`}
                   alt={service.title}
                   className="w-full h-[450px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-8">
                   <div className="flex items-center space-x-4">
                      {service.icon}
                      <h4 className="text-3xl font-bold tracking-tight">{service.title}</h4>
                   </div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <p className="text-xl text-gray-300 leading-relaxed font-light">{service.description}</p>
                <div className="space-y-6">
                  <h5 className="text-blue-500 font-bold uppercase text-sm tracking-widest">The Process</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center space-x-3 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-orange-500" />
                        <span className="font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 italic text-gray-400 shadow-inner"
                >
                   " {service.benefits} "
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-40 max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-500">Find answers to common questions about our shipping and sourcing services.</p>
          </div>
          <div className="bg-[#0a0a14] rounded-3xl border border-white/5 p-8 shadow-2xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
