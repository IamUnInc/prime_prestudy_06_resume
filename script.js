$(documet).ready(function() {
	alert($('button').length);
$('button').on('click', function() {
	$(this).find('.whole').slideToggle();
});
});
