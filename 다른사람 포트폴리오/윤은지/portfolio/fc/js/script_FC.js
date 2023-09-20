$(function(){
	
	var n = 0;
	var i = 0;
	
	$(".pager li").on("click",click_slide);
	
	function click_slide(){
		
		clearInterval(repeat);
		
		$(".pager li").off("click");
		
		n = $(this).index();
		console.log(n);
		if(n==i) return;
		
		if(n>i){
			$(".img_slide ul li").eq(n).css("left","100%").animate({
				"left":0
			},600);
			$(".img_slide ul li").eq(i).css("left",0).animate({
				"left":"-100%"
			},600,function(){
				$(".pager li").on("click",click_slide);
				auto();
			});
		}else if(n<i){
			$(".img_slide ul li").eq(n).css("left","-100%").animate({
				"left":0
			},600);
			$(".img_slide ul li").eq(i).css("left",0).animate({
				"left":"100%"
			},600,function(){
				$(".pager li").on("click",click_slide);
				auto();
			});
		}else{
			$(".pager li").on("click",click_slide);
			auto();
		}
		
		$(".pager li").removeClass("on").eq(n).addClass("on");
		
		i = n;
	}
	
	auto();
	function auto(){
		
		repeat = setInterval(function(){
			n++;
			
			if(n==4){
				n=0;
			}
			$(".img_slide ul li").eq(n).css("left","100%").animate({
				"left":0
			},600);
			$(".img_slide ul li").eq(n-1).css("left","0").animate({
				"left":"-100%"
			},600);
			
			$(".pager li").removeClass("on").eq(n).addClass("on");
			
			
			i = n;
			
		},3000);
	}
	
	
	$(".gnb > li").mouseenter(function(){	
		$(this).children(".full_bg").stop().slideDown()
	});
	$(".gnb > li").mouseleave(function(){
		$(this).children(".full_bg").stop().slideUp()
	});
		
		
	$(".popup button").click(function(){
		$(".popup").stop().fadeOut();
	});	
	
	$(".popup").draggable();
	
	
	$(".scroll").click(function(){
		$("html,body").stop().animate({
			"scrollTop":0
		});
	});
	
	$(window).scroll(function(){
		var scr = $(window).scrollTop();
		if(scr>0){
			$(".scroll").fadeIn();
		}else{
			$(".scroll").fadeOut();
		}
	});	
		
	
	
	$(".hidden_logo").click(function(){
		$(".hidden_menu").addClass("on");
	});
	$(".h_close").click(function(){
		$(".hidden_menu").removeClass("on");
	});
	
	$(".hidden_menu > .h_m > li").click(function(){
		var dis = $(this).children("ul").css("display");
		
		if(dis=="none"){
			$(".hidden_menu > .h_m > li > ul").slideUp();
			$(this).children("ul").slideDown();
		}else{
			$(".hidden_menu > .h_m > li > ul").slideUp();
		}
	});
	
	
	
	
	
	//play_date
	var k =null;
	
	$(window).resize(function(){
		
		var ww = $(window).width();
		
		if(ww<770){
			$(".play_date").removeClass("active").addClass("on");
			
			
				$(".play_cover ul").width(100*12+"%");
				$(".play_cover ul li").width(100/12+"%");
				
				$(".next").off("click");
				$(".prev").off("click");
				$(".next").on("click",mobile_next_slide);
				$(".prev").on("click",mobile_prev_slide);
				
				$(".play_cover ul").css("margin-left",0);
				$(".play_cover ul li").removeClass("on");
				k = 0;
				$(".prev").css("display","none");
		
		}else{
			$(".play_date").removeClass("on").addClass("active");
			
			
				$(".play_cover ul").width((100/3)*12+"%");
				$(".play_cover ul li").width(100/12+"%");
				
				$(".play_cover ul").css("margin-left",0);
				$(".play_cover ul li").eq(1).addClass("on");
				
				$(".prev").css("display","block");
				$(".next").off("click");
				$(".prev").off("click");
				$(".next").on("click",pc_next_slide);
				$(".prev").on("click",pc_prev_slide);
				k = 1;
		}
		
	});
	
	$(window).trigger("resize");
	
	/*$(".play_cover ul").width((100/3)*12+"%");
	$(".play_cover ul li").width(100/12+"%");
	*/
	/*$(window).resize(function(){
		
		var ww = $(window).width();
		
		if(ww<770){
			$(".play_cover ul li").width(ww);
			$(".play_cover ul").width(ww*12);
			
			v
		}else{
			
		}
		
		console.log(ww);
	});
	*/
	
/*시도
	$(window).resize(function(){
		
		var ww = $(window).width();
		
		var clone = $(".play_cover ul li").eq(0).clone();
		$(".play_cover ul").append(clone);
		
		if(ww<770){
			
			$(".play_cover ul li").width(ww);
			$(".play_cover ul").width(ww*11);
			
			var k = 1;
			
			$(".next").click(function(){
	
				k++;
				var a = $(".play_cover ul li").width();
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*a
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");
				
				if(k==1){
					$(".prev").css("display","block");
				}
				if(k==11){
					$(".next").css("display","none");
				}
				
			});
			$(".prev").click(function(){
						
				k--;
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*$(".play_cover ul li").width()
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");	
				
				if(k==0){
					$(".prev").css("display","none");
				}
				if(k==10){
					$(".next").css("display","block");
				}
			});
		}else{
			$(".play_cover ul").width((100/3)*12+"%");
			$(".play_cover ul li").width(100/12+"%");
			
			var k = 1;
			
			$(".next").click(function(){
		
			
				k++;
				var a = $(".play_cover ul li").width();
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*a
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");
				
				if(k==1){
					$(".prev").css("display","block");
				}
				if(k==11){
					$(".next").css("display","none");
				}
				
			});
			$(".prev").click(function(){
						
				k--;
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*$(".play_cover ul li").width()
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");	
				
				if(k==0){
					$(".prev").css("display","none");
				}
				if(k==10){
					$(".next").css("display","block");
				}
			});
			
			
		}
		
		
		console.log(ww);
	});

	
	
	 원래꺼*/
	var clone = $(".play_cover ul li").eq(0).clone();
	$(".play_cover ul").append(clone);
	
	
	
	function pc_next_slide(){
		
		
			k++;
			var a = $(".play_cover ul li").width();
			
			$(".play_cover ul").stop().animate({
				"margin-left":-(k-1)*a
			},600);
			
			$(".play_cover ul li").removeClass("on").eq(k).addClass("on");
			
			if(k==1){
				$(".prev").css("display","block");
			}
			if(k==11){
				$(".next").css("display","none");
			}
	}
	function pc_prev_slide(){
			
			k--;
			
			$(".play_cover ul").stop().animate({
				"margin-left":-(k-1)*$(".play_cover ul li").width()
			},600);
			
			$(".play_cover ul li").removeClass("on").eq(k).addClass("on");	
			
			if(k==0){
				$(".prev").css("display","none");
			}
			if(k==10){
				$(".next").css("display","block");
			}
	}
	
	function mobile_next_slide(){
		
	
			k++;
			var a = $(".play_cover ul li").width();
			
			$(".play_cover ul").stop().animate({
				"margin-left":-k*a
			},600);
			
			
			
			if(k==1){
				$(".prev").css("display","block");
			}
			if(k==11){
				$(".next").css("display","none");
			}
	}
	function mobile_prev_slide(){
		
			k--;
			
			var a = $(".play_cover ul li").width();
			
			$(".play_cover ul").stop().animate({
				"margin-left":-k*a
			},600);
			
				
			
			if(k==0){
				$(".prev").css("display","none");
			}
			if(k==10){
				$(".next").css("display","block");
			}
	}
	
	/*
		$(window).resize(function(){
		
		var ww = $(window).width();
		
		var clone = $(".play_cover ul li").eq(0).clone();
		$(".play_cover ul").append(clone);
		
		if(ww<770){
			
			$(".play_cover ul li").width(ww);
			$(".play_cover ul").width(ww*11);
			
			var k = 1;
			
			$(".next").click(function(){
	
				k++;
				var a = $(".play_cover ul li").width();
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*a
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");
				
				if(k==1){
					$(".prev").css("display","block");
				}
				if(k==11){
					$(".next").css("display","none");
				}
				
			});
			$(".prev").click(function(){
						
				k--;
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*$(".play_cover ul li").width()
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");	
				
				if(k==0){
					$(".prev").css("display","none");
				}
				if(k==10){
					$(".next").css("display","block");
				}
			});
		}else{
			$(".play_cover ul").width((100/3)*12+"%");
			$(".play_cover ul li").width(100/12+"%");
			
			var k = 1;
			
			$(".next").click(function(){
		
			
				k++;
				var a = $(".play_cover ul li").width();
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*a
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");
				
				if(k==1){
					$(".prev").css("display","block");
				}
				if(k==11){
					$(".next").css("display","none");
				}
				
			});
			$(".prev").click(function(){
						
				k--;
				
				$(".play_cover ul").stop().animate({
					"margin-left":-(k-1)*$(".play_cover ul li").width()
				},600);
				
				$(".play_cover ul li").removeClass("on").eq(k).addClass("on");	
				
				if(k==0){
					$(".prev").css("display","none");
				}
				if(k==10){
					$(".next").css("display","block");
				}
			});
			
			
		}
		
		
		console.log(ww);
	});


	*/
	
	
	
	
	
	
	
	
});