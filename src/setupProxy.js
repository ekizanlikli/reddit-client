const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'https://www.reddit.com/',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/reddit-api': '',
    },
    // logLevel: 'debug',
}
module.exports = function(app) {
  app.use(
    '/reddit-api',
    createProxyMiddleware(proxy)
  );
};