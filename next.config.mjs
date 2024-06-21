/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/about",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
