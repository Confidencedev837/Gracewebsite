
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FoodstuffSection from '../components/FoodstuffSection';
import Testimonials from '../components/Testimonials';
import OfficeSection from '../components/OfficeSection';
import { Map, ShoppingCart, Truck, Globe } from 'lucide-react';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const Home: React.FC = () => {
  // const [boy, setBoy] = useState(0);
  // useEffect(()=>{
  //   alert(`welcome to ${boy}`)
  // })
  useEffect(()=>{})
  return (
    <div>
      <Hero />
      
      {/* Storytelling Section */}
      <section className="py-32 bg-[#05050a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ x: -60, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              viewport={{ once: true }}
              transition={smoothTransition}
              className="space-y-10" 
            >
              <div onClick={() => setBoy(boy + 1)} className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest shadow-sm">
                Our Story 
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                From All 36 States <br/><span className="text-blue-500">To Your Doorstep</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                We believe that distance shouldn't separate you from the authentic taste of home. Our network of local agents traverses the vibrant markets of Nigeria—from the spice hubs of Kano to the palm oil regions of Delta.
              </p>
              <div className="grid grid-cols-2 gap-12">
                 <div className="space-y-4">
                    <Map className="w-10 h-10 text-orange-500" />
                    <h4 className="font-bold text-xl">Local Sourcing</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Hand-picked by experts who know quality and authenticity.</p>
                 </div>
                 <div className="space-y-4">
                    <Globe className="w-10 h-10 text-blue-500" />
                    <h4 className="font-bold text-xl">Global Shipping</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Fast, compliant delivery reaching destinations across 5 continents.</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ scale: 0.3, opacity: 0 }} 
              whileInView={{ scale: 1, opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.3 }}
            >
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="/image/oil.jpeg" 
                  className="rounded-3xl h-72 w-full object-cover shadow-2xl border border-white/5" 
                  alt="Market scene" 
               />
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="/image/flour.jpeg" 
                  className="rounded-3xl h-72 w-full object-cover shadow-2xl mt-12 border border-white/5" 
                  alt="Nigerian food" 
               />
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="/image/crayfish.jpeg" 
                  className="rounded-3xl h-72 w-full object-cover shadow-2xl -mt-12 border border-white/5" 
                  alt="Packaging" 
               />
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="/image/fish.jpeg" 
                  className="rounded-3xl h-72 w-full object-cover shadow-2xl border border-white/5" 
                  alt="Shipping" 
               />
            </motion.div>
          </div>
        </div>
      </section>

      <Services />

      <div className="py-24 px-4 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ scale: 0.3, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
          transition={smoothTransition}
          className="bg-blue-600/10 p-6 border border-blue-500/20 rounded-[2rem] inline-block shadow-lg"
        >
          <span className="text-blue-400 font-bold tracking-tight uppercase text-base px-4">
            Bridging the gap between Nigerian authenticity and Global Convenience.
          </span>
        </motion.div>
      </div>

      <FoodstuffSection />

      <OfficeSection />
      
      <Testimonials />
    </div>
  );
};

export default Home;
