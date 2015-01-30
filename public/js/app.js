$(function(){

	$('.btn_header').click(showDescription);
	$('.btn_header').click(shortHr);

	function showDescription(){
		$('.description').slideToggle();
	}

	function shortHr(){
		var w = $('hr').width();
		if (w == 392) {
			$('hr').css('width','50%');
			var w = $('hr').width();
		} else if(w != 392) {
			$('hr').css('width','70%');
		}
	}
	

});