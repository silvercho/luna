$(function(){
/******************header**********************/	
	$("#search .img").click(function(){
		$("#search").toggleClass("on1");
	return false;
	});
/******************window_height**********************/	
	$(window).resize(function(){
		var h = $(window).height();
		var w = $(window).width();
		
		$("section").height(h);
		$("#furniture").height(h);
		
		
		if(w>930){
			/*948-950문제*/
			$("section.cover").height(h);
			$(".main_bg").height(h);
			$(".banner_slide").height(w*0.29);
			$("#fake_height").height(h/2+h/10);
		}else if(w<930 && w>618){
			$("section.cover").height(h*2+200);
			$(".fixed_cover").height(h*2);
			$(".main_cover2").height(h);
			$(".main_bg").height(h*2+200);
			$("#fake_height").height(h/2+20);
			$(".banner_slide").height(w*0.29);
		}else{
			$("section.cover").height(h*2+200);
			$(".fixed_cover").height(h*2);
			$(".main_cover2").height(h);
			$(".main_bg").height(h*2+200);
			$("#fake_height").height(h/2+20);
			$(".banner_slide").height(160);
		}
	});

	$(window).trigger("resize");
/*****************main_slide**********************/		
	
	var repeat;
	var i = 0;
	
	timer();
	
	function timer(){
		
		repeat = setInterval(function(){
			i++;
			if(i==4){i=0;}
			$(".main_cover1 .main_slide li").eq(i).css("left",0).stop().animate({"left":"50%"},1000);
			$(".main_cover3 .main_slide li").eq(i).css("right",0).stop().animate({"right":"50%"},1000);
			$(".main_cover1 .main_slide li").eq(i-1).css("left","50%").stop().animate({"left":"100%"},1000);
			$(".main_cover3 .main_slide li").eq(i-1).css("right","50%").stop().animate({"right":"100%"},1000);
		},3000);
	}
	
	$(".main_slide").mouseover(function(){
		clearInterval(repeat);
	});
	$(".main_slide").mouseleave(function(){
		timer();
	});
/******************paint**********************/
	$(window).scroll(function(){
		var h = $(window).height();
		var m = (h/10)*4;
		var sct = $(window).scrollTop();
		var n = sct/m;
		var w = $(window).width();
		
		if(sct>=0 && sct<200){
			$(".move").css({
				"top":(sct+m)*(1+n),
				"position":"absolute"
			});
			$(".fixed_cover").css({
				"position":"fixed",
				"top":0
			});
			$(".furniture_bg").stop().animate({
				"top":"50%",
				"opacity":0
			},500);
		}else if(sct>200){
			$(".move").css("top",h);
			$(".fixed_cover").css({
					"position":"absolute",
					"top":200
			});
				//$(".main_cover1").css("top",0);
				//$(".main_cover3").css("top",0);
			$(".furniture_bg").stop().animate({
				"top":0,
				"opacity":1
			},500);
		}
	return false;
	});
/******************furniture_slide**********************/

	$(".button_cover .button").click(function(){
		var i = $(this).index();
		
		$(".tab").css("display","none");
		$(".tab").eq(i).css("display","block");
		
		$(".button_cover .button").removeClass("on4");
		$(this).addClass("on4");
	});
	
			/**************best*************/
	
	var a = 0;
	
	$(".best .prev").click(function(){
		
		if(a==0){
			a=4;
			$(".best .furniture_right .furniture_slide").css("margin-left",-a*66.66+"%");
		}
		
		a--;
		
		$(".best .furniture_slide").stop().animate({"margin-left":-a*66.66+"%"},600);
		
		$(".best .furniture_slide li").removeClass("on2");
		$(".best .furniture_slide li").eq(a).addClass("on2");
	return false;
	});
	
	$(".best .next").click(function(){
		a++;
		if(a==4){
			a=0;
			$(".best .furniture_right .furniture_slide").css("margin-left",-a*66.66+"%");
		}
		
		
		
		$(".best .furniture_slide").stop().animate({"margin-left":-a*66.66+"%"},600);
		
		$(".best .furniture_slide li").removeClass("on2");
		$(".best .furniture_slide li").eq(a).addClass("on2");
		
		console.log(a);
	return false;
	});
	
			/**************new*************/
	
	var b = 0;
	
	$(".new .prev").click(function(){
		
		if(b==0){
			b=4;
			$(".new .furniture_right .furniture_slide").css("margin-left",-b*66.66+"%");
		}
		
		b--;
		
		$(".new .furniture_slide").stop().animate({"margin-left":-b*66.66+"%"},600);
		
		$(".new .furniture_slide li").removeClass("on3");
		$(".new .furniture_slide li").eq(b).addClass("on3");
	return false;
	});
	
	$(".new .next").click(function(){
		b++;
		if(b==4){
			b=0;
			$(".new .furniture_right .furniture_slide").css("margin-left",-b*66.66+"%");
		}
		
		
		
		$(".new .furniture_slide").stop().animate({"margin-left":-b*66.66+"%"},600);
		
		$(".new .furniture_slide li").removeClass("on3");
		$(".new .furniture_slide li").eq(b).addClass("on3");
		
		console.log(b);
	return false;
	});
	
/******************banner_slide**********************/	
	
	var c = 0;
	
	$(".banner_slide .prev").click(function(){
		c--;
		
		if(c==-5){
			c=-1;
		}
		
		$(".banners li").eq(c).css("left","-50%").stop().animate({"left":0},1000);
		$(".banners li").eq(c+1).css("left",0).stop().animate({"left":"50%"},1000);
		
		
	});
	
	$(".banner_slide .next").click(function(){
		c++;
		
		if(c==4){
			c=0;
		}
		
		$(".banners li").eq(c).css("left","50%").stop().animate({"left":0},1000);
		$(".banners li").eq(c-1).css("left",0).stop().animate({"left":"-50%"},1000);
		
	});
	
	var repeat2;
	
	timer2();
	var c = 0;
	function timer2(){
		repeat2 = setInterval(function(){
			c++;
			
			if(c==4){
				c=0;
			}
			
			$(".banners li").eq(c).css("left","50%").stop().animate({"left":0},1000);
			$(".banners li").eq(c-1).css("left",0).stop().animate({"left":"-50%"},1000);
			
			console.log(c);
		},5000);
	}
	
	$(".banner_slide .np_button").mouseover(function(){
			clearInterval(repeat2);
	});
	$(".banner_slide .np_button").mouseleave(function(){
			timer2();
	});
	
/******************menu**********************/

	$("header #menu_icon").click(function(){
		$("#menu").stop().animate({"top":0},600);
	});
	$("#menu .close").click(function(){
		$("#menu").stop().animate({"top":"-100%"},600);
	});
		
	$(".menu_left ul li").click(function(){
		var i = $(this).index();
		
		$(".menu_right .menu_cover").removeClass("on");
		$(".menu_right .menu_cover").eq(i).addClass("on");
		
		$(".menu_left .tab_box").stop().animate({"top":40+(i*41)},300);
		$(".menu_left ul li").removeClass("on");
		$(this).addClass("on");
	});
	
/******************footer**********************/	
	
	$("footer .footer_menu > ul > li").click(function(){
		var w = $(window).width();
		
		if(w<635){
			var d = $(this).children("ul").css("display");
			
			if(d=="none"){
				$("footer .footer_menu > ul > li > ul").stop().slideUp();
				$(this).children("ul").stop().slideDown();
			}else{
				$(this).children("ul").stop().slideUp();
			}
		}
	});
	$(window).scroll(function(){
		var w = $(window).width();
		var sct = $(window).scrollTop();
		var foot = $("footer").offset().top;
		
		if(w<635){
			if(sct<foot){
				$("footer .footer_menu > ul > li > ul").slideUp();
			}
		}else if(w>=635){
			$("footer .footer_menu > ul > li > ul").css("display","block");
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});