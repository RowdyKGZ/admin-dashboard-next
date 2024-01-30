/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "avatars.mds.yandex.net" }],
  },
};

export default nextConfig;
