$(function(){
	
	$(".start_bg span").click(function(){
		$(".start_bg").fadeOut(600);
	});
	
	
	$(".option_btn").click(function skillbar(){
		var o = $(".option, .btn_btn, .option button").css("display");
		
		if(o=="none"){
			$(".option, .btn_btn, .option button").fadeIn(600);
		}else{
			$(".option, .btn_btn, .option button").fadeOut(600);
		}
		
		
		$(".skillbar").each(function(){
			$(this).children(".skill_bar").animate({
				"width":$(this).attr("data-percent")
			},2000);
		});
		
		if($(".skillbar").hasClass("on")==false){
			$(".Count").each(function(){
				var t = $(this);
				
				$({Counter:0}).stop().animate({
					Counter:t.text()
				},{
					duration:2000,
					progress:function(){
						t.text(Math.ceil(this.Counter));
						
					}
				});
			});
			$(".skillbar").addClass("on");
		}
		$(document).on("keydown",skill_section_page);
	});
	
	function skill_section_page(e){
		if(e.keyCode==27){
			$(".skillbar").removeClass("on");
			$(".option,.option button").fadeOut(600,function(){
				$(".skillbar").children(".skill_bar").animate({
					"width":0
				},200);
			});
			$(document).off("keydown");
		}
	}
	
	$(".btn_btn li").click(function(){
		var b = $(this).index();
		$(".btn").css("display","none").eq(b).css("display","block");
		
	});
	
	$(".option button").click(function(){
		
		$(".skillbar").removeClass("on");
		$(".option,.option button").fadeOut(600,function(){
			$(".skillbar").children(".skill_bar").animate({
				"width":0
			},200);
		});
	});
	

			

	$(".background, .glass_target, .glass_target a").bind("contextmenu",zoom_target);
	$(".mouse_bg .mbutton").on("click",zoom_target);
	function zoom_target(){
		
		if($(".wrap").hasClass("on")==false){
			$("body").css("cursor","none");
			$(".background").css({
				top:"50%",
				left:"40%",
				"transform":"translate(-50%,-50%) scale(3)"
			});
			$(".glass_target").css("display","block");
			$(".background .bg3").css("display","none");
			
			var w = $(window).width();
			if(w>1366){
				$(window).on("mousemove",zoomWindowMove);
				$(".sbutton").css("display","none");
			}else{
				$(".glass_target").on("touchstart",handDragstart);
				$(".glass_target").on("touchend",handDragend);
				$(".sbutton").css("display","block");
				$(".sbutton").on("click",shootButton);
			}
			
			$(".wrap").addClass("on");
			return false;
		}else{
			$("body").css("cursor","url(./images/cursor2.png) 25 25, auto");
			
			$(".background").css({
				top:"0%",
				left:"0%",
				"transform":"translate(0,0) scale(1)"
			});
			$(".background .bg3").css("display","block");
			$(".glass_target").css("display","none");
			$(window).off("mousemove",zoomWindowMove);
			
			$(".glass_target").off("touchstart");
			$(".glass_target").off("touchend");
			$(".wrap").removeClass("on");
			$(".sbutton").css("display","none");
			$(".sbutton").off("click");
			return false;
			
		}
	}
	
	function zoomWindowMove(e){
		
		
		var x = e.clientX;
		var y = e.clientY;
		
	
		var t = parseFloat($(".wrap").css("top"));
		var l = parseFloat($(".wrap").css("left"));
		
		var w = $(window).width();
		var h = $(window).height();
		
		w = ((x/w)*100)-40;
		h = ((y/h)*100)-50;
		
		var result_x = 40-(w*1.5);
		var result_y = 50-(h*1.8);
		
		$(".background").css({
			top:result_y+"%",
			left:result_x+"%"
		});
		
		
		$(".hollow_target").mouseenter(function(){
			$(".glass_target").css("background","url(./images/a_target.png) no-repeat center /cover");
		});
		$(".hollow_target").mouseleave(function(){
			$(".glass_target").css("background","url(./images/a_2.png) no-repeat center /cover");
		});
	}
	
	
	var start_Y = null;
	var start_X = null;
	var end_Y = null;
	var end_X = null;
	var mobile_result_x = null;
	var mobile_result_y = null;
	
	var touch_start_pointX = null;
	var touch_start_pointY = null;
	
	var percent_resultX=null;
	var percent_resultY=null;
	function handDragstart(e){
		start_Y = parseFloat($(".background").css("top"));
		start_X = parseFloat($(".background").css("left"));
		
		touch_start_pointY = e.originalEvent.touches[0].clientY;
		touch_start_pointX = e.originalEvent.touches[0].clientX;
		
		var w = $(window).width();
		var h = $(window).height();
		
		/*start_Y = (start_Y/w)*100;
		start_X = (start_X/h)*100;*/
		
		$(".glass_target").on("touchmove", handDragmove);
		
		//console.log(touch_start_pointY,touch_start_pointX);
	}
	
	function handDragmove(e){
		var moveY = e.originalEvent.touches[0].clientY;
		var moveX = e.originalEvent.touches[0].clientX;
		
		var w = $(window).width();
		var h = $(window).height();
		
		
		end_Y = touch_start_pointY-moveY;
		end_X = touch_start_pointX-moveX;
		
		
		mobile_result_y=start_Y-end_Y;
		mobile_result_x=start_X-end_X;
		
		percent_resultX=(mobile_result_x/w)*100;
		percent_resultY=(mobile_result_y/h)*100;
		
		
		if(percent_resultX>163){
			percent_resultX=163;
		}
		if(percent_resultX<-63){
			percent_resultX=-63;
		}
		if(percent_resultY>151){
			percent_resultY=151;
		}
		if(percent_resultY<-51){
			percent_resultY=-51;
		}
		$(".background").css({
			top:percent_resultY+"%",
			left:percent_resultX+"%"
		});
		if(percent_resultX>-19 && percent_resultX<-1 && percent_resultY>5 && percent_resultY<78){
			$(".glass_target").css("background","url(./images/a_target.png) no-repeat center /cover");
		}else if(percent_resultX>5 && percent_resultX<13 && percent_resultY>31 && percent_resultY<63){
			$(".glass_target").css("background","url(./images/a_target.png) no-repeat center /cover");
		}else if(percent_resultX>20 && percent_resultX<25 && percent_resultY>40 && percent_resultY<65){
			$(".glass_target").css("background","url(./images/a_target.png) no-repeat center /cover");
		}else if(percent_resultX>38 && percent_resultX<52 && percent_resultY>18 && percent_resultY<77){
			$(".glass_target").css("background","url(./images/a_target.png) no-repeat center /cover");
		}else if(percent_resultX>60 && percent_resultX<67 && percent_resultY>39 && percent_resultY<75){
			$(".glass_target").css("background","url(./images/a_target.png) no-repeat center /cover");
		}else if(percent_resultX>83 && percent_resultX<100 && percent_resultY>16 && percent_resultY<85){
			$(".glass_target").css("background","url(./images/a_target.png) no-repeat center /cover");
		}else{
			$(".glass_target").css("background","url(./images/a_2.png) no-repeat center /cover");
		}
	}
	
	function handDragend(e){
		$(".glass_target").off("touchmove");
		$(".background").css({
			top:percent_resultY+"%",
			left:percent_resultX+"%"
		});
		
	}
	
	function shootButton(e){
		if(percent_resultX>-19 && percent_resultX<-0 && percent_resultY>-5 && percent_resultY<77){
			$(".btn2").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown",contact_section_page);
			
			var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
			
			// var pw = $(".p6").width();
			// var ph = $(".p6").height();
			// bullet_point.css({
				// "display":"block",
				// top:((hh/ph)*100)/1.5+"%",
				// left:((ww/pw)*100)/1.5+"%"

			var pl = $(".p6").offset().left;
			var pt = $(".p6").offset().top;
			var px = e.pageX;
			var py = e.pageY;
			var pw = $(".p6").width();
			var ph = $(".p6").height();
		/*
			bullet_point.css({
				"display":"block",
				top:((py-pt)/ph)*100+"%",
				left:((px-pl)/pw)*100+"%"
			});
			// bullet_point.css({	
				// "display":"block",
				// top:55+"%",
				// left:8+"%"
			// });	
			
			$(".p6").append(bullet_point);*/
			$(".sbutton").css("display","none");
			$(".glass_target").css("display","none");
			
		}else if(percent_resultX>5 && percent_resultX<13 && percent_resultY>36 && percent_resultY<60){
			$(".menu3").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey3); 
			var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
			//var l = (Math.abs(parseInt($(".background").css("left")))/$(".background").width())*100;
			//var t = (Math.abs(parseInt($(".background").css("top")))/$(".background").height())*100;
			// var ww = $(window).width()/2+Math.abs($(".background").offset().left);
			// var hh = $(window).height()/2+Math.abs($(".background").offset().top);

			// var pw = $(".background").width();
			// var ph = $(".background").height();
		
			// bullet_point.css({
				// "display":"block",
				// top:((hh/ph)*100)/1.5+"%",
				// left:((ww/pw)*100)/1.5+"%"
				
		/*	bullet_point.css({
				"display":"block",
				top:55+"%",
				left:8+"%"
			});
			
			$(".p5").append(bullet_point);*/
			$(".sbutton").css("display","none");
		}else if(percent_resultX>20 && percent_resultX<25 && percent_resultY>40 && percent_resultY<65){
			$(".menu5").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey5);
			var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
			//var l = (Math.abs(parseInt($(".background").css("left")))/$(".background").width())*100;
			//var t = (Math.abs(parseInt($(".background").css("top")))/$(".background").height())*100;
			// var ww = $(window).width()/2+Math.abs($(".background").offset().left);
			// var hh = $(window).height()/2+Math.abs($(".background").offset().top);

			// var pw = $(".background").width();
			// var ph = $(".background").height();
		
			// bullet_point.css({
				// "display":"block",
				// top:((hh/ph)*100)/1.5+"%",
				// left:((ww/pw)*100)/1.5+"%"
			// });
			/*bullet_point.css({
				"display":"block",
				top:57+"%",
				left:22+"%"
			});
			
			
			$(".p4").append(bullet_point);*/
			$(".sbutton").css("display","none");
		}else if(percent_resultX>38 && percent_resultX<52 && percent_resultY>18 && percent_resultY<77){
			$(".menu1").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey1);
			var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
			//var l = (Math.abs(parseInt($(".background").css("left")))/$(".background").width())*100;
			//var t = (Math.abs(parseInt($(".background").css("top")))/$(".background").height())*100;
			// var ww = $(window).width()/2+Math.abs($(".background").offset().left);
			// var hh = $(window).height()/2+Math.abs($(".background").offset().top);

			// var pw = $(".background").width();
			// var ph = $(".background").height();
		
			// bullet_point.css({
				// "display":"block",
				// top:((hh/ph)*100)/1.5+"%",
				// left:((ww/pw)*100)/1.5+"%"
			// });
			/*bullet_point.css({
				"display":"block",
				top:60+"%",
				left:43+"%"
			});
			
			
			$(".p3").append(bullet_point);*/
			$(".sbutton").css("display","none");
		}else if(percent_resultX>60 && percent_resultX<67 && percent_resultY>39 && percent_resultY<75){
			$(".menu4").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey4);
			var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
			//var l = (Math.abs(parseInt($(".background").css("left")))/$(".background").width())*100;
			//var t = (Math.abs(parseInt($(".background").css("top")))/$(".background").height())*100;
			// var ww = $(window).width()/2+Math.abs($(".background").offset().left);
			// var hh = $(window).height()/2+Math.abs($(".background").offset().top);

			// var pw = $(".background").width();
			// var ph = $(".background").height();
		
			// bullet_point.css({
				// "display":"block",
				// top:((hh/ph)*100)/1.5+"%",
				// left:((ww/pw)*100)/1.5+"%"
			// });
			/*bullet_point.css({
				"display":"block",
				top:65+"%",
				left:62+"%"
			});
			
			$(".p2").append(bullet_point);*/
			$(".sbutton").css("display","none");
		}else if(percent_resultX>83 && percent_resultX<100 && percent_resultY>16 && percent_resultY<85){
			$(".menu2").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey2);
			var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
			//var l = (Math.abs(parseInt($(".background").css("left")))/$(".background").width())*100;
			//var t = (Math.abs(parseInt($(".background").css("top")))/$(".background").height())*100;
			// var ww = $(window).width()/2+Math.abs($(".background").offset().left);
			// var hh = $(window).height()/2+Math.abs($(".background").offset().top);

			// var pw = $(".background").width();
			// var ph = $(".background").height();
		
			// bullet_point.css({
				// "display":"block",
				// top:((hh/ph)*100)/1.5+"%",
				// left:((ww/pw)*100)/1.5+"%"
			// });
			/*bullet_point.css({
				"display":"block",
				top:66+"%",
				left:90+"%"
			});
			
			$(".p1").append(bullet_point);*/
			$(".sbutton").css("display","none");
		}
		$("body").css("cursor","url(./images/cursor2.png) 25 25, auto");
			
		$(".background").css({
			top:"0%",
			left:"0%",
			"transform":"translate(0,0) scale(1)"
		});
		$(".background .bg3").css("display","block");
		$(".glass_target").css("display","none");
		$(window).off("mousemove",zoomWindowMove);
		
		$(".glass_target").off("touchstart");
		$(".glass_target").off("touchend");
		$(".wrap").removeClass("on");
		$(".sbutton").off("click");
		return false;
	}	
	

	
	
	
	
	
	$(".start_s button").click(function(){
		$(".start_s").fadeOut(600);
	});
	
	
	$(".p").click(function(e){
		var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
		var l = $(this).offset().left;
		var t = $(this).offset().top;
		var x = e.pageX;
		var y = e.pageY;
		var w = $(this).width();
		var h = $(this).height();
		
		bullet_point.css({
			"display":"block",
			top:((y-t)/h)*100+"%",
			left:((x-l)/w)*100+"%"
		});
		
		$(this).append(bullet_point);
		
		var kill = $(this).index();
		
		
		if(kill==0){
			$(".menu2").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey2);
		}else if(kill==1){
			$(".menu4").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey4);
		}else if(kill==2){
			$(".menu1").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey1);
		}else if(kill==3){
			$(".menu5").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey5);
		}else if(kill==4){
			$(".menu3").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown", presskey3);
		}else if(kill==5){
			$(".btn2").fadeIn(600);
			$(".option_bars").fadeIn(600);
			$(document).on("keydown",contact_section_page);
		}else{
			$(".option_bars").css("display","none");
		}
		$("audio").prop("currentTime",0).trigger("play");
		
		
	});
	
	
	
	
	$(".hollow_target").click(function(){
		var kill = $(this).index();
		
		if(kill==0){
			$(".menu2").fadeIn(1000);
			$(document).on("keydown", presskey2);
		
		}else if(kill==1){
			$(".menu4").fadeIn(1000);
			$(document).on("keydown", presskey4);
		
		}else if(kill==2){
			$(".menu1").fadeIn(1000);
			$(document).on("keydown", presskey1);
			
		}else if(kill==3){
			$(".menu5").fadeIn(1000);
			$(document).on("keydown", presskey5);
			
		}else if(kill==4){
			$(".menu3").fadeIn(1000);
			$(document).on("keydown", presskey3);
			
		}else if(kill==5){
			$(".btn2").fadeIn(600);
			$(document).on("keydown",contact_section_page);
		}
		
		$(".option_bars").fadeIn(1000);
			$("audio").prop("currentTime",0).trigger("play");
	});

	function contact_section_page(e){
		if(e.keyCode==27){
			$(".option_bars").fadeOut(200);
			$(".menu ,.btn2").fadeOut(400);	
			$(document).off("keydown");
		}
	}
	
	$(".hollow_target").click(function(e){
		$(".glass_target").css("transform","scale(1.2)");
		setTimeout(function(){
			$(".glass_target").css("display","none");
			$(".background").css("transform","scale(1)");
			$("body").css("cursor","url(./images/cursor2.png) 25 25, auto");
			$(".background").css({
				top:"0%",
				left:"0%",
				"transform":"translate(0,0) scale(1)"
			});
			$(".background .bg3").css("display","block");
			$(".glass_target").css("display","none");
			$(window).off("mousemove",zoomWindowMove);
			$(".wrap").removeClass("on");
			$(".glass_target").css("transform","scale(1)");
		},600);
		
		
		
		var bullet_point = $("<img src='./images/2-bullet-shot-hole-png-image-thumb.png' alt='' class='bullet_hole'/>");
		var l = $(this).offset().left;
		var t = $(this).offset().top;
		var x = e.pageX;
		var y = e.pageY;
		var w = $(this).width();
		var h = $(this).height();
		
		bullet_point.css({
			"display":"block",
			top:((y-t)/h)*100+"%",
			left:((x-l)/w)*100+"%"
		});
		
		$(".p").eq($(this).index()).append(bullet_point);
		
		
			
		return false;
	});

	
	//slide_script
	$(".option_bars").click(function(){
		$(".option_bars").fadeOut(200);
		$(".menu ,.btn2").fadeOut(400);	
		$(document).off("keydown");
	});
	

	
	
		
