"use client";

import React from 'react';
import Services from '../../components/Services';
import { motion } from 'framer-motion';

const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'International Logistics & Food Sourcing',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Grace Logistics Foods & Items'
    },
    areaServed: ['UK', 'USA', 'Canada', 'Nigeria', 'Dubai', 'Germany', 'Ireland',],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Logistics Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Air Cargo Delivery'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Sea Freight Shipping'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Authentic Nigerian Food Sourcing'
                }
            }
        ]
    }
};

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
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
}
