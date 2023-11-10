/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  // },
  // experimental: {
  //   output: 'standalone',
  //   distDir: 'dist',
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   output: 'standalone',
//   distDir: 'dist',
// };

// module.exports = nextConfig;
