const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/auth", "/api", "/media"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};