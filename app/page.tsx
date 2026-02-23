"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Image from 'next/image';
import Services from '../components/Services';
import FoodstuffSection from '../components/FoodstuffSection';
import Testimonials from '../components/Testimonials';
import OfficeSection from '../components/OfficeSection';
import CompanyLogos from '../components/CompanyLogos';
import GlobalRouteMap from '../components/GlobalRouteMap';
import { Map, Globe } from 'lucide-react';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export default function Home() {
    return (
        <>
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
                            <div className="flex items-center space-x-4">
                                <div className="w-1 h-10 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)] rounded-full" />
                                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em]">Our Story</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                                From All 36 States <br /><span className="text-blue-500">To Your Doorstep Anywhere in the World</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                We believe that distance shouldn't separate you from the authentic taste of home. Our network of local agents traverses the vibrant markets of Nigeria—from the spice hubs of Kano to the palm oil regions of Delta—providing the best <strong>Nigerian food shipping to UK</strong>, USA, and beyond.
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
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                            initial={{ scale: 0.3, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...smoothTransition, delay: 0.3 }}
                        >
                            <div className="relative h-64 sm:h-72 w-full group overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
                                <Image
                                    src="/image/authentic-nigerian-palm-oil-export.jpeg"
                                    alt="Authentic Nigerian Red Palm Oil - Hand-picked for export to UK"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="relative h-72 w-full group overflow-hidden rounded-3xl border border-white/5 shadow-2xl mt-12">
                                <Image
                                    src="/image/nigerian-yam-flour-elubo-shipping.jpeg"
                                    alt="Nigerian Yam Flour (Elubo) - Export quality sourced from local farmers"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="relative h-72 w-full group overflow-hidden rounded-3xl border border-white/5 shadow-2xl -mt-12">
                                <Image
                                    src="/image/nigerian-spices-sourcing-logistics.jpeg"
                                    alt="Sourcing authentic Nigerian spices and food items for logistics to USA"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="relative h-72 w-full group overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
                                <Image
                                    src="/image/export-grade-smoked-catfish-nigeria.jpeg"
                                    alt="Export-grade Nigerian Smoked Catfish - Shipping to UK and Canada"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Services />

            <GlobalRouteMap />

            <div className="py-24 px-4 max-w-7xl mx-auto text-center flex flex-col items-center">
                <div className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent mb-8" />
                <motion.div
                    initial={{ scale: 0.3, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                    transition={smoothTransition}
                    className="max-w-2xl"
                >
                    <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm px-4 leading-relaxed">
                        Bridging the gap between Nigerian authenticity and Global Convenience.
                    </span>
                </motion.div>
            </div>

            <FoodstuffSection />

            <CompanyLogos />

            <OfficeSection />

            {/* Live Tracking Mock Feature */}
            <section className="py-24 bg-[#0a0a14] relative overflow-hidden border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-1 h-10 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-full" />
                                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Live Logistics</span>
                            </div>
                            <h2 className="text-4xl font-bold">Track Your <span className="text-blue-500">Shipment</span></h2>
                            <p className="text-gray-400 font-light text-lg leading-relaxed">
                                Enter your tracking number to get real-time updates on your air or sea cargo. Our global network ensures you're always connected to your goods.
                            </p>
                            <div className="relative group max-w-md">
                                <input
                                    type="text"
                                    placeholder="Enter Tracking ID (e.g., GLFI-83726)"
                                    className="w-full bg-[#05050a] border border-white/10 rounded-2xl py-5 pl-6 pr-32 text-white outline-none focus:border-blue-500 transition-all shadow-2xl"
                                />
                                <button className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                                    Track
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-[#05050a] rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Status</p>
                                        <h4 className="text-xl font-bold text-blue-400">In Transit</h4>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Origin</p>
                                        <h4 className="text-lg font-bold">Lagos, NG</h4>
                                    </div>
                                </div>

                                <div className="relative h-1 w-full bg-white/5 rounded-full mb-12">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "65%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                                    />
                                    <motion.div
                                        initial={{ left: "0%" }}
                                        whileInView={{ left: "65%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-600 shadow-xl"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Last Update</p>
                                        <p className="text-sm font-medium">Port Clearance - Completed</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Dest.</p>
                                        <p className="text-sm font-medium">London, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </>
    );
}