//포토샵게임일러스트	
		var p = 5;
		var k = 0;
		
		$(".menu1 .img_slide li").click(function(){
			p=$(this).index();
			if(p==k)return;
			slide1();
			
		});
		
		
		function slide1(){
			$(".menu1 .img_slide").stop().animate({
				"left":-p*100+"%"
			},400);
			
			$(".menu1 .img_slide li a").stop().animate({
				"transform":"scale(0.8)"
			},400);
			

			$(".menu1 .img_slide li").eq(p).children("a").stop().animate({
				"transform":"scale(1)"
			},400);
			
		
			$(".menu1 .img_slide li .text_cover").fadeIn(400);
			$(".menu1 .img_slide li").eq(p).children(".text_cover").fadeOut(400);
			
			$(".menu1 .text_box li").fadeOut(400);
			$(".menu1 .text_box li").eq(p).fadeIn(400);
			(400);
			
			k=p;
		}
		
		$(".slide_cover").on("touchstart",handDragStart1);
		$(".slide_cover").on("touchend",handDragEnd1);
		
		var x = null;
		var t = null;
		function handDragStart1(e){
			x = e.originalEvent.touches[0].pageX; //터치가시작된지점
			t = x;
			$(".slide_cover").on("touchmove",handDragMove1);
		}
		function handDragMove1(e){
			x = e.originalEvent.touches[0].pageX;
		}
		function handDragEnd1(e){
		$(".menu1 .slide_cover").off("touchmove");
			if(t-x>0){ //오른쪽으로이동
				p++;
				if(p>12){
					p=12;
				} //마지막이동유지
				slide1();
			}
			if(t-x<0){ //왼쪽으로이동
				p--;
				if(p<0){
					p=0;
				} //마지막이동유지
				slide1();
			}
		}	
			
