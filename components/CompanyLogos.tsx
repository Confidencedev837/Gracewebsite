
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
        <section className="py-24 bg-[#05050a] overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="w-[1px] h-8 bg-gray-500/30 mb-4" />
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Our Network & Partners</span>
                </div>

                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-scroll animate-scroll-pause gap-8 md:gap-12 py-4">
                        {[...companies, ...companies].map((company, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 15px currentColor)' }}
                                className={`flex flex-col items-center justify-center min-w-[200px] md:min-w-[250px] p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/10 ${company.color} relative`}
                            >
                                <div className="mb-4 transition-transform duration-300">
                                    <company.icon size={48} strokeWidth={1.5} />
                                </div>
                                <span className="text-xs font-medium tracking-widest uppercase opacity-60">
                                    {company.name}
                                </span>
                                <div className={`absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-xl ${company.glow} bg-current -z-10`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;
