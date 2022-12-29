const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "pt-BR",
  },
  reactStrictMode: false,
});

module.exports = nextConfig;
