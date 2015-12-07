var clicked;

$(document).ready(function() {

	// Hook hash
	var url = document.URL;
	var ind = url.indexOf('#');
	clicked = "a#aboutl";
	if(ind < 0) { ind = 0; }
	switch(url.substring(ind)) {
		case "#about":
			clicked = "a#aboutl";
			$('#partial').load('partials/about.html');
			break;
		case "#news":
			clicked = "a#newsl";
			$('#partial').load('partials/news.html');
			break;
		case "#resources":
			clicked = "a#resourcesl";
			$('#partial').load('partials/resources.html');
			break;
		case "#calendar":
			clicked = "a#calendarl";
			$('#partial').load('partials/calendar.html');
			break;
		default:
			$('#partial').load('partials/about.html');
	}
	function endclick() {
		window.setTimeout(function() {
			$('#pwrap').css('opacity',1);
			$('#content').css('max-height',2000);
			window.setTimeout(function(){$('#content').css('max-height',$('#content').height()+100);},500);
		}, 300);
	};
	$(clicked).addClass('engaged');
	$('#pwrap').css('opacity',1);
	$('#content').css('max-height',2000);
	// Hook click functions
	$('a#aboutl').click(function () {
		if(clicked === "a#aboutl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#aboutl";
		$(clicked).addClass('engaged');
		$('#content').css('max-height',0);
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/about.html',endclick());
		}, 250);
	});
	$('a#resourcesl').click(function () {
		if(clicked === "a#resourcesl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#resourcesl";
		$(clicked).addClass('engaged');
		$('#content').css('max-height',0);
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/resources.html',endclick());
		}, 250);
	});
	$('a#newsl').click(function () { 
		if(clicked === "a#newsl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#newsl";
		$(clicked).addClass('engaged');
		$('#content').css('max-height',0);
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/news.html',endclick());
		}, 250);
	});
	$('a#calendarl').click(function () {
		if(clicked === "a#calendarl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#calendarl";
		$(clicked).addClass('engaged');
		$('#content').css('max-height',0);
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/calendar.html',endclick());
		}, 250);
	});
});
