import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Grace Logistics | Nigerian Food Shipping Experts Since 2013',
    description: 'Meet the team behind Nigeria\'s trusted food sourcing and logistics company. Based in Lagos, we ship egusi, stockfish, crayfish and authentic Nigerian groceries to the UK, USA and Canada.',
    keywords: [
        'Grace Logistics Nigeria',
        'Nigerian food shipping company Lagos',
        'Nigerian food export company',
        'ship Nigerian food to UK company',
        'trusted Nigerian logistics agent',
        'Nigerian diaspora food supplier',
        'authentic Nigerian groceries abroad',
        'GLFI Limited Lagos Nigeria',
    ].join(', '),
    alternates: {
        canonical: 'https://gracelogisticsfoodanditems.vercel.app/about',
    },
    openGraph: {
        title: 'About Grace Logistics | Nigerian Food Shipping Experts',
        description: 'Based in Lagos since 2013, we connect the Nigerian diaspora in the UK, USA and Canada to authentic Nigerian food. Trusted by thousands of families worldwide.',
        url: 'https://gracelogisticsfoodanditems.vercel.app/about',
        type: 'website',
        images: [
            {
                url: 'https://gracelogisticsfoodanditems.vercel.app/images/authentic-nigerian-palm-oil-export.jpeg',
                width: 1200,
                height: 630,
                alt: 'Grace Logistics Foods & Items - Nigerian Food Shipping',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Grace Logistics | Nigerian Food Shipping Since 2013',
        description: 'Lagos-based logistics experts shipping authentic Nigerian food to the UK, USA and Canada since 2013.',
    }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}