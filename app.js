var httpProxy = require('http-proxy'),
    compression = require('compression'),
    express = require('express'),
    app = express();


var proxy = httpProxy.createProxyServer({
  target: process.env.HOST || 'http://example.com',
  changeOrigin: true
});

app.use(
  compression(),
  function(req, res){
    proxy.web(req, res);
  }
);

app.listen(process.env.PORT || 3000);