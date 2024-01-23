$( document ).ready
(
	function() 
	{
		console.log( "ready!" );
		
		reloj();
	}
);

function reloj()
{
	let f = new Date();
	let h = f.getHours();
	let m = f.getMinutes();
	let s = f.getSeconds();
	
	$("#reloj").text( h + ":" + m + ":" + s );
}