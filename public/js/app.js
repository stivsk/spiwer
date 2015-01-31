$(function(){

	$('.btn_header').click(showDescription);
	$('.btn_header').click(shortHr);

	function showDescription(){
		$('.description').slideToggle();
	}

	function shortHr(){
		var w = $('hr').innerWidth();
		if (w <= 392 ) {
			$('hr').css('width','50%');
			var w = $('hr').width();
			console.log(w);
			if (w <= 290) {
				$('hr').css('width','70%');
			}
		}
	}

	$('#slider img:gt(0)').hide();
	setInterval(function(){
  	$('#slider img:first-child').fadeOut(0)
     .next('img').fadeIn('slow')
     .end().appendTo('#slider');}, 5000); 



});