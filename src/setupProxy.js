const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  //本地跨域
  app.use(
    createProxyMiddleware("/api/xxxxx", {   //根据请求前缀进行判断
      target: "xxxxxxxx",   //代理的域名地址
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api": "",
      },
      onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader('cookie', 'PHPSESSID=pbenl2egj2s27pvknbq12u8ocl');     //参数
      }
    }),
  );
};
