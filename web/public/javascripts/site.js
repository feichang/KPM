KISSY.add('create', function(S, Node, IO){
	var $ = Node.all,
		io = IO;
	$('.J_galleryLabel').on('click', function(){
		$(this).addClass('hidden');
		$('.J_galleryName').fire('focus');
	});

	function postData(url, p, cb){
		io.post(url, p, function(d){
			cb(d);
		});
	}

	$('.J_createGallery').on('click', function(e){
		var p = {
			gallery_name: $('.J_galleryName').val()
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


KISSY.add('signup', function(S, Node, IO){
	var $ = Node.all,
		io = IO;

	function postData(url, p, cb){
		io.post(url, p, cb);
	}

	$('.J_signupOk').on('click', function(e){
		var p = {
			username: $('.J_username').val(),
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

KISSY.add('error', function(S){
	setTimeout(function(){
		location.href = '/';
	}, 3000);
});