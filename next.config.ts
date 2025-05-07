import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig) => {
    const rules = config.module?.rules || []; // Get existing rules or empty array
    config.module = {
      ...config.module, // Spread existing module config
      rules: [
        ...rules, // Spread existing rules
        {
          test: /\.svg$/, // Match .svg files
          use: ["@svgr/webpack"], // Use SVGR loader
        },
      ],
    };
    return config; // Return modified config
  },
};

export default nextConfig;
