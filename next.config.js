const withFonts = require('next-fonts');
const withImages = require('next-images');

const nextConfig = {
  transpilePackages: ['@react95/core', '@react95/icons'],
  images: {
    disableStaticImages: true,
  },
  trailingSlash: true,
};

module.exports = withFonts(withImages(nextConfig));
