// next.config.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://feedbackform-next-js.onrender.com/:path*", // Proxy to the backend
      },
    ];
  },
};
