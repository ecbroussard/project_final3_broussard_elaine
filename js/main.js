$( document ).ready(function() {
	$("#menu").hover(
		function() {
			$(this).prop("src", "img/menuactive.png");
		},
		function() {
			$(this).prop("src", "img/menuinactive.png");
		}
	);
	$("#specials").hover(
		function() {
			$(this).prop("src", "img/specialsactive.png");
		},
		function() {
			$(this).prop("src", "img/specialsinactive.png");
		}
	);
	$("#events").hover(
		function() {
			$(this).prop("src", "img/eventsactive.png");
		},
		function() {
			$(this).prop("src", "img/eventsinactive.png");
		}
	);
	$("#contact").hover(
		function() {
			$(this).prop("src", "img/contactactive.png");
		},
		function() {
			$(this).prop("src", "img/contactinactive.png");
		}
	);
	document.getElementById( 'specials').onclick = function(event) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i=0; i < contentdivs.length; i++) {
			contentdivs[i].style.display = 'none';
		}
		document.getElementById('specialscontent').style.display='block';
	}
	document.getElementById( 'events').onclick = function(event) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i=0; i < contentdivs.length; i++) {
			contentdivs[i].style.display = 'none';
		}
		document.getElementById('eventscontent').style.display='block';
	}
	document.getElementById( 'contact').onclick = function(event) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i=0; i < contentdivs.length; i++) {
			contentdivs[i].style.display = 'none';
		}
		document.getElementById('contactcontent').style.display='block';
	}
	document.getElementById( 'menu').onclick = function(event) {
		var contentdivs = document.getElementsByClassName( 'maincontent' );
		for ( var i=0; i < contentdivs.length; i++) {
			contentdivs[i].style.display = 'none';
		}
		document.getElementById('menucontent').style.display='block';
	}
});