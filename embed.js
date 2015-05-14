$.ajax({
	async:false,
	url: 'ArtsandLetters.txt',
	dataType: 'text',
	success: function(data)
	{
	$('element').append(data);
	}
	});

