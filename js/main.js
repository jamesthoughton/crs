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
	$(clicked).addClass('engaged');
	$('#pwrap').css('opacity',1);
	// Hook click functions
	$('a#calendarl').click(function () {
		if(clicked === "a#calendarl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#calendarl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/calendar.html',function(){$('#pwrap').css('opacity',1);});
		}, 200);
	});
	$('a#aboutl').click(function () {
		if(clicked === "a#aboutl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#aboutl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/about.html',function(){$('#pwrap').css('opacity',1);});
		}, 200);
	});
	$('a#resourcesl').click(function () {
		if(clicked === "a#resourcesl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#resourcesl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/resources.html',function(){$('#pwrap').css('opacity',1);});
		}, 200);
	});
	$('a#newsl').click(function () { 
		if(clicked === "a#newsl") return;
		$(clicked).removeClass('engaged');
		clicked = "a#newsl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/news.html',function(){$('#pwrap').css('opacity',1);});
		}, 200);
	});
});
