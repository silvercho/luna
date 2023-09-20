$(document).ready(function(){
	var window_h = $(window).height();
	$("#main_section").height(window_h*0.5);
	$("#about_txt_box").height(window_h*0.5);
	
	$(window).resize(function(){
		var window_h = $(window).height();
		$("#main_section").height(window_h*0.5);
		$("#about_txt_box").height(window_h*0.5);
	
	});
	
	$(window).scroll(function(){
		var window_scrollTop = $(window).scrollTop();
		if(window_scrollTop>=10){
			$("header").stop().animate({"background-color":"#fff"},400);
			$("header .gnb li .before,header .gnb li .after").css("background-color","#000");
			$("header .gnb li a").css("color","#000");
			$("#m_menu_btn .bar").css("background-color","#000");
			$(".logo .black_logo").show();
			$(".logo .white_logo").hide();
		}else{
			$("header").stop().animate({"background-color":"transparent"},400);
			$("header .gnb li a").css("color","#fff");
			$("header .gnb li .before,header .gnb li .after").css("background-color","#fff");
			$("#m_menu_btn .bar").css("background-color","#fff");
			$(".logo .black_logo").hide();
			$(".logo .white_logo").show();
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
		var fake_header_scroll = $("#black_layout").offset().top;
		
		$("html,body").stop().animate({
			"scrollTop":fake_header_scroll
		},1300);
	});
	
	$("#main_section").mouseover(function(){
		$(".fa-circle-o-notch").addClass("fa-spin");		
	});
	$("#main_section").mouseleave(function(){
		$(".fa-circle-o-notch").removeClass("fa-spin");		
	});
	var iframe = $('iframe')[0];

    var player = $f(iframe);
	$("#main_section").click(function(){
		$("#video_play_wrap").fadeIn(400);
		 player.api('play'.toLowerCase());
	});
	$(".video_close_btn").click(function(){
		$("#video_play_wrap").fadeOut(400);
		
		
        player.api('pause'.toLowerCase());

    });

});