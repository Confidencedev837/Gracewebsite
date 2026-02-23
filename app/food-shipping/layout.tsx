import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ship Nigerian Food to UK, USA & Canada | Grace Logistics',
    description: 'Send egusi, stockfish, crayfish, jollof rice, pounded yam and more from Nigeria to the UK, USA and Canada. Fast, affordable and export-compliant. Order today.',
    keywords: [
        // High intent UK searches
        'ship Nigerian food to UK',
        'send egusi to UK',
        'Nigerian food delivery UK',
        'ship stockfish from Nigeria to UK',
        'send crayfish to UK from Nigeria',
        'Nigerian groceries UK delivery',
        'ship pounded yam flour to UK',
        'send ogbono soup to UK',
        // USA searches
        'send Nigerian food to USA',
        'ship Nigerian groceries to America',
        'Nigerian food delivery USA',
        'send egusi to USA from Nigeria',
        // Canada searches
        'Nigerian food shipping Canada',
        'send Nigerian food to Canada',
        // General
        'ship foodstuff from Nigeria',
        'Nigerian food export Lagos',
        'affordable Nigerian food shipping',
        'how to send food from Nigeria to UK',
    ].join(', '),
    alternates: {
        canonical: 'https://gracelogisticsfoodanditems.vercel.app/food-shipping',
    },
    openGraph: {
        title: 'Ship Nigerian Food to UK, USA & Canada | Grace Logistics',
        description: 'Miss the taste of home? We ship egusi, stockfish, crayfish, and all your favourite Nigerian foods directly to your door in the UK, USA and Canada.',
        url: 'https://gracelogisticsfoodanditems.vercel.app/food-shipping',
        type: 'website',
        images: [
            {
                url: 'https://gracelogisticsfoodanditems.vercel.app/images/nigerian-food-shipping-to-uk.jpg',
                width: 1200,
                height: 630,
                alt: 'Grace Logistics - Nigerian Food Shipping to UK, USA and Canada and Others',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ship Nigerian Food to UK, USA & Others',
        description: 'Send egusi, stockfish, crayfish and more from Nigeria to your family abroad. Fast and affordable.',
    }
};

export { default } from './page.tsx';