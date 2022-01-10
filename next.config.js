const { DEPLOY_URL } = process.env

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    DEPLOY_URL,
  },
  async rewrites() {
    return [
      {
        source: "/bar",
        destination: "/bar.html",
      },
    ]
  },
}
