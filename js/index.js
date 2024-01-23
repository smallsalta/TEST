$( document ).ready
(
	function() 
	{
		console.log( "ready!" );
		
		reloj();
		setInterval( "reloj()", 1000 );
	}
);

function reloj()
{
	let f = new Date();
	let h = dosCifras( f.getHours() );
	let m = dosCifras( f.getMinutes() );
	let s = dosCifras( f.getSeconds() );
	
	$("#reloj").text( h + ":" + m + ":" + s );
}

function dosCifras(p)
{
	return p<10 ? "0"+p : p;
}