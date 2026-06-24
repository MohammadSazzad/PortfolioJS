const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/PortfolioJS' : '',
  images: {
    unoptimized: true
  },
  turbopack: {
    root: path.resolve(__dirname)
  }
};

module.exports = nextConfig;
