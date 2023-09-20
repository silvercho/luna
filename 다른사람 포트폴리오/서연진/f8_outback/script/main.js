$(function(){
	
	//이미지 메뉴 슬라이드
	//이미지 메뉴 슬라이드
	//이미지 메뉴 슬라이드
	//이미지 메뉴 슬라이드
	var repeat;
	var mi=0;
	
	
	timer();
	
	
	function timer(){
	repeat = setInterval(function(){
		mi++;
		if(mi==4){
			mi=0;
		}
		$(".menu_slide ul li").eq(mi-2).stop().animate({
			"left":"-100%"
		},800);
		$(".menu_slide ul li").eq(mi-1).removeClass("on").animate({
			"left":"-40%"
		},800);
		$(".menu_slide ul li").eq(mi).css("left","100%").animate({
			"left":"30%"
		},800 ,function(){
			$(".menu_slide ul li").eq(mi).addClass("on");
		});
	},3000);
	}
	
	
	$(".menu_slide").mouseover(function(){
		clearInterval(repeat);		
	});
	$(".menu_slide").mouseleave(function(){
		timer();		
	});
	
	
	
	
	
	
	
	// 헤더메뉴슬라이드
	// 헤더메뉴슬라이드
	// 헤더메뉴슬라이드
	$(".gnb > li").mouseover(function(){
		$(this).children("ul").stop().slideDown();
	});
	$(".gnb > li").mouseleave(function(){
		$(this).children("ul").stop().slideUp();
	});
	
	$(".gnb > li > ul > li").mouseover(function(){
		$(this).children().css("color","red");
		$(this).parent().parent().children().css("color","red");
	});
	
	$(".gnb > li > ul > li").mouseleave(function(){
		$(this).children().css("color","#fff");
		$(this).parent().parent().children().css("color","#fff");
	});
	
	
	
	
	$("dd").hide();
	
	$("dt").click(function(){
		var k = $(this).next("dd").css("display");
		
		if(k=="none"){
			$("dd").stop().slideUp();
			$(this).next("dd").stop().slideDown();
		}else{
			$(this).next("dd").stop().slideUp();
		}
	});
	
	$("#header_cover").show();
	$(".cover2").hide();
	$(".list").click(function(){
		$(".cover2").show();
		$("#header_cover").hide();
	});
	$(".cover_top a").click(function(){
		$(".cover2").hide();
		$("#header_cover").show();
	});
	
	
	
	//이미지슬라이드
	//이미지슬라이드
	//이미지슬라이드
	//이미지슬라이드
	
	
	
	
	$("#main_img .slide_img").bxSlider({
		auto:true, //자동실행 여부
		speed:1000, //이동 속도지정
		pause:2500, //멈춰있는 시간
		autoHover:true, //마우스 호버시 정지여부
		pager:true, //페이저버튼 출력여부
		controls:true, //이전, 다음 버튼 출력여부
		mode:"horizontal", //슬라이드 모드설정(horizontal, verical, fade)
		infiniteLoop:true, //무제한 반복 기능 설정여부
		hideControlOnEnd:false, //첫번째 페이지, 마지막 페이지에 이전 다음버튼 출력여부
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	//btn_top
	//btn_top
	//btn_top
	//btn_top
	$(".speed_menu .foot_btn_top").click(function(){
			$("html,body").stop().animate({
				"scrollTop":0
			},350);
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});