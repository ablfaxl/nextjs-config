/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  headers: () => {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
