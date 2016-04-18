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
});