//사이트	
		var main2n = 0;
		var main2k = 0;
		
		$(".menu2 .img_slide li").click(function(){
			main2n=$(this).index();
			if(main2n==main2k)return;
			slide2();
		});
		
		function slide2(){
				$(".menu2 .img_slide").stop().animate({
					"left":-main2n*100+"%"
				},400);
				
				$(".menu2 .img_slide li a").stop().animate({
					"transform":"scale(1)"
				},400);
				$(".menu2 .img_slide li").css("z-index",0);
				$(".menu2 .img_slide li").eq(main2n).css("z-index",1);
				$(".menu2 .img_slide li").eq(main2n).children("a").stop().animate({
					"transform":"scale(1.2)"
				},400);
				
			
				$(".menu2 .img_slide li .text_cover").fadeIn(400);
				$(".menu2 .img_slide li").eq(main2n).children(".text_cover").fadeOut(400);
				
				$(".menu2 .text_box li").fadeOut(400);
				$(".menu2 .text_box li").eq(main2n).fadeIn(400);
				(400);
				
				main2k=main2n;
			}
		
		
		$(".slide_cover").on("touchstart",handDragStart2);
		$(".slide_cover").on("touchend",handDragEnd2);
		
		var x = null;
		var t = null;
		function handDragStart2(e){
			x = e.originalEvent.touches[0].pageX; //터치가시작된지점
			t = x;
			$(".slide_cover").on("touchmove",handDragMove2);
		}
		function handDragMove2(e){
			x = e.originalEvent.touches[0].pageX;
		}
		function handDragEnd2(e){
		$(".menu2 .slide_cover").off("touchmove");
			if(t-x>0){//오른쪽으로이동
				main2n++;
				if(main2n>9){
					main2n=9;
				} //마지막이동유지
				slide2();
			} 
			if(t-x<0){ //왼쪽으로이동
				main2n--;
				if(main2n<0){
					main2n=0;
				} //마지막이동유지
				slide2();
			}	
		}	
