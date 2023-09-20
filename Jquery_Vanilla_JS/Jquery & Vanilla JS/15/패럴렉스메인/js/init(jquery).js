$(function(){
var h;
$(window).resize(function(){	
		h =	$(window).height();
		//현재의 브라우저 높이를 구한다.
	$("section").height(h);
	//구한 높이값(h) 가져와서 컨텐츠영역(section)의 높이에 대입
});
	//브라우저의 리사이즈 발생시 화면이 뒤틀리는 문제점해결
	
   $(window).trigger('resize');
   //맨처음 강제로 리사이즈를 해줘서 처음한번실행
   
   $('#menu li').click(function(){
	   var i = $(this).index();
	   $('html,body').stop().animate({'scrollTop':i*h},1300)
	});
   
   
   $(window).on('scroll',function(){
	   var sct = $(window).scrollTop();
	/* 
	 if(sct >= h * 0  && sct < h * 1 ){
		$('#menu li').removeClass('on'); 
		$('#menu li').eq(0).addClass('on')  
	  }
	  
	   if(sct >= h * 1  && sct < h * 2 ){
		$('#menu li').removeClass('on'); 
		$('#menu li').eq(1).addClass('on')  
	  }
	  
	   if(sct >= h * 2  && sct < h * 3 ){
		$('#menu li').removeClass('on'); 
		$('#menu li').eq(2).addClass('on')  
	  }
	   if(sct >= h * 3  && sct < h * 4 ){
		$('#menu li').removeClass('on'); 
		$('#menu li').eq(3).addClass('on')  
	  }
	   */
	  for(var i = 0; i < 5; i++) {
	    if(sct >= h * i  && sct < h * (i+1) ){
		$('#menu li').removeClass('on'); 
		$('#menu li').eq(i).addClass('on')  
	  }
	   
	}
	   
   });
   
 $("section").on('mousewheel',function(event, d){
		if(d > 0) {
			var prev = $(this).prev().offset().top;
			$("html, body").stop().animate({scrollTop:prev},1300,"easeOutBounce");
		}
		
		if(d < 0) {
			var next = $(this).next().offset().top;
			$("html, body").stop().animate({scrollTop:next},1300,"easeOutBounce");
		}
	});  
   
   $('section').on('mousemove',function(e){
	   
	  /*마우스 커서의 X좌표 Y좌표 위치 저장*/
		var posX=e.pageX;
		var posY=e.pageY; 
	   
	   //1페이지
		$('.p11').css({
			'right':20 - (posX/30),
			'bottom':20 - (posY/30)
		});
		$('.p12').css({
			'right':130 + (posX/20),
			'bottom':-40 + (posY/20)
		});
		$('.p13').css({
			'right':60 + (posX/20),
			'top':180 + (posY/20)
		});
	   //2페이지
		
		$('.p21').css({
			'right':-180 - (posX/30),
			'bottom':-480 - (posY/30)
		});
		$('.p22').css({
			'right':130 + (posX/50),
			'bottom':-40 + (posY/50)
		});
		//3페이지
		
		$('.p31').css({
			'right':280 - (posX/30),
			'bottom':30 - (posY/30)
		});
		$('.p32').css({
			'right':110 + (posX/20),
			'bottom':-270 +  (posY/20)
		});
	   $('.p33').css({
			'right':-70 + (posX/20),
			'bottom':-130 + (posY/20)
		});
		//4페이지
		$('.p41').css({
			'right':20 - (posX/30),
			'bottom':-120 - (posY/30)
		});
		$('.p42').css({
			'right':0 - (posX/20),
			'bottom':-180 - (posY/20)
		});
	   
	   
	   
   });
   
   
   
   
   
   


});