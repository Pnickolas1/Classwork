

$(document).on('click', '#delete', removeItem);

$('#add').on('click', function () {
	addTask();
});


// BULD THE FUNCTION TO TO GET THE VALUE
function addTask(){
	var task = $('#newtask').val();

	$('#tasks').append('<div>' + task + '<span id="delete"> X </span></div>');

	$('#newtask').val('');
}


$('input').keypress(function(event){
	if (event.which == 13 ){
	addTask();
	}
});


function removeItem(){
	$(this).closest('div').remove();
}
