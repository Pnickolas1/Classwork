




$('#add').on('click', function(){
	addTask();
});

$('input').keypress(function(event){
	if(event.which == 13){
		addTask();
	}
});


function addTask(){
	var task = $('#newtask').val();

	$('#tasks').append('<div>' + task + 
		'<span id="delete"> X </span></div>');

	('#newtask').val('');
}
