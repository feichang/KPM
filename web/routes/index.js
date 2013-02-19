/**
 * route file
 */

var routes = require('../routes'),
    site = require('../routes/site');

module.exports = function(app){
	app.get('/', site.index);
	app.get('/create', site.create);
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
}