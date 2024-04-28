/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.js");

import { hostname } from "os";

// /** @type {import("next").NextConfig} */
// const config = {};

// const images = {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "utfs.io",
//       port: "",
//       pathname: "*",
//     },
//   ],
// };

// export { images };

// export default config;

const config = {
  images: {
    //! is not working
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
