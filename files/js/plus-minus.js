$(function() {
	// Buttons + - for Input numbers
	$(document).ready(function() {
		$('.basket-popup__numberMinus').click(function () {
			var $input = $(this).parent().find('.basket-popup__numberInput');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.basket-popup__numberPlus').click(function () {
			var $input = $(this).parent().find('.basket-popup__numberInput');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	});
});