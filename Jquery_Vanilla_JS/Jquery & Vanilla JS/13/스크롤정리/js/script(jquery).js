$(function(){
	$(window).scrollTop(0);
	var contents =$('section div');
	var menu = $('nav ul li');
	var fdiv = $('#floatdiv>ul>li');
	var dtop = $('#floatdiv').offset().top;
	var h;
	$(window).resize(function(){
		h = $(window).height();
		//alert(h);
		//.height(); 높이를 구한다.
		contents.height(h);
		//height(h) 높이를구한 h를  contents 대입
		//  contents 각각에   ex) 934를 700대신 입력

	});
	$(window).trigger('resize');//시작시 강제로 resize를 실행
	
	var a1 = contents.eq(0).offset().top;
	var a2 = contents.eq(1).offset().top;
	var a3 = contents.eq(2).offset().top;
	var a4 = contents.eq(3).offset().top;
	var a5 = contents.eq(4).offset().top;
	var a6 = contents.eq(5).offset().top;
	
	console.log(a1, a2, a3, a4, a5 ,a6);
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		$('#sTop').text(sct);
		if(sct > 100){
			$("nav").addClass('fixed');			
		}else{
			$("nav").removeClass('fixed');	
		}
		
		$("#floatdiv").stop().animate({top:sct+dtop},500);
		
		if(sct >= a1){
			menu.removeClass('on');
			menu.eq(0).addClass('on');
			fdiv.removeClass('on');
			fdiv.eq(0).addClass('on');
		}
		if(sct >= a2){
			menu.removeClass('on');
			menu.eq(1).addClass('on');
			fdiv.removeClass('on');
			fdiv.eq(1).addClass('on');
		}
		if(sct >= a3){
			menu.removeClass('on');
			menu.eq(2).addClass('on');
			fdiv.removeClass('on');
			fdiv.eq(2).addClass('on');
		}
		if(sct >= a4){
			menu.removeClass('on');
			menu.eq(3).addClass('on');
			fdiv.removeClass('on');
			fdiv.eq(3).addClass('on');
		}
		if(sct >= a5){
			menu.removeClass('on');
			menu.eq(4).addClass('on');
			fdiv.removeClass('on');
			fdiv.eq(4).addClass('on');
		}
		if(sct >= a6){
			menu.removeClass('on');
			menu.eq(5).addClass('on');
			fdiv.removeClass('on');
			fdiv.eq(5).addClass('on');
		}
		
		return false;
	});
	
	menu.click(function(){
		var i = $(this).index();
		$("html,body").stop().animate({scrollTop:i*h},1000);
	/*	
		menu.removeClass('on');
		menu.eq(i).addClass('on');
		fdiv.removeClass('on');
		fdiv.eq(i).addClass('on');*/
	});
	
	
	fdiv.click(function(){
		var i = $(this).index();
		$("html,body").stop().animate({scrollTop:i*h},1000);
		/*
		fdiv.removeClass('on');
		fdiv.eq(i).addClass('on');
		menu.removeClass('on');
		menu.eq(i).addClass('on');*/
	});
	
	contents.mousewheel(function(event, d){
		console.log(d);
		
		if(d > 0 ){
			var prev = $(this).prev().offset().top;	
			$("html,body").stop().animate({scrollTop:prev},1000,'easeOutBounce');
		}
		if(d < 0){
			var next = $(this).next().offset().top;	
			$("html,body").stop().animate({scrollTop:next},1000,'easeOutBounce');
		}
	});
	
	
	
	
	
	
});