//인물화	
		var main3n = 2;
		var main3k = 0;
		
		$(".menu3 .img_slide li").click(function(){
			main3n=$(this).index();
			if(main3n==main3k)return;
			slide3();
		});
		
		function slide3(){
				$(".menu3 .img_slide").stop().animate({
					"left":-main3n*100+"%"
				},400);
				
				$(".menu3 .img_slide li a").stop().animate({
					"transform":"scale(0.8)"
				},400);
				
				$(".menu3 .img_slide li").eq(main3n).children("a").stop().animate({
					"transform":"scale(1)"
				},400);
				
			
				$(".menu3 .img_slide li .text_cover").fadeIn(400);
				$(".menu3 .img_slide li").eq(main3n).children(".text_cover").fadeOut(400);
				
				$(".menu3 .text_box li").fadeOut(400);
				$(".menu3 .text_box li").eq(main3n).fadeIn(400);
				(400);
				
				main3k=main3n;
			}
		
		
		$(".slide_cover").on("touchstart",handDragStart3);
		$(".slide_cover").on("touchend",handDragEnd3);
		
		var x = null;
		var t = null;
		function handDragStart3(e){
			x = e.originalEvent.touches[0].pageX; //터치가시작된지점
			t = x;
			$(".slide_cover").on("touchmove",handDragMove3);
		}
		function handDragMove3(e){
			x = e.originalEvent.touches[0].pageX;
		}
		function handDragEnd3(e){
		$(".menu3 .slide_cover").off("touchmove");
			if(t-x>0){ //오른쪽으로이동
				main3n++;
				if(main3n>5){
					main3n=5;
				} //마지막이동유지
				slide3();
			}
			if(t-x<0){ //왼쪽으로이동
				main3n--;
				if(main3n<0){
					main3n=0;
				} //마지막이동유지
				slide3();
			}				
			
		}	
