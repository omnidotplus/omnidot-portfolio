/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // the design uses art-directed source assets at fixed sizes; no remote loaders needed
    unoptimized: true
  }
};
export default nextConfig;
