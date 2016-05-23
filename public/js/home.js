(function () {
	var box = $('.home-view');
	var url = location.href;
	var menuItems = $('.main-navbar li');
	if (url.indexOf('#about') > -1) {
		menuItems.eq(1).addClass('active');
	} else if (url.indexOf('#cases') > -1) {
		menuItems.eq(2).addClass('active');
	} else {
		menuItems.eq(0).addClass('active');
	}

	menuItems.on('click', function (ev) {
		var menuNode = $(ev.currentTarget);
		if (menuNode.hasClass('homeM')) {
			ev.preventDefault();
			menuItems.removeClass('active');
			menuNode.addClass('active');
			var href = $('a', ev.currentTarget).attr("href");
	    	var pos = $(href).offset().top;
	    	$("html,body").animate({ scrollTop: pos }, 400);
		}
	});
})();