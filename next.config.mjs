/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/mytruong-z.github.io/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/mytruong-z.github.io' : '',
  };
  
  export default nextConfig;
  