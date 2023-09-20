$( function () {
	$("html,body").stop().animate({
		"scrollTop":0
	},1500,"swing");
	
	$(document).mousemove(function(e){
		var x = e.pageX/100;
		var y = e.pageY/150;
		
		$(".obj11").css({
			"left":-270-x,
			"bottom":-100-y
		});
		$(".obj12").css({
			"right":-590-x,
			"top":-85-y
		});
		$(".obj13").css({
			"left":-100+x,
			"bottom":20+y
		});
		$(".obj21").css({
			"right":-700-x,
			"bottom":-420-y
		});
		$(".obj22").css({
			"right":-50+x,
			"bottom":-100+y
		});
		$(".obj31").css({
			"right":110-x,
			"bottom":70-y
		});
		$(".obj32").css({
			"left":100-x,
			"bottom":-160-y
		});
		$(".obj41").css({
			"left":350+x,
			"bottom":-150-y
		});
		$(".obj42").css({
			"right":170+x,
			"top":-255-y
		});
		$(".obj43").css({
			"right":-100+x,
			"bottom":-120+y
		});
		$(".obj51").css({
			"left":-100-x,
			"bottom":-290-y
		});
		$(".obj52").css({
			"right":30+x,
			"top":170-y
		});
		$(".obj53").css({
			"left":-30+x,
			"bottom":0-y,
		});
	});
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		for(var i=0; i<5; i++){
			$("section article").eq(i).css({
				"transform":"translateZ("+parseInt((-5000*i)+sct)+"px)"
			});
			//perseInt = 문자혙애 데이터 혹은 모든 소수가 들어간 숫자형테이터를 정수가 지정된 숫자형데이터로 변환시켜준다.
			
			
			if(sct>=i*5000 && sct<(i+1)*5000){
				$(".scrollNav li").removeClass("on").eq(i).addClass("on");
				$("section article").removeClass("on").eq(i).addClass("on");
			}
				
			
		}
		
		
	});
	
	$(".scrollNav li").click(function(){
		var n = $(this).index();
		
		$("html, body").stop().animate({
			"scrollTop":5000*n
		},1500, "swing");
	});
	
	
	
	
});
  

















