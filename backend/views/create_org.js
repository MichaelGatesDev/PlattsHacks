$(document).ready(function () {
	$("form[id='create_profile']").submit(function () {
		var name = $("input[name='name']").val();
		var type = $("input[name='type']").val();
		var description = $("input[name='description']").val();
		var profile = {name: name, type: type, description: description};
		$.ajax({
			type: 'POST',
			url: '/create_org',
			data: profile,
			success: function (data) {
				location.reload();
			}
		});
	});
});