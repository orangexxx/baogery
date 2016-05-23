(function() {
	var box = $('.budget-result');
	$('.print', box).on('click', function (ev) {
		var itemNode = $(ev.currentTarget);
		itemNode.hide();
		window.print();
		itemNode.show();
	});
})();