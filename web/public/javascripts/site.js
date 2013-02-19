KISSY.add('create', function(S, Node){
	var $ = Node.all;
	$('.J_galleryLabel').on('click', function(){
		$(this).addClass('hidden');
		$('.J_galleryName').fire('focus');
	});
}, {
	requires: ['node']
});


KISSY.add('signup', function(S, Node, IO){
	var $ = Node.all,
		io = IO;

	function postData(url, p){
		io.post(url, p, function(d){
			console.log(d);
		});
	}

	$('.J_signupOk').on('click', function(e){
		var p = {
			username: $('.J_username').val(),
			password: $('.J_password').val(),
			email: $('.J_email').val()
		};

		postData($('.J_form').attr('data-url'), p);
	});
}, {
	requires: ['node', 'ajax']
});


KISSY.add('login', function(S, Node, IO){
	var $ = Node.all,
		io = IO;

	function postData(url, p, cb){
		io.post(url, p, function(d){
			cb(d);
		});
	}

	$('.J_loginOk').on('click', function(e){
		var p = {
			password: $('.J_password').val(),
			email: $('.J_email').val()
		};

		postData($('.J_form').attr('data-url'), p, function(d){
			if(d.state == 1){
				location.href = '/home';
			}
		});
	});
}, {
	requires: ['node', 'ajax']
});


KISSY.add('home', function(S, Node, IO){
	var $ = Node.all,
		io = IO;

	function postData(url, p, cb){
		io.post(url, p, function(d){
			cb(d);
		});
	}

	$('.J_loginOk').on('click', function(e){
		var p = {
			password: $('.J_password').val(),
			email: $('.J_email').val()
		};

		postData($('.J_form').attr('data-url'), p, function(d){
			if(d.state == 1){
				location.href = '/home';
			}
		});
	});
}, {
	requires: ['node', 'ajax']
});