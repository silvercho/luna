$(document).ready(function(){
	var window_h = $(window).height();
	$("#video_wrap").height(window_h);

	$(window).resize(function(){
		var window_h = $(window).height();
		$("#video_wrap").height(window_h);
	});

	$(window).scroll(function(){
		var window_scrollTop = $(window).scrollTop();
		var window_height = $(window).height();

		if(window_scrollTop>=window_height){
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
	
	$("#m_menu_btn").click(function(){
		$("#m_menu").stop().fadeIn(600);
	});
	$("#m_menu .mobile_close_btn").click(function(){
		$("#m_menu").stop().fadeOut(600);
	});
	$(window).resize(function(){
		var window_width = $(window).width();
		if(window_width>=800){
			$("#m_menu").hide();
		}
	});
	$(".scr_btn").click(function(){
		var fake_header_scroll = $("#fake_header").offset().top;
		
		$("html,body").stop().animate({
			"scrollTop":fake_header_scroll
		},1300);
	});
	setTimeout(function(){
		$("#video_wrap .black_cover").fadeOut(600);
		$("#video_wrap video").trigger("play");
	}, 1800);
});