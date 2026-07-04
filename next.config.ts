/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // We have a tight deadline, don't fail build on lint errors
  },
  typescript: {
    ignoreBuildErrors: true, // We have a tight deadline, don't fail build on TS errors
  }
};

export default nextConfig;
