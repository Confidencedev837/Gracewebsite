import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/scrolltotop';
import WhatsAppFAB from '../components/WhatsAppFAB';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Nigerian Food Shipping to UK & Global Cargo | GLFI',
    description: 'Ship foodstuff from Nigeria to UK, USA & Canada. Authentic Nigerian groceries delivery UK. Fast, affordable, and compliant food shipping from Lagos to the diaspora.',
    keywords: 'Nigerian food shipping to UK, Ship foodstuff from Nigeria to UK, Nigerian groceries delivery UK, Send food from Nigeria to USA, Nigerian food delivery Canada, Affordable food shipping from Nigeria, Ship egusi stockfish crayfish to UK, food sourcing agent Nigeria',
    openGraph: {
        type: 'website',
        url: 'https://gracelogisticsfoodanditems.vercel.app/',
        title: 'Grace Logistics Foods & Items (GLFI) | Global Shipping & Sourcing',
        description: 'Professional logistics and authentic Nigerian food sourcing. Connecting Nigeria to the world with excellence.',
        images: [{ url: '/image/logoaslouseasfavicon.jpeg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grace Logistics Foods & Items (GLFI) | Global Shipping',
        description: 'Professional logistics and authentic Nigerian food sourcing. Connecting Nigeria to the world with excellence.',
        images: ['/image/logoaslouseasfavicon.jpeg'],
    },
    icons: {
        icon: '/image/logoaslouseasfavicon.jpeg',
        apple: '/image/logoaslouseasfavicon.jpeg',
    },
    alternates: {
        canonical: 'https://gracelogisticsfoodanditems.vercel.app/',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Grace Logistics Foods & Items (GLFI)',
    image: 'https://gracelogisticsfoodanditems.vercel.app/image/logoaslouseasfavicon.jpeg',
    '@id': 'https://gracelogisticsfoodanditems.vercel.app',
    url: 'https://gracelogisticsfoodanditems.vercel.app',
    telephone: '+2348033204246',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 12 Afari Ogun street oshodi',
        addressLocality: 'Lagos',
        addressRegion: 'Lagos State',
        postalCode: '100261',
        addressCountry: 'NG',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 6.551,
        longitude: 3.344,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        opens: '08:00',
        closes: '18:00',
    },
    sameAs: [
        'https://www.facebook.com/gracelogistics',
        'https://www.instagram.com/gracelogistics'
    ],
    priceRange: '$$',
    description: 'Specialized logistics and food sourcing agent connection Nigeria to the UK, USA, Canada, and global destinations.'
};

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Grace Logistics Foods & Items',
    url: 'https://gracelogisticsfoodanditems.vercel.app',
    logo: 'https://gracelogisticsfoodanditems.vercel.app/image/logoaslouseasfavicon.jpeg',
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+2348033204246',
        contactType: 'customer service',
        areaServed: 'Global',
        availableLanguage: ['English']
    },
    sameAs: [
        'https://www.facebook.com/gracelogistics',
        'https://www.instagram.com/gracelogistics'
    ]
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://gracelogisticsfoodanditems.vercel.app/'
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Food Shipping',
            item: 'https://gracelogisticsfoodanditems.vercel.app/food-shipping'
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Services',
            item: 'https://gracelogisticsfoodanditems.vercel.app/services'
        },
        {
            '@type': 'ListItem',
            position: 4,
            name: 'About',
            item: 'https://gracelogisticsfoodanditems.vercel.app/about'
        },
        {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: 'https://gracelogisticsfoodanditems.vercel.app/contact'
        }
    ]
};



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                />
            </head>
            <body className="flex flex-col min-h-screen bg-[#05050a] text-white">
                <Navbar />
                <Analytics />
                <ScrollToTop />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <WhatsAppFAB />
            </body>
        </html>
    );

}
