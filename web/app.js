
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    config = require('./config').config;

var app = express();

console.log(config);
app.configure(function(){
  app.set('port', process.env.PORT || config.port || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());//解析cookie
  //设置session
  app.use(express.session({
    secret: 'feichang'
  }));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  
  //错误处理
  app.use(function(req, res, next){
    res.status(404);

    if (req.accepts('html')) {
      res.render('404', { title: '404' });
      return;
    }

    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }

    res.type('txt').send('Not found');
  });
  
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//routes
routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

module.exports = app;