//일러스트레이터	
		var main4n = 1;
		var main4k = 0;
		
		$(".menu4 .img_slide li").click(function(){
			main4n=$(this).index();
			if(main4n==main4k)return;
			slide4();
		});
		
		function slide4(){
				$(".menu4 .img_slide").stop().animate({
					"left":-main4n*100+"%"
				},400);
				
				$(".menu4 .img_slide li a").stop().animate({
					"transform":"scale(0.8)"
				},400);
				
				$(".menu4 .img_slide li").eq(main4n).children("a").stop().animate({
					"transform":"scale(1)"
				},400);
				
			
				$(".menu4 .img_slide li .text_cover").fadeIn(400);
				$(".menu4 .img_slide li").eq(main4n).children(".text_cover").fadeOut(400);
				
				$(".menu4 .text_box li").fadeOut(400);
				$(".menu4 .text_box li").eq(main4n).fadeIn(400);
				(400);
				
				k=main4n;
			}
		
		
		$(".slide_cover").on("touchstart",handDragStart4);
		$(".slide_cover").on("touchend",handDragEnd4);
		
		var x = null;
		var t = null;
		function handDragStart4(e){
			x = e.originalEvent.touches[0].pageX; //터치가시작된지점
			t = x;
			$(".slide_cover").on("touchmove",handDragMove4);
		}
		function handDragMove4(e){
			x = e.originalEvent.touches[0].pageX;
		}
		function handDragEnd4(e){
		$(".menu4 .slide_cover").off("touchmove");
			if(t-x>0){ //오른쪽으로이동
				main4n++;
				if(main4n>4){
					main4n=4;
				} //마지막이동유지
				slide3();
			}
			if(t-x<0){ //왼쪽으로이동
				main4n--;
				if(main4n<0){
					main4n=0;
				} //마지막이동유지
				slide4();
			}		
		}

