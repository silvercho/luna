$(function(){  		

	$("section .nav").mouseover(function(){
		$(this).find("video").get(0).currentTime=0;
		//동영상의 위치를 맨처음으로 돌려준다.
		$(this).find("video").get(0).play();
		//동영상을 재생시킨다.
		$(this).find("video").stop().animate({
			"opacity":"0.9"
		},1200);
	});
	
	$("section .nav").mouseleave(function(){
		
		
		$(this).find("video").get(0).pause();
		//동영상의 재생을 정지시킨다.
		$(this).find("video").stop().animate({
			"opacity":0
		},1200);
	});

});















