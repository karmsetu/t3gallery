/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.js");

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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/",
      },
    ],
  },
};

export default config;
