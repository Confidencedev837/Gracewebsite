/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.appwrite.io',
            },
            {
                protocol: 'https',
                hostname: 'appslinecargo.com',
            },
            {
                protocol: 'https',
                hostname: '**.fbcdn.net',
            },
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            },
        ],
    },
};

export default nextConfig;