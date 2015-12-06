var clicked;

$(document).ready(function() {
	var url = document.URL;
	var ind = url.indexOf('#');
	clicked = "a#aboutl";
	if(ind > 0) {
		console.log(url.substring(ind));
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
	// Hook click functions
	$('a#calendarl').click(function () {
		$('#partial').load('partials/calendar.html');
		$(clicked).removeClass('engaged');
		clicked = "a#calendarl";
		$(this).addClass('engaged');
	});
	$('a#aboutl').click(function () {
		$('#partial').load('partials/about.html');
		$(clicked).removeClass('engaged');
		clicked = "a#aboutl";
		$(this).addClass('engaged');
	});
	$('a#resourcesl').click(function () {
		$('#partial').load('partials/resources.html');
		$(clicked).removeClass('engaged');
		clicked = "a#resourcesl";
		$(this).addClass('engaged');
	});
	$('a#newsl').click(function () { 
		$('#partial').load('partials/news/news.php');
		$(clicked).removeClass('engaged');
		clicked = "a#newsl";
		$(this).addClass('engaged');
	});
	$(clicked).click(); // Click about
});
