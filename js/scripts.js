document.addEventListener("DOMContentLoaded", function(event) { 
	//do work
	document.querySelector( ".hamburger" )
		.addEventListener( "click", function() {
			this.classList.toggle( "is-active" );
			document.querySelector( ".menu" )
				.classList.toggle( "active" );
		});
});