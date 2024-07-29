/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/media",
          publicPath: "/_next/static/media",
        },
      },
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.ibb.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.postimg.cc",
        port: "",
      }
    ],
  },
};

export default nextConfig;
