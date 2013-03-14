/**
 * route file
 */

var routes = require('../routes'),
    site = require('../routes/site'),
    user = require('../routes/user'),
    gallery = require('../routes/gallery');

module.exports = function(app){
	app.get('/', site.index);
	app.get('/create', site.create);
	app.post('/create', site.create);
	app.get('/commit', site.commit);

	//signup
	app.get('/signup', site.signup);
	app.post('/signup', site.signup);
	//login
	app.get('/login', site.login);
	app.post('/login', site.login);
	//logout
	app.get('/logout', site.logout);
	//404
	app.get('/404', site.none);

	//home
	app.get('/home', site.home);
	app.post('/home', site.home);

	//公用接口
	//user
	app.get('/adduser', user.adduser);
	app.get('/hasuser', user.hasuser);
	//gallery
	app.get('/addgallery', gallery.addgallery);
	app.get('/getgallery', gallery.getgallery);
	app.get('/pullgallery', gallery.pullgallery);
}