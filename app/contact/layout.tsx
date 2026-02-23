import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Professional Nigerian Food Supplier Lagos',
    description: 'Contact GLFI for professional logistics and food sourcing. We are your reliable Nigerian food supplier in Lagos for global delivery.',
    alternates: {
        canonical: 'https://gracelogisticsfoodanditems.vercel.app/contact',
    },
    openGraph: {
        url: 'https://gracelogisticsfoodanditems.vercel.app/contact',
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

