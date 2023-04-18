/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        FORM_KEY: process.env.FORM_KEY,
    },
};

module.exports = nextConfig;
