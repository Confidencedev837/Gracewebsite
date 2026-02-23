"use client";

import React from 'react';
import Image from 'next/image';
import { Target, Heart, Shield, Award, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export default function About() {
    return (
        <div className="bg-[#05050a] min-h-screen text-white">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                        alt="Grace Logistics Global Cargo & Logistics Background - Shipping from Nigeria"
                        fill
                        className="object-cover opacity-25"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-[#05050a]/80 via-[#05050a]/40 to-[#05050a]" />
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={smoothTransition}
                    >
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-[1px] h-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)] mb-4" />
                            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em]">Established Expertise</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                            Our <span className="text-blue-500">Legacy</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
                            Connecting the heart of Nigeria to the rest of the world through excellence in logistics.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.2 }}
                    className="bg-[#0a0a14] border border-white/5 rounded-[2.5rem] p-8 md:p-16 shadow-2xl mb-24 backdrop-blur-sm"
                >
                    <div className="flex flex-col lg:flex-row items-start gap-12 xl:gap-16">
                        <div className="w-full lg:w-1/2 space-y-6">

                            <div className="flex items-center space-x-5 mb-4">
                                <div className="w-1 h-10 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)] rounded-full" />
                                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Who We Are</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                Your Trusted <span className="text-blue-500">Food Sourcing Agent</span> in Nigeria
                            </h2>
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                GFI LIMITED (Grace Logistics Foods and Items) was founded on the principles of trust, efficiency, and reliability. As a premier <strong className="text-white font-medium">Nigerian food supplier in Lagos</strong>, we bridge the gap between local farmers and the global market by providing <Link href="/food-shipping" className="text-blue-400 hover:underline underline-offset-4 font-medium">export-compliant food shipping</Link> to thousands of families.
                            </p>
                            <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-light">
                                Our mission is to simplify logistics. Whether it's a small box of spices for a family in London or several tons of industrial cargo, we treat every shipment from our <Link href="/contact" className="text-blue-400 hover:underline font-medium">Lagos Logistics Hub</Link> with the same professional precision and Nigerian warmth.
                            </p>

                            <div className="grid grid-cols-3 gap-3 pt-2">
                                <div className="flex flex-col items-center justify-center bg-white/5 px-3 py-5 rounded-2xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-blue-500 tracking-tighter">11+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 leading-relaxed">Years of<br />Quality</div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/5 px-3 py-5 rounded-2xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-orange-500 tracking-tighter">36</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 leading-relaxed">States<br />Reached</div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/5 px-3 py-5 rounded-2xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-green-500 tracking-tighter">5K+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 leading-relaxed">Happy<br />Customers</div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="relative h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                                    alt="Professional Logistics Center in Lagos - PGGS Global Shipping Operations"
                                    fill
                                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
                            </div>

                            {/* Floating card */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-3xl shadow-2xl hidden md:block"
                            >
                                <Award className="w-10 h-10 text-white mb-4" />
                                <span className="block text-4xl font-bold text-white tracking-tighter">11+</span>
                                <span className="text-blue-100 text-sm font-medium">Global Partners</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Values Grid */}
                <div className="mb-16">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <div className="text-center mb-12 flex flex-col items-center">
                            <div className="w-1 h-10 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] rounded-full mb-6" />
                            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">What Drives Us</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold">Built on Strong <span className="text-blue-500">Foundations</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Target className="w-8 h-8" />, title: 'Our Mission', text: 'To bridge the distance between cultures through seamless, high-integrity logistics.', color: 'text-blue-500', bg: 'bg-blue-600/10', hover: 'group-hover:bg-blue-600' },
                            { icon: <Heart className="w-8 h-8" />, title: 'Our Values', text: 'Built on integrity, transparency, and a customer-first approach since 2013.', color: 'text-rose-400', bg: 'bg-rose-500/10', hover: 'group-hover:bg-rose-500' },
                            { icon: <Shield className="w-8 h-8" />, title: 'Reliability', text: 'Guaranteed safe handling and on-time delivery across five major continents.', color: 'text-green-400', bg: 'bg-green-500/10', hover: 'group-hover:bg-green-500' },
                            { icon: <Award className="w-8 h-8" />, title: 'Excellence', text: 'Maintaining premium standards in packaging, inspection, and global documentation.', color: 'text-orange-400', bg: 'bg-orange-500/10', hover: 'group-hover:bg-orange-500' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...smoothTransition, delay: i * 0.1 }}
                                className="bg-[#0a0a14] p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all group text-center hover:-translate-y-1 duration-300"
                            >
                                <div className={`inline-flex items-center justify-center p-5 ${item.bg} ${item.color} rounded-2xl mb-8 ${item.hover} group-hover:text-white transition-all duration-500`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final About CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 bg-gradient-to-br from-[#0a0a14] to-[#05050a] rounded-[2.5rem] border border-white/5 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-blue-600/5 blur-3xl" />
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience <span className="text-blue-500">Premium Logistics?</span></h3>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover how our 11+ years of expertise can simplify your international trade. From authentic food sourcing to global cargo delivery.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/services"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20"
                            >
                                <span>Verify Our Shipping Services</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}