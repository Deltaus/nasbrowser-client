const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/media", "/auth", "/api"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};