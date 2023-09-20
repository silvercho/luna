$(function(){
	/*var h = $(window).height();
	$("section").height(h);*/
	
	$(window).resize(function(){
	//화면에 사이즈에 변화를 주었을때 실행되는 내용들.
		var h = $(window).height();
		$("section").height(h);
	});
	
	$(window).trigger("resize");
	//윈도우 창 실행시 강제로 resize실행문 안에 작성된 내용을 실행.
	
	
	$(document).on("scroll",onScroll);
	
	$("#gnb li").click(function(){
		var t = $(this).children("a").attr("href");
		var off = $(t).offset().top;
		
		$(document).off("scroll");
		
		$("html,body").stop().animate({
			"scrollTop":off
		},1300, function(){
			$(document).on("scroll",onScroll);
		});
		
		$("#gnb li").removeClass("on");
		$(this).addClass("on");
		
	});
	
	function onScroll(){
		var sct = $(window).scrollTop();
		$("#gnb li").each(function(){
			var t = $(this).children("a").attr("href");
			var off = $(t).offset().top;
			var sh = $("section").height();
			
			if(sct>=off && sct<off+sh){
				$("#gnb li").removeClass("on");
				$(this).addClass("on");
				
			} 
		});
	}
	
	$("section").mousewheel(function(evnt, d){
		var i = $(this).index();
		
		if(d<0){
			var off = $(this).next().offset().top;
			if (i==3)return;
		}else if(d>0){
			var off = $(this).prev().offset().top;
			if(i==0)return;
		}
		$("html,body").stop().animate({
			"scrollTop":off
		},1300,"easeOutBounce");
		
	});
	
	$("section").mousemove(function(e){
		var x = e.pageX;
		var y = e.pagey;
		
		$(".p11").css({
			"right":20-(x/30),
			"bottom":20-(y/30)
		});
		$(".p12").css({
			"right":130+(x/20),
			"bottom":-40+(y/20)
		});
		$(".p13").css({
			"right":60+(x/20),
			"top":180+(y/20)
		});
		
		$('.p21').css({
            'right': -180 - (x/30),
            'bottom': -480 - (y/30)
        });
        $('.p22').css({
            'right': 130 + (x/50),
            'bottom': -40 + (y/50)
        });
 
     
        $('.p31').css({
            'right': 280 - (x/30),
            'bottom': 30 - (y/30)
        });
        $('.p32').css({
            'right': 110 + (x/20),
            'bottom': -270 + (y/20)
        });
        $('.p33').css({
            'right': -70 + (x/20),
            'bottom': -130 + (y/20)
        });
 
     
        $('.p41').css({
            'right': 20 - (x/30),
            'bottom': -120 - (y/30)
        });
        $('.p42').css({
            'right': 0 - (x/20),
            'bottom': -180 - (y/20)
        });
		
	});
	
	
	
	
	
});