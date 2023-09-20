$(function(){

		$(".full_down_btn").click(function(){
		
		
		$(".full_down").stop().animate({
			"left":"90px"
		},600);
		
		$(".full_down_btn_x").fadeIn();
		$(".full_down_btn").fadeOut();
		
	});
	
	$(".full_down_btn_x").click(function(){
		
		$(".full_down").stop().animate({
			"left":"-300px"
		},600);
		
		$(".full_down_btn").fadeIn();
		$(".full_down_btn_x").fadeOut();
		
	});
	
	 $(".slide_btn").click(function(){
		 $(".article1_tit").stop().css({
			 "opacity":0,
			 "transform":"translateY(15%)"})
			 .animate({
			 "opacity":1,
			 "transform":"translateY(0)"
		 },2000);
	 });
	
	 $(".slide_btn_12").click(function(){
		 $(".article1 > ul").stop().animate({
			 "left":"-100%"
		 },600);
		
		 $(".slide_btn_12").addClass("on");
		 $(".slide_btn_11").removeClass("on");
		
		
	 });
	
	 $(".slide_btn_11").click(function(){
		 $(".article1 > ul").stop().animate({
			 "left":"0"
		 },600);
		
		 $(".slide_btn_11").addClass("on");
		 $(".slide_btn_12").removeClass("on");
		
	 });
	
	
	 $(".slide_btn_22").click(function(){
		
		 $(".article2_left_ul").stop().animate({
			 "left":"-100%"
		 },600);
		
		 $(".lavender_tit").fadeOut();
		 $(".pearl_tit").fadeIn();
		
		 $(".slide_btn_22").addClass("on");
		 $(".slide_btn_21").removeClass("on");
		
		 $(".second").stop().animate({
			"transform":"rotateY(180deg)"
		 });
		
		 $(".first").css("transform","rotateY(-180deg)");
		
		
	 });
	
	 $(".slide_btn_21").click(function(){
		
		 $(".pearl_tit").fadeOut();
		 $(".lavender_tit").fadeIn();
		
		 $(".slide_btn_21").addClass("on");
		 $(".slide_btn_22").removeClass("on");

		
		 $(".article2_left_ul").stop().animate({
			 "left":"0"
		 },600);
		
		 $(".first").stop().animate({
			"transform":"rotateY(180deg)"
		 });
		
		 $(".second").css("transform","rotateY(-180deg)");
		
	 });
	 
	 $(".slide_btn_32").click(function(){
		 $(".dragable > ul").stop().animate({
			 "left":"-100%"
		 },600);
		
		 $(".slide_btn_32").addClass("on");
		 $(".slide_btn_31").removeClass("on");
		
		
	 });
	
	 $(".slide_btn_31").click(function(){
		 $(".dragable > ul").stop().animate({
			 "left":"0"
		 },600);
		
		 $(".slide_btn_31").addClass("on");
		 $(".slide_btn_32").removeClass("on");
		
	 });
	
	
	$(window).resize(function(){
	
		var h = $(window).height();
		$(".article").height(h);
		
	});
	
	$(window).trigger("resize");

	$(window).on("scroll",onScroll);
	$(".pager_box li").click(function(){
		var t = $(this).children("a").attr("href");
		var off = $(t).offset().top;
		
		$(window).off("scroll");
		
		$("html,body").stop().animate({
			"scrollTop":off
		},1300,function(){
			$(window).on("scroll",onScroll);
		});
		
		$(".pager_box li").removeClass("circle");
		$(this).addClass("circle");
	
	});
	
	function onScroll(){
		var sct = $(window).scrollTop();
		
		$(".pager_box li").each(function(){
			var t = $(this).children("a").attr("href");
			var off = $(t).offset().top;
			var sh = $(".article").height();
			
			if(sct>=off && sct<off+sh){
				$(".pager_box li").removeClass("circle");
				$(this).addClass("circle");
			}
		});
	}
	
	$(".article").mousewheel(function(event, d){
		var i = $(this).index();
		
		if(d<0){
			 var off = $(this).next().offset().top;
			 if(i==6)return;
		 }else if(d>0){
			 var off = $(this).prev().offset().top;
			 if(i==0)return;
		 }
		
		 $("html,body").stop().animate({
			 "scrollTop":off
		 },1300);
	
	 });
	
	$(".article").mousemove(function(e){
		var x = e.pageX;
		var y = e.pageY;
	
		$(".img").css({
			"right":200-(x/30),
			"bottom":100-(y/30)
		});
		
	});	
	
});	