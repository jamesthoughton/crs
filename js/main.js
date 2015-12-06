var clicked;

$(document).ready(function() {

	// Hook hash
	var url = document.URL;
	var ind = url.indexOf('#');
	clicked = "a#aboutl";
	if(ind > 0) {
		switch(url.substring(ind)) {
			case "#about":
				clicked = "a#aboutl";
				break;
			case "#news":
				clicked = "a#newsl";
				break;
			case "#resources":
				clicked = "a#resourcesl";
				break;
			case "#calendar":
				clicked = "a#calendarl";
				break;
		}
	}
	$('#pwrap').css('opacity',1);
	// Hook click functions
	$('a#calendarl').click(function () {
		$('#pwrap').css('opacity',0);
		$('#partial').load('partials/calendar.html',function(){$('#pwrap').css('opacity',1);});
		$(clicked).removeClass('engaged');
		clicked = "a#calendarl";
		$(this).addClass('engaged');
	});
	$('a#aboutl').click(function () {
		$('#pwrap').css('opacity',0);
		$('#partial').load('partials/about.html',function(){$('#pwrap').css('opacity',1);});
		$(clicked).removeClass('engaged');
		clicked = "a#aboutl";
		$(this).addClass('engaged');
	});
	$('a#resourcesl').click(function () {
		$('#pwrap').css('opacity',0);
		$('#partial').load('partials/resources.html',function(){$('#pwrap').css('opacity',1);});
		$(clicked).removeClass('engaged');
		clicked = "a#resourcesl";
		$(this).addClass('engaged');
	});
	$('a#newsl').click(function () { 
		$('#pwrap').css('opacity',0);
		$('#partial').load('partials/news/news.php',function(){$('#pwrap').css('opacity',1);});
		$(clicked).removeClass('engaged');
		clicked = "a#newsl";
		$(this).addClass('engaged');
	});
	$(clicked).click(); // Click about
});