//엠블럼	
		var main5n = 6;
		var main5k = 0;
		
		$(".menu5 .img_slide li").click(function(){
			main5n=$(this).index();
			if(main5n==main5k)return;
			slide5();
		});
		
		function slide5(){
				$(".menu5 .img_slide").stop().animate({
					"left":-main5n*100+"%"
				},400);
				
				$(".menu5 .img_slide li a").stop().animate({
					"transform":"scale(0.8)"
				},400);
				
				$(".menu5 .img_slide li").eq(main5n).children("a").stop().animate({
					"transform":"scale(1)"
				},400);
				
				$(".menu5 .img_slide li").css("opacity","0.6");
				$(".menu5 .img_slide li").eq(main5n).css("opacity","1");
			
				$(".menu5 .img_slide li .text_cover").fadeIn(400);
				$(".menu5 .img_slide li").eq(main5n).children(".text_cover").fadeOut(400);
				
				$(".menu5 .text_box li").fadeOut(400);
				$(".menu5 .text_box li").eq(main5n).fadeIn(400);
				(400);
				
				main5k=main5n;
			}
		
		
		$(".slide_cover").on("touchstart",handDragStart5);
		$(".slide_cover").on("touchend",handDragEnd5);
		
		var x = null;
		var t = null;
		function handDragStart5(e){
			x = e.originalEvent.touches[0].pageX; //터치가시작된지점
			t = x;
			$(".slide_cover").on("touchmove",handDragMove5);
		}
		function handDragMove5(e){
			x = e.originalEvent.touches[0].pageX;
		}
		function handDragEnd5(e){
		$(".menu5 .slide_cover").off("touchmove");
			if(t-x>0){ //오른쪽으로이동
				main5n++;
				if(main5n>14){
					main5n=14;
				} //마지막이동유지
				slide3();
			}
			if(t-x<0){ //왼쪽으로이동
				main5n--;
				if(main5n<0){
					main5n=0;
				} //마지막이동유지
				slide5();
				}
			}
