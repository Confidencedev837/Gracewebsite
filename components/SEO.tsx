
import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, ogImage, ogUrl }) => {
    useEffect(() => {
        document.title = `${title} | Grace Logistics Foods & Items (GLFI)`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            if (keywords) {
                metaKeywords.setAttribute('content', keywords);
            }
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', description);

        if (ogImage) {
            const ogImg = document.querySelector('meta[property="og:image"]');
            if (ogImg) ogImg.setAttribute('content', ogImage);
        }

        if (ogUrl) {
            const ogU = document.querySelector('meta[property="og:url"]');
            if (ogU) ogU.setAttribute('content', ogUrl);

            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) canonical.setAttribute('href', ogUrl);
        }
    }, [title, description, keywords, ogImage, ogUrl]);

    return null;
};

export default SEO;
