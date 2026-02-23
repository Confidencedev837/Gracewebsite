"use client";

import React, { useState } from 'react';
import { Plane, Ship, Package, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-base sm:text-lg font-semibold pr-4">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />}
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
            <p className="pb-6 text-gray-400 leading-relaxed text-sm sm:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Plane className="w-10 h-10 text-blue-500" />,
      title: 'Air Cargo Service',
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
      description: 'We leverage top-tier air freight partners like DHL to ensure your goods reach any destination in the world within 3-7 business days. A faster alternative to our Sea Freight solutions.',
      process: ['Pickup & Verification', 'Customs Documentation', 'Priority Flight Booking', 'Last-mile Delivery'],
      benefits: 'Perfect for urgent shipments and perishables.',
      link: '/contact?service=air-cargo'
    },
    {
      icon: <Ship className="w-10 h-10 text-blue-500" />,
      title: 'Sea Cargo Services',
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop",
      description: 'The most cost-effective method for bulk trade. We manage full container loads (FCL) and less than container loads (LCL), perfectly complementing our Air Cargo routes.',
      process: ['Container Consolidation', 'Port Logistics', 'Ocean Transit Management', 'Destination Handling'],
      benefits: 'Best for heavy machinery and commercial inventory.',
      link: '/contact?service=sea-cargo'
    },
    {
      icon: <Package className="w-10 h-10 text-blue-500" />,
      title: 'Local Food Sourcing',
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      description: 'We source directly from local farmers and markets across Nigeria. From Yam to Egusi, we ensure authenticity and quality for every shipment.',
      process: ['Direct Farm Sourcing', 'Quality Inspection', 'Export-Grade Packaging', 'Compliance Labeling'],
      benefits: 'Supporting local economies, feeding the diaspora.',
      link: '/food-shipping'
    }
  ];

  const faqs = [
    { question: 'What are the estimated shipping times?', answer: 'Air cargo typically takes 3-7 business days depending on destination. Sea freight takes 4-8 weeks.' },
    { question: 'Do you handle customs clearance?', answer: 'Yes, we handle all necessary export documentation from Nigeria and assist with destination guidance.' },
    { question: 'How is pricing calculated?', answer: 'Pricing depends on weight, volume, and destination. Air cargo is charged per KG/Volumetric weight, Sea freight by Container space.' },
    { question: 'Can I track my shipment?', answer: 'Absolutely. We provide real-time tracking IDs for all air and sea shipments.' }
  ];

  const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#05050a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 32, opacity: 1 }}
              viewport={{ once: true }}
              className="w-[2px] bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] mb-4"
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.3em]"
            >
              Global Reach
            </motion.span>
          </div>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Our Logistics Powerhouse
          </motion.h3>
        </div>

        {/* Services List */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={smoothTransition}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-8 lg:gap-16`}
            >
              {/* Image */}
              <div
                className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl group h-[260px] sm:h-[380px] lg:h-[460px]"
                style={{ position: 'relative' }}
              >
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-1000 z-10" />
                <Image
                  src={service.image}
                  alt={`GLFI Logistics - ${service.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 sm:p-8 z-20">
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">{service.title}</h4>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-light">{service.description}</p>
                <div className="space-y-4">
                  <h5 className="text-blue-500 font-bold uppercase text-xs sm:text-sm tracking-widest">The Process</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-y-4 sm:gap-x-8">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center space-x-3 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                        <span className="font-medium text-sm sm:text-base">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 italic text-gray-400 shadow-inner text-sm sm:text-base">
                  &ldquo; {service.benefits} &rdquo;
                </div>
                {service.title === 'Local Food Sourcing' ? (
                  <Link
                    href="/food-shipping"
                    className="inline-flex items-center space-x-2 text-blue-500 font-bold hover:text-blue-400 transition-all group pt-4"
                  >
                    <span>View Authentic Foodstuff Inventory</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-blue-500 font-bold hover:text-blue-400 transition-all group pt-4"
                  >
                    <span>Request a Quote for {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-32 lg:mt-40 max-w-3xl mx-auto"
        >
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-500 text-sm sm:text-base">Find answers to common questions about our shipping and sourcing services.</p>
          </div>
          <div className="bg-[#0a0a14] rounded-3xl border border-white/5 p-6 sm:p-8 shadow-2xl">
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