/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

// production only
// const nextConfig = withPWA({
//   // next config
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//   },
//   ...nextTranslate(),
// });

// development only
const nextConfig = {
  // next config
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...nextTranslate(),
};

module.exports = nextConfig;
