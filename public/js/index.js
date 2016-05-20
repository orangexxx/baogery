(function () {
	$('.nav li').on('click', function (ev) {
		$('.nav li').removeClass('active');
		$(ev.currentTarget).addClass('active');
	});
})();