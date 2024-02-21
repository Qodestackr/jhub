/** @type {import('next').NextConfig} */

const nextConfig = {
  // devServer: { fastRefresh: true },
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com']
  }
  //useFileSystemPublicRoutes: false,
};

module.exports = nextConfig;
