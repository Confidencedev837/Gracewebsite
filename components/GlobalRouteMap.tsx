"use client";

import React from 'react';
import { motion } from 'framer-motion';

const hubs = [
    { id: 'lagos', name: 'Lagos, Nigeria', x: 520, y: 320, type: 'Headquarters' },
    { id: 'london', name: 'London, UK', x: 500, y: 150, type: 'Regional Hub' },
    { id: 'houston', name: 'Houston, USA', x: 250, y: 220, type: 'Distribution Center' },
    { id: 'toronto', name: 'Toronto, Canada', x: 280, y: 180, type: 'Regional Hub' },
];

const routes = [
    { from: 'lagos', to: 'london' },
    { from: 'lagos', to: 'houston' },
    { from: 'lagos', to: 'toronto' },
];

const GlobalRouteMap: React.FC = () => {
    return (
        <section className="py-24 bg-[#05050a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="w-[1px] h-10 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)] mb-4" />
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em]">Global Connectivity</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">Our <span className="text-blue-500">Logistics Network</span></h2>
                </div>

                <div className="relative aspect-[16/9] w-full bg-[#0a0a14] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                    {/* Artistic Map Background (Dots/Grid) */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <svg viewBox="0 0 1000 562" className="absolute inset-0 w-full h-full p-10">
                        {/* Animated Routes */}
                        <defs>
                            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>

                        {routes.map((route, i) => {
                            const start = hubs.find(h => h.id === route.from)!;
                            const end = hubs.find(h => h.id === route.to)!;
                            // Cubic Bezier curve for an "arc" look
                            const midX = (start.x + end.x) / 2;
                            const d = `M ${start.x} ${start.y} Q ${midX} ${Math.min(start.y, end.y) - 50} ${end.x} ${end.y}`;

                            return (
                                <g key={i}>
                                    <path
                                        d={d}
                                        fill="none"
                                        stroke="rgba(59, 130, 246, 0.1)"
                                        strokeWidth="2"
                                    />
                                    <motion.path
                                        d={d}
                                        fill="none"
                                        stroke="url(#routeGradient)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 3, delay: i * 0.5, ease: "easeInOut" }}
                                    />
                                    {/* Moving "Cargo" pulse */}
                                    <motion.circle
                                        r="3"
                                        fill="#60a5fa"
                                        initial={{ offsetDistance: "0%" }}
                                        animate={{ offsetDistance: "100%" }}
                                        transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: "linear" }}
                                        style={{ offsetPath: `path("${d}")` }}
                                        className="shadow-[0_0_10px_#3b82f6]"
                                    />
                                </g>
                            );
                        })}

                        {/* Hub Markers */}
                        {hubs.map((hub) => (
                            <motion.g
                                key={hub.id}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="group cursor-pointer"
                            >
                                <circle
                                    cx={hub.x}
                                    cy={hub.y}
                                    r="6"
                                    fill={hub.id === 'lagos' ? '#ef4444' : '#3b82f6'}
                                    className="animate-pulse"
                                />
                                <circle
                                    cx={hub.x}
                                    cy={hub.y}
                                    r="12"
                                    fill="transparent"
                                    stroke={hub.id === 'lagos' ? '#ef4444' : '#3b82f6'}
                                    strokeWidth="1"
                                    className="scale-0 group-hover:scale-150 transition-transform duration-300 opacity-30"
                                />
                                <text
                                    x={hub.x + 15}
                                    y={hub.y + 5}
                                    fill="white"
                                    fontSize="14"
                                    className="font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2"
                                >
                                    {hub.name}
                                </text>
                                <text
                                    x={hub.x + 15}
                                    y={hub.y + 22}
                                    fill="#94a3b8"
                                    fontSize="10"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter"
                                >
                                    {hub.type}
                                </text>
                            </motion.g>
                        ))}
                    </svg>

                    <div className="absolute bottom-8 left-8 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Main Hub</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Global Destinations</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalRouteMap;
