$(document).ready(function(){
	

	$(window).scroll(function(){
		var window_scroll_top = $(window).scrollTop();

		$(".video_img_cover").each(function(){
			var window_height = $(window).height()/1.1;
			var img_offset = $(this).offset().top-window_height;

			if(window_scroll_top > img_offset){
				$(this).animate({
					"transform":"translateY(0)",
					"opacity":"1"
				},800);
			}
		});
	});

	$(window).trigger("scroll");



});