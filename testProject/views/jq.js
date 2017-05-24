$(document).ready(function(){

$("#req_GET").click(function () {
	$.get('index2.php?name=re&firstname=te', function(data){
		console.log(data);
	});

	$.getJSON(
		'index2.php',
		{
			"name" : "re",
			"firstname" : "te"
		},
		function(data){
			console.log(data);
		}
	);

	});
});
