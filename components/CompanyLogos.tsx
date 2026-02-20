
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe2, Zap, Shield } from 'lucide-react';

const companies = [
    { name: 'Global Trade Co', icon: Globe2, color: 'text-blue-400', glow: 'shadow-blue-500/50' },
    { name: 'Secure Logistics', icon: Shield, color: 'text-orange-400', glow: 'shadow-orange-500/50' },
    { name: 'Eco Sourcing', icon: Building2, color: 'text-green-400', glow: 'shadow-green-500/50' },
    { name: 'Rapid Express', icon: Zap, color: 'text-purple-400', glow: 'shadow-purple-500/50' },
];

const CompanyLogos: React.FC = () => {
    return (
        <section className="py-20 bg-[#05050a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Trusted By Industry Leaders</h2>
                    <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {companies.map((company, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0.3, y: 20 }}
                            whileInView={{ opacity: 0.6, y: 0 }}
                            whileHover={{
                                opacity: 1,
                                scale: 1.05,
                                filter: 'drop-shadow(0 0 15px currentColor)'
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 group hover:border-white/10 ${company.color}`}
                        >
                            <div className={`mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                <company.icon size={48} strokeWidth={1.7} />
                            </div>
                            <span className="text-sm font-medium tracking-wide opacity-90 group-hover:opacity-200 transition-opacity">
                                {company.name}
                            </span>

                            {/* Neon Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl opacity-15 group-hover:opacity-20 transition-opacity duration-300 blur-xl ${company.glow} bg-current`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;
