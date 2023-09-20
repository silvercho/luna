$(document).ready(function(){
	$(window).scroll(function(){
		var window_scrollTop = $(window).scrollTop();
		if(window_scrollTop>=10){
			$("header").css({"background-color":"rgba(255,255,255,1)"});
			$("header .gnb li .before,header .gnb li .after").css("background-color","#000");
			$("header .gnb li a").css("color","#000");
			$("#m_menu_btn .bar").css("background-color","#000");
			$(".logo .black_logo").show();
			$(".logo .white_logo").hide();
		}else if(window_scrollTop<10){
			$("header").css({"background-color":"rgba(255,255,255,0)"});
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