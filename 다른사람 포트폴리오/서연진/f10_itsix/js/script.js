$(function(){
	
	$("header .rightmenu li").eq(2).click(function(){
		$("header .m_menu").slideDown();
		$("header .rightmenu").hide();
		$("header .m_menu li").eq(3).show();
	});
	
	$("header .m_menu li").eq(3).click(function(){
		$("header .m_menu").slideUp();
		$(this).hide();
		$("header .rightmenu").show();
	});
	
	
	$(window).scroll(function(){
		var scr = $(this).scrollTop();
		
		$(".center_bg li").eq(0).css({
			"top":-100+(scr/2)
		});
		$(".center_bg li").eq(1).css({
			"top":80-(scr/1.7)
		});
		$(".center_bg li").eq(2).css({
			"bottom":250-(scr/3)
		});
		$(".center_bg li").eq(3).css({
			"bottom":60-(scr/5)
		});
		$(".center_bg li").eq(4).css({
			"top":10+(scr/5)
		});
		$(".center_bg li").eq(5).css({
			"bottom":-60-(scr/2)
		});
		
	
		$(".center_bg li").eq(6).css({
			"transform":"translate(-50%,"+(-50-(scr/100))+"%)"
		});

		$("#main .hexagon").css({
			"transform":"translate(-50%,"+(-50-(scr/99.5))+"%)"
		});
		
		$(".redcarpet").css({
			"transform":"translateY("+(0-(scr/2.5))+"px)"
		});
		
		$(".port_bg li").eq(0).css({
			"transform":"translateY("+(0-(scr/1.5))+"px)"
		});
		$(".port_bg li").eq(1).css({
			"transform":"translateY("+(0-(scr/1.5))+"px)"
		});
		$(".port_bg li").eq(2).css({
			"transform":"translateY("+(0-(scr/2))+"px)"
		});
		$(".port_bg li").eq(3).css({
			"transform":"translateY("+(0-(scr/4))+"px)"
		});
		if(scr>1630){
			scr-=1630;
			$("#redcarpet2").css({
				"transform":"translateY("+(0-(scr/2.5))+"px)"
			});
			
		}
	});
	
	
});