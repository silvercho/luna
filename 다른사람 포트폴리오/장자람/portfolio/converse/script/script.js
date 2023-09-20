$(function(){
	
	$(window).resize(function(){
		var h = $(window).height();
		$("section").height(h);
	});
	
	$(window).trigger("resize");
	
	$("section").on("mousewheel DOMMouseScroll",function(event,y){
		if(y<0){
			var s = $(this).next().offset().top;
		}else if(y>0){
			var s = $(this).prev().offset().top;
		}
		$("html,body").stop().animate({
			"scrollTop":s
		},1300,"easeOutBounce"); 
		
	});
	
	$(window).on("scroll",onScroll);
	
	function onScroll(){
		var scr = $(window).scrollTop();
		
		$("#menu li").each(function(){
			var t = $($(this).children("a").attr("href"));
			var off = t.offset().top;
			
			if(scr>=off && scr<off+t.height()){
				$("#menu li").removeClass("on");
				$(this).addClass("on");
			}
		});
	}
	
	$("#menu li").click(function(){
		$(window).off("scroll");
		
		var target = $(this).children("a").attr("href");
		var off = $(target).offset().top;
		
		$("#menu li").removeClass("on");
		$(this).addClass("on");
		
		$("html,body").stop().animate({
			"scrollTop":off
		},1300,function(){
			$(window).on("scroll", onScroll);		
		});
		
	});

});