/**
 * @dec:     User Action
 * @author:  feichang <veryued@gmail.com>
 * @date:    2013-03-11 
 *
 * check user:
 * 		KISSY.IO.jsonp('/hasuser', {username: 'feichang'}, function(d){console.log(d);});
 * add user:
 * 		KISSY.IO.jsonp('/adduser', {username: 'feichang', tokenId: 123, token: 'abcd'}, function(d){console.log(d);});
 *
 * TODO:
 * 1, safe verify at add user
 */

var util = require('./util'),
	modules = require('../modules'),
	GitUser = modules.GitUser;

//check user
exports.hasuser = function(req, res){

  GitUser.find({ username: req.body.username}, function(err, docs){
	if(docs.length == 0){
		res.jsonp({
			state: 0,
			message: 'fail, the db do not exists the username'
		});
	}else{ 
  		res.jsonp({
			state: 1,
			message: 'succuss, the db exists the username',
			tokenId: docs[docs.length-1].tokenId
		});
	}
  });

};

//add user
exports.adduser = function(req, res){

	var user = new GitUser({
		username: req.body.username,
		token: req.body.token,
		tokenId: req.body.tokenId
	});
	user.save();
	res.jsonp({
		state: 1,
		message: 'add user succuss'
	});

};

