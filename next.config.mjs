/** @type {import('next').NextConfig} */
const nextConfig = {
    // …any existing config…
    typescript: {
      ignoreBuildErrors: true, // skips build-time type errors
    },
  }
  
  export default nextConfig
  