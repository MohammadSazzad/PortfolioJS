const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  turbopack: {
    root: path.resolve(__dirname)
  }
};

module.exports = nextConfig;
