$(function(){
	
	$(window).trigger("resize");
		setTimeout(function(){
			$(".video_wrap video").trigger("play");
		});


	$(window).scroll(function(){
		var s = $(this).scrollTop();
		if(s>=$(window).height()){
			$("header").css({
				"position":"fixed",
				"top":"0"
			});
		}else{
			$("header").css({
				"position":"absolute",
				"top":"100%"
			});
		}
	});
});