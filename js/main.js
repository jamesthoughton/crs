$(document).ready(function() {

	var clicked;
	var clicking = 0;

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
			window.setTimeout(function(){$('#content').css('max-height',100000);clicking=0;},500);
		}, 300);
	};
	$(clicked).addClass('engaged');
	$('#pwrap').css('opacity',1);
	// window.setTimeout(function(){$('#content').css('max-height',100000);$('#content').css('max-height',$('#content').height()+100);},500);
	// Hook click functions
	$('a#aboutl').click(function () {
		if(clicked === "a#aboutl" || clicking === 1) return;
		$('#content').removeClass('mhtransition');
		$('#content').css('max-height',$('#content').height()+100)
		window.setTimeout(function(){$('#content').addClass('mhtransition');$('#content').css('max-height',0);},10);
		clicking = 1;
		$(clicked).removeClass('engaged');
		clicked = "a#aboutl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/about.html',endclick());
		}, 600);
	});
	$('a#resourcesl').click(function () {
		if(clicked === "a#resourcesl" || clicking === 1) return;
		$('#content').removeClass('mhtransition');
		$('#content').css('max-height',$('#content').height()+100)
		window.setTimeout(function(){$('#content').addClass('mhtransition');$('#content').css('max-height',0);},10);
		clicking = 1;
		$(clicked).removeClass('engaged');
		clicked = "a#resourcesl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/resources.html',endclick());
		}, 600);
	});
	$('a#newsl').click(function () { 
		if(clicked === "a#newsl" || clicking === 1) return;
		$('#content').removeClass('mhtransition');
		$('#content').css('max-height',$('#content').height()+100)
		window.setTimeout(function(){$('#content').addClass('mhtransition');$('#content').css('max-height',0);},10);
		clicking = 1;
		$(clicked).removeClass('engaged');
		clicked = "a#newsl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/news.html',endclick());
		}, 600);
	});
	$('a#calendarl').click(function () {
		if(clicked === "a#calendarl" || clicking === 1) return;
		$('#content').removeClass('mhtransition');
		$('#content').css('max-height',$('#content').height()+100)
		window.setTimeout(function(){$('#content').addClass('mhtransition');$('#content').css('max-height',0);},10);
		clicking = 1;
		$(clicked).removeClass('engaged');
		clicked = "a#calendarl";
		$(clicked).addClass('engaged');
		$('#pwrap').css('opacity',0);
		window.setTimeout(function () {
			$('#partial').load('partials/calendar.html',endclick());
		}, 600);
	});
	$(".loading").addClass("invisible");
});
