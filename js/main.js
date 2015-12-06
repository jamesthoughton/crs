var clicked;

$(document).ready(function() {

	// Hook click functions
	clicked = "a#about";
	$('a#calendar').click(function () {
		$('#partial').load('partials/calendar.html #content');
		$(clicked).removeClass('engaged');
		clicked = "a#calendar";
		$(this).addClass('engaged');
	});
	$('a#about').click(function () {
		$('#partial').load('partials/about.html #content');
		$(clicked).removeClass('engaged');
		clicked = "a#about";
		$(this).addClass('engaged');
	});
	$('a#resources').click(function () {
		$('#partial').load('partials/resources.html #content');
		$(clicked).removeClass('engaged');
		clicked = "a#resources";
		$(this).addClass('engaged');
	});
	$('a#news').click(function () { 
		$('#partial').load('partials/news/news.php #content');
		$(clicked).removeClass('engaged');
		clicked = "a#news";
		$(this).addClass('engaged');
	});
	$(clicked).click(); // Click about
});
