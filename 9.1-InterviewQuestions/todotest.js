
$('#add').on('click', function(){
	addTask();

});


function addTask(){
	var task = $('#newtask').val();
	console.log(task)

$('#tasks').append("<div>" + task + '<span id="delete"> X </span></div>'
	)

$('#newtask').val('');
}

$('input').keypress(function(event){
	if (event.which ==13){
		addTask();
	}
});

function removeItem(){
	$(this).closest('div').remove();
}


