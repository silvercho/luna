$(function () {
	
	$(window).resize(function(){
		var h = $(window).height();
		$("#wrap section").height(h);
	});
	
	$(window).trigger("resize");
	
	
	
	$(window).on("scroll",onScroll);
	
	function onScroll(){
		var scr = $(window).scrollTop();
		
		$("#menu li").each(function(){
			var t = $($(this).children("a").attr("href"));
			
			if(scr>=t.offset().top && scr<t.offset().top+t.height()){
				$("#menu li").removeClass("on");
				$(this).addClass("on");
			}
		});
		
	}
	
	
	$("#menu li").click(function(){
		$(window).off("scroll");
		
		var off = $(this).children("a").attr("href");
		var distance = $(off).offset().top;
		
		$("#menu li").removeClass("on");
		$(this).addClass("on");
		
		$("html, body").stop().animate({
			"scrollTop":distance
		},1300,function(){
			$(window).on("scroll",onScroll);
		});
		
		return false;		
	});
	
	$("section").mousewheel(function(event, d){
		if(d<0){
			var s = $(this).next().offset().top;
		}
		if(d>0){
			var s = $(this).prev().offset().top;
		}
		
		$("html,body").stop().animate({
			"scrollTop":s
		},1300,"easeOutBounce");
	});

	
	$(window).mousemove(function(e){
		var posX = e.clientX;
		var posY = e.clientY;
		
		$(".p11").css({
			"right":20-(posX/30),
			"bottom":20-(posY/30)
		})
		$(".p12").css({
			"right":130-(posX/20),
			"bottom":-40+(posY/20)
		})
		$(".p13").css({
			"right":60+(posX/20),
			"top":180+(posY/20)
		})
		$('.p21').css({'right':-180-(posX/30),'bottom':-480-(posY/30)});
		$('.p22').css({'right':130-(posX/50),'bottom':-40-(posY/50)});
		/*3페이지*/
		$('.p31').css({'right': 280 - (posX / 30),'bottom': 30 - (posY / 30)});
		$('.p32').css({'right': 110 + (posX / 20),'bottom': -270 + (posY / 20)});
		$('.p33').css({'right': -70 + (posX / 20),'bottom': -130 + (posY / 20)});
		 
		/*4페이지*/ 
		$('.p41').css({'right':20-(posX/30),'bottom':-120-(posY/30)});
		$('.p42').css({'right':0-(posX/20),'bottom':-180-(posY/20)});
		});
	
	
	
});