//keydown
function presskey1(e){
	e.preventDefault();
		
	if(e.keyCode==37){
		p--;
		if(p<0){
			p=0;
		} 
		slide1();
	}else if(e.keyCode==39){
		p++;
		if(p>12){
			p=12;
		}
		slide1();
	}
	
	if(e.keyCode==27){
			$(".option_bars").fadeOut(200);
			$(".menu ,.btn2").fadeOut(400);	
			$(document).off("keydown");
		}
}
function presskey2(e){
	e.preventDefault();
		
	if(e.keyCode==37){
		main2n--;
		if(main2n<0){
			main2n=0;
		} 
		slide2();
	}else if(e.keyCode==39){
		main2n++;
		if(main2n>8){
			main2n=8;
		}
		slide2();
	}
	if(e.keyCode==27){
			$(".option_bars").fadeOut(200);
			$(".menu ,.btn2").fadeOut(400);	
			$(document).off("keydown");
		}
}
function presskey3(e){
	e.preventDefault();
		
	if(e.keyCode==37){
		main3n--;
		if(main3n<0){
			main3n=0;
		} 
		slide3();
	}else if(e.keyCode==39){
		main3n++;
		if(main3n>5){
			main3n=5;
		}
		slide3();
	}
	if(e.keyCode==27){
			$(".option_bars").fadeOut(200);
			$(".menu ,.btn2").fadeOut(400);	
			$(document).off("keydown");
		}
}
function presskey4(e){
	e.preventDefault();
		
	if(e.keyCode==37){
		main4n--;
		if(main4n<0){
			main4n=0;
		} 
		slide4();
	}else if(e.keyCode==39){
		main4n++;
		if(main4n>4){
			main4n=4;
		}
		slide4();
	}
	if(e.keyCode==27){
			$(".option_bars").fadeOut(200);
			$(".menu ,.btn2").fadeOut(400);	
			$(document).off("keydown");
		}
}
function presskey5(e){
	e.preventDefault();
		
	if(e.keyCode==37){
		main5n--;
		if(main5n<0){
			main5n=0;
		} 
		slide5();
	}else if(e.keyCode==39){
		main5n++;
		if(main5n>14){
			main5n=14;
		}
		slide5();
	}
	if(e.keyCode==27){
			$(".option_bars").fadeOut(200);
			$(".menu ,.btn2").fadeOut(400);	
			$(document).off("keydown");
		}
}

				
//contact	

	
$(window).resize(function(){
	var w = $(window).width();
	var h = $(window).height();
	
	if(w<h){
		$(".device_alert").css("display","block");
		$(".horizontal_wrap").css("display","none");
	}else{
		$(".device_alert").css("display","none");
		$(".horizontal_wrap").css("display","block");
	}
});	

$(window).trigger("resize");	
	
});

