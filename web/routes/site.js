
/*
 * 站点系列操作
 */
var util = require('./util'),
	github = require("github"),
	modules = require('../modules'),
	User = modules.User,
	Gallery = modules.Gallery,
	Test = modules.Test;

//首页
exports.index = function(req, res){
	if(req.session.email){
		User.findOne({ email: req.session.email }, function(err, u){
		  res.render('index', { title: 'KPM', username: u.username});
		});
	}else{
		res.render('index', { title: 'KPM', username: '登陆'});
	}
  
  User.find({ }, function(err, docs){
	console.log(docs);
		
  });
  Test.find({ }, function(err, docs){
	console.log(docs);
		
  });
};

//注册
exports.signup = function(req, res){
	var method = req.method.toLowerCase();
	if(method == 'get'){
		res.render('signup', { title: '注册KPM' });
		return;
	}
	if(method = 'post'){
		User.find({email: req.body.email }, function(err, docs){
			if(docs.length == 0){
				var user = new User({
					username: req.body.username,
					password: req.body.password,
					email: req.body.email
				});
				user.save();

				req.session.email = req.body.email;

		  		res.json({state: 1});
			}
		});
	}	
}

//登陆
exports.login = function(req, res){
	var method = req.method.toLowerCase();
	if(method == 'get'){
		if(req.session.email){
			res.redirect('/home');
		}else{
			res.render('login', { title: '登陆KPM' });
		}
	}
	if(method == 'post'){
		User.findOne({email: req.body.email }, function(err, docs){
			console.log(docs);
	  		if(docs.password == req.body.password){
	  			console.log('login succuss ~~~');
	  			req.session.email = req.body.email;
	  			console.log('~~~~~~~~');
	  			console.log(req.session);
	  			res.json({state: 1});
	  		}
	  	});
	}
}

//登出
exports.logout = function(req, res){
	var method = req.method.toLowerCase();
	if(method == 'get'){
		req.session.email = null;
		res.redirect('/');
	}
}

//404
exports.none = function(req, res){
	res.render('404', { title: '404'});
}

//主页
exports.home = function(req, res){
	var method = req.method.toLowerCase();
	console.log(req.session);
	if(method == 'get'){
		if(!req.session.email){
			res.redirect('/login');
		}else{
			Gallery.find({ owner: 'test0' }, function(err, docs){
				User.findOne({ email: req.session.email }, function(err, u){
					res.render('home', { title: '开发者中心', gallerys: docs, username: u.username});
				});
			});
		}
	}
}

//创建Gallery
exports.create = function(req, res){
  	var method = req.method.toLowerCase();
	if(method == 'get'){
		console.log('~~~~~');
		console.log(req.session);
		if(!req.session.email){
			console.log(1);
			res.redirect('/login');
		}else{
			User.findOne({ email: req.session.email }, function(err, u){
				console.log(u);
				res.render('create', { title: '生成Gallery模板', username: u.username});
			});
			Gallery.find({ owner: 'test0' }, function(err, docs){
				console.log('--------');
				console.log(docs);
			});
		}
		
	}
	if(method == 'post'){
		util.is_new_gallery();
		util.create_template_dir();
		var g = new Gallery({
			name: req.body.gallery_name ,
			owner: 'test0',
			version: '0.0.1',
			category: 1,
			state: 0
		});
		g.save();
		/*User.findOne({ email: req.session.email }, function(err, u){
			
		});*/

		res.json({state: 1});
	}
	
};









