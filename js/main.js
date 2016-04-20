$( document ).ready( function() {
		$( '#menu' ).hover(
		function() {
			$( this ).prop( 'src', 'img/menuactive.png' );
		},
		function() {
			$( this ).prop( 'src', 'img/menuinactive.png' );
		}
	);
	$( '#specials' ).hover(
		function() {
			$( this ).prop( 'src', 'img/specialsactive.png' );
		},
		function() {
			$( this ).prop( 'src', 'img/specialsinactive.png' );
		}
	);
	$( '#events' ).hover(
		function() {
			$( this ).prop( 'src', 'img/eventsactive.png' );
		},
		function() {
			$( this ).prop( 'src', 'img/eventsinactive.png' );
		}
	);
	$( '#contact' ).hover(
		function() {
			$( this ).prop( 'src', 'img/contactactive.png' );
		},
		function() {
			$( this ).prop( 'src', 'img/contactinactive.png' );
		}
	);
	var contentdivs = document.getElementsByClassName( 'maincontent' );
	for ( var i = 0; i < contentdivs.length; i++ ) {
		contentdivs[ i ].style.display = 'none';
	}
	document.getElementById( 'menucontent' ).style.display = 'block';
	document.getElementById( 'specials' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'specialscontent' ).style.display = 'block';
	};
	document.getElementById( 'events' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'eventscontent' ).style.display = 'block';
	};
	document.getElementById( 'contact' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'contactcontent' ).style.display = 'block';
	};
	document.getElementById( 'menu' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'menucontent' ).style.display = 'block';
	};
	document.getElementById( 'footerspecials' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'specialscontent' ).style.display = 'block';
	};
	document.getElementById( 'footerevents' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'eventscontent' ).style.display = 'block';
	};
	document.getElementById( 'footercontact' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'contactcontent' ).style.display = 'block';
	};
	document.getElementById( 'footermenu' ).onclick = function( event ) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i = 0; i < contentdivs.length; i++ ) {
			contentdivs[ i ].style.display = 'none';
		}
		document.getElementById( 'menucontent' ).style.display = 'block';
	};
	$( 'h1' ).addGlow( {
		radius: 20,
		haloColor: '#0055a0',
		duration: 200
	} );
	$( 'body' ).jstars( {
		image_path: 'img'
	} );
} );
