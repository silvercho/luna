$(function(){
/****************img_slide1********************************/	
		$(window).resize(function(){
			var h = $(window).height();
			$("#img_slide1").height(h);
			$("section").height(h-70);
			
			return false;
		});
	
	$(window).trigger("resize");
		
		
		$("#img_slide1").mousewheel(function(event, d){
					var ww=$(window).width();
					
					if(ww>830){
							if(d<0){
									var off = $("section").offset().top;
							}
							$("html,body").stop().animate({
									"scrollTop":off-100
							},600);
					}else{
								if(d<0){
									var off = $("section").offset().top;
							}
							$("html,body").stop().animate({
									"scrollTop":off-70
							},600);
					}
		});	
		
		
				$("header,section").mousewheel(function(event, d){
							if(d>0){
									var off = $("#img_slide1").offset().top;
							}
							$("html,body").stop().animate({
									"scrollTop":off
							},600);
				});
		
		
		var clone = $(".imgs li").eq(0).clone();
		$(".imgs").append(clone);
		
		var i = 0;
		var repeat;
		
		var k = null;
		
		$("#pager1 li").click(function(){
			
			i=$(this).index();
			
				//console.log(k,i);
			if(k==3 && i==0){
				$(".imgs").stop().animate({
					"margin-left":"-400%"
				},1000, function(){
					$(".imgs").css("margin-left",0);
				});
				
			}else{
				$(".imgs").stop().animate({
					"margin-left":-i*100+"%"
				},1000);
			//console.log(i);
			}
			
			
			$(".pager1_bar").stop().animate({
				"top":i*50
			},1000);
			
			k=i;
			return false;
		});
		

		timer();
		
		function timer(){
			repeat = setInterval(function(){
				
				if(i==4){
					i=0;
					$(".imgs").css("margin-left",0);
				}

				i++;
				
				$(".imgs").stop().animate({
						"margin-left":(-i*100)+"%"
				},1000);
				
				$(".pager1_bar").stop().animate({
					"top":i*50
				},1000);
				if(i==4){
					$(".pager1_bar").stop().animate({
						"top":0
					},1000);
				}
			},5000);
			
			return false;

		}
		
		$("#pager1").mouseover(function(){
			clearInterval(repeat);
		});
		$("#pager1").mouseleave(function(){
			timer();
		});
		
		
/****************header********************************/		
		var past_scroll = null;
	$(window).scroll(function(){
		var ws = $(window).scrollTop();
		var wh = $(window).height();
		var at = $("article").offset().top;
		
		if(ws>=wh && at>ws){
					$("header").css({"position":"fixed","top":0,"transition":"none","z-index":15});
			}else if(ws>at){
				if(ws>past_scroll){
					$("header").css({"position":"fixed","top":"-100px","transition":"all 0.4s"});
				}else if(ws<past_scroll){
						$("header").css({"position":"fixed","top":"0","transition":"all 0.4s"});
				}
			}else{
					$("header").css({"position":"absolute","top":"100%","transition":"none","z-index":10});
					$("#side_nav").removeClass("on");
					$(".menu_icon .menu").removeClass("on");
			}
			
			
	past_scroll=ws;
	});	
		
		
		
		
/****************menu_dot********************************/		

		

		$(".gnb li").mouseover(function(){
				
				var d = $(this).position().left;
				var w = $(this).width();
				
				$("#menu_dot").stop().animate({
					"left":d+50,
					"width":w,
					"opacity":1
				},600);
				
			return false;	
				
		});
		
		$(".gnb").mouseleave(function(){
				$("#menu_dot").stop().animate({
					"opacity":0
				},600);
			return false;
		});
		
/****************side_menu********************************/	
		
		$(".menu_icon .menu").click(function(){
			
			$(this).toggleClass("on");
			
			var ww = $(window).width();
			
			if(ww>830){
				var d = $("#side_nav").css("display");
			
					if(d=="none"){
						$("#side_nav").addClass("on");
						$(".side_gnb > li > ul").fadeOut(100);
					}else{
						$("#side_nav").removeClass("on");
					}
				}else{
					var d = $("#side_nav").css("display");
			
					if(d=="none"){
						$("#side_nav").fadeIn(100);
						$(".side_gnb > li > ul").fadeOut(100);
					}else{
						$("#side_nav").fadeOut(100);
					}
				}
			return false;
			});
		
		$("#side_nav .close").click(function(){
				$("#side_nav").fadeOut(100);
				$(".menu_icon .menu").removeClass("on");
		});
		
		$(".side_gnb > li").click(function(){
			
			$(".side_gnb > li > ul").fadeOut(100);
			$(this).children("ul").fadeIn(100);
			
			return false;
		});

	
/****************img_slide2********************************/		
		var repeat1;
		var a = 0; 
	
		
					$(".np_button .next").click(function(){
									var ww= $(window).width();		
							a++;

									if(ww>830){
										
											if(a==3){a=0;}

											$(".left li").eq(a).css("left",0).stop().animate({"left":"50%"},1000);
											$(".left li").eq(a-1).css("left","50%").stop().animate({"left":"100%"},1000);
											
											$(".right_top li").eq(a).css("right","50%");
											$(".right_top li").eq(a-1).css("right",0);
											$(".right_top li #text").removeClass("on");
											$(".right_top li #text").eq(a).addClass("on");
											
											$(".right_bottom li").eq(a).css("top","50%").stop().animate({"top":0},1000);
											$(".right_bottom li").eq(a-1).css("top",0).stop().animate({"top":"-50%"},1000);
								}else{
										
											if(a==3){a=0;}
										
											$(".left li").eq(a).css("left","-100%").stop().animate({"left":0},1000);
											$(".left li").eq(a-1).css("left",0).stop().animate({"left":"100%"},1000);
											
											$(".right_top li").eq(a).css("right",0);
											$(".right_top li").eq(a-1).css("right","-100%");
											$(".right_top li #text").removeClass("on");
											$(".right_top li #text").eq(a).addClass("on");
									}
					});
					
						$(".np_button .prev").click(function(){
							var ww= $(window).width();		
							a--;
							
							if(ww>830){
					
									if(a==-3){a=0;}
							
									$(".left li").eq(a).css("left","100%").stop().animate({"left":"50%"},1000);
									$(".left li").eq(a+1).css("left","50%").stop().animate({"left":0},1000);
									
									$(".right_top li").eq(a).css("right","50%");
									$(".right_top li").eq(a+1).css("right","0");
									$(".right_top li #text").removeClass("on");
									$(".right_top li #text").eq(a).addClass("on");
									
									$(".right_bottom li").eq(a).css("top","-50%").stop().animate({"top":0},1000);
									$(".right_bottom li").eq(a+1).css("top",0).stop().animate({"top":"50%"},1000);
							}else{
								
									if(a==-3){a=0;}
									
									$(".left li").eq(a).css("left","100%").stop().animate({"left":0},1000);
									$(".left li").eq(a+1).css("left",0).stop().animate({"left":"-100%"},1000);
								
									$(".right_top li").eq(a).css("right",0);
									$(".right_top li").eq(a+1).css("right","-100%");
									$(".right_top li #text").removeClass("on");
									$(".right_top li #text").eq(a).addClass("on");
							}
					});
					
					
					
		
		timer1();
		
		function timer1(){
			repeat1 = setInterval(function(){
				var ww= $(window).width();	
				
				a++;
				
				if(ww>830){
				
						if(a==3){a=0;}
						
						$(".left li").eq(a).css("left",0).stop().animate({"left":"50%"},1000);
						$(".left li").eq(a-1).css("left","50%").stop().animate({"left":"100%"},1000);
						
						$(".right_top li").eq(a).css("right","50%");
						$(".right_top li").eq(a-1).css("right",0);
						$(".right_top li #text").removeClass("on");
						$(".right_top li #text").eq(a).addClass("on");
						
						$(".right_bottom li").eq(a).css("top","50%").stop().animate({"top":0},1000);
						$(".right_bottom li").eq(a-1).css("top",0).stop().animate({"top":"-50%"},1000);
						
				}else{
					if(a==3){a=0;}
						
						$(".left li").eq(a).css("left","-100%").stop().animate({"left":0},1000);
						$(".left li").eq(a-1).css("left",0).stop().animate({"left":"100%"},1000);
						
						$(".right_top li").eq(a).css("right",0);
						$(".right_top li").eq(a-1).css("right","-100%");
						$(".right_top li #text").removeClass("on");
						$(".right_top li #text").eq(a).addClass("on");
				}
			},5000);
				
			return false;
		}
		
		$(".np_button").mouseover(function(){
			clearInterval(repeat1);
		});
		$(".np_button").mouseleave(function(){
			timer1();
		});
			
/****************bg_mousemove********************************/				
		
		$("article").mousemove(function(e){
			var x = e.clientX;
			var w = $(window).width();
			var num1 = (x/w)*5;
			num1-=60;
			
			var y = e.clientY;
			var h = $(window).height();
			var num2 = (y/h)*5;
			num2-=60;
			$("article").css("background-position",-num1+"%"+ -num2+"%");
			
			
			
		});
		
	
/****************foot_menu********************************/				
		
		$(".foot_cover > li").click(function(){
			
			var d = $(this).children("ul").css("display");
			
			if(d=="none"){
				$(".foot_cover > li > ul").slideUp();
				$(this).children("ul").slideDown();
			}else{
				$(".foot_cover > li > ul").slideUp();
			}
			
			return false;
		});
		
	








	
});