/**
 * @dec:     Gallery Action
 * @author:  feichang <veryued@gmail.com>
 * @date:    2013-03-11 
 *
 * TODO:
 * 1, safe verify at add gallery
 */

var util = require('./util'),
	modules = require('../modules'),
	Gallery = modules.Gallery;

//add gallery
exports.addgallery = function(req, res){
	Gallery.find({ name: req.body.name}, function(err, docs){
		if(docs.length != 0){
			res.json({
				state: 0,
				message: 'Fail! The db already exists the gallery name.'
			});
		}else{ 

			var gallery = new Gallery({
				name: req.body.name,
				owner: req.body.owner,
				category: 0, //0 为未分类
				state: 1 // 1为开发状态  2为已经提交等待审核状态  3为已发布状态
			});
			gallery.save();

			res.jsonp({
				state: 1,
				message: 'Succuss! Create gallery succuss.'
			});
		}
	});
};

//获取gallery
exports.getgallery = function(req, res){
	Gallery.find({}, function(err, docs){
		res.jsonp({
			gallery: docs,
			state: docs[0].state
		});
	});
}

exports.pullgallery = function(req, res){
	Gallery.findOne({name: req.body.name},function(err, doc){
		doc.state = 2;
		doc.save();
		res.jsonp({
			state: 1,
			message: 'pull succuss'
		});

		//发送邮件给管理员
	});
}

