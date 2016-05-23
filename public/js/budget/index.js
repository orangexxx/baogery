(function () {
	var box = $('.budget-form');
	$('.nav-tabs li', box).on('click', function (ev) {
		var itemNode = $(ev.currentTarget);
		$('.nav-tabs li', box).removeClass('active');
		itemNode.addClass('active');
		$('.tab-box', box).hide();
		$('.tab-box.' + itemNode.attr('data-tag'), box).show();
		$('.formType', box).attr('value', itemNode.attr('data-type'));
	});
	$('form', box).validate({
		submitHandler: function (form) {
			form.submit();
		},
		invalidHander: function (event, validator) {

		},
		rules: {
			username: 'required',
			discount: {
				number: true,
				range: [0.1, 9.9]
			},
			chuUpLen: {
				number: true,
				range: [0.1, Infinity]
			},
			chuDownLen: {
				number: true,
				range: [0.1, Infinity],
				required: {
					param: true,
					depends: function (element) {
						return $('.formType', box).attr('value') === 'cupboard';
					}
				}
			},
			yiWidth: {
				number: true,
				range: [0.1, Infinity],
				required: {
					param: true,
					depends: function (element) {
						return $('.formType', box).attr('value') === 'wardrobe';
					}
				}
			},
			yiHeight: {
				number: true,
				range: [0.1, Infinity],
				required: {
					param: true,
					depends: function (element) {
						return $('.formType', box).attr('value') === 'wardrobe';
					}
				}
			},
			yiParam: {
				number: true,
				range: [0.1, Infinity]
			}
		},
		messages: {
			username: '请输入顾客姓名',
			discount: '请输入0-10的数字',
			chuUpLen: '请输入大于0的数字',
			chuDownLen: '请输入大于0的数字',
			yiWidth: '请输入大于0的数字',
			yiHeight: '请输入大于0的数字',
			yiParam: '请输入大于0的数字'
		}
	});
})();