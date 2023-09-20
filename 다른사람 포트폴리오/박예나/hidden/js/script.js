$(function(){
					
	/**********************language*****************************/
					$(".lang_cover ul li:first-child").click(function(){
						var a = $(this).next("li").css("display");
							
						if(a=="none"){
							$(this).next("li").stop().slideDown(600);
						}else{
							$(this).next("li").stop().slideUp(600);
						}
					});
					$(".lang_cover ul li:last-child").click(function(){
						var b = $(this).prev("li").css("display");
						
						if(b=="none"){
							$(this).prev("li").stop().slideDown(600);
						}else{
							$(".lang_cover ul li:first-child").css("display","none");
							$(this).css("border-top",0);
						}
						
					});
	
	/**********************img_slide*****************************/	

	$(window).resize(function(){
		var ih = $(".imgs li a img").height();
		$(".imgs").height(ih);
	});
	
	$(window).trigger("resize");
		
	setTimeout(function(){
		$(".imgs > li").eq(0).children(".slide_text").addClass("on");
	},1500);
					
					
	var k = 0;
					
	$(".pager li").click(function(){
		var i = $(this).index();
							
		if(i==k)return;
		if(i>k){
			$(".imgs > li").eq(i).css("left","100%").stop().animate({
				"left":0
			},1500);
			$(".imgs > li").eq(k).css("left",0).stop().animate({
				"left":"-100%"
			},1500,function(){
				$(".imgs > li .slide_text").removeClass("on");
				$(".imgs > li .text"+i).addClass("on");
			});
		}else if(i<k){
			$(".imgs > li").eq(i).css("left","-100%").stop().animate({
				"left":0
			},1500);
			$(".imgs > li").eq(k).css("left",0).stop().animate({
				"left":"100%"
			},1500,function(){
				$(".imgs > li .slide_text").removeClass("on");
				$(".imgs > li .text"+i).addClass("on");
			});
		}
		$(".pager li").removeClass("on").eq(i).addClass("on");
							
		k=i;
							
		return false;
	});

	var repeat;
	
	timer();
					
				function timer(){

					repeat = setInterval(function(){
						k++;
						if(k==4){k=0;}
						$(".imgs > li").eq(k).css("left","100%").stop().animate({
							"left":0
						},1500);
						$(".imgs > li").eq(k-1).stop().animate({
							"left":"-100%"
						},1500,function(){
							$(".imgs > li .slide_text").removeClass("on");
							$(".imgs > li .text"+k).addClass("on");
						});
						
						$(".pager li").removeClass("on").eq(k).addClass("on");
					},5500);
				}
				
	$(".pager").mouseover(function(){
		clearInterval(repeat);
	});
	$(".pager").mouseleave(function(){
		timer();
	});
		
	/**********************facility 자동 슬라이드****************************/
				
					var c = 0;
					
					setInterval(function(){
						c++;
						if(c>1){c=0;}
						$(".facility_slide").eq(c).fadeOut();
						$(".facility_slide").eq(c-1).fadeIn();
						
					},5000);

					
	$(window).scroll(function(){
		
		var sct = $(window).scrollTop();
		var off = $(".section_cover").offset().top+150;
		var h = $(".section_cover").height()-50;
		var target_height = $(".left_fixed").height();
		var t = sct-off;
		var scroll_end_position = (off+h)-target_height;
		var end_position = h-target_height;
		
		if(sct < off){
			$(".left_fixed").css({
				top:0
			});					
		}else if(sct >= off){
			if(sct>=scroll_end_position-150){
				$(".left_fixed").css({
					top:end_position-150
				});		
			}else{
				$(".left_fixed").css({
					top:t
				});	
			}		
		}
	});
	
	/**********************offer s슬라이드****************************/
			
	var clone = $(".offer_main > li").eq(0).clone();
	$(".offer_main").append(clone);
					
	var d = 0;
					
	$(".pager2 > li").click(function(){
						
		var i = $(this).index();
		var sec = Math.abs(d-i);
								
		if(i==k)return;
		if(i!=k){
			$(".offer_main").animate({
					"margin-left":-i*100+"%"
			},800*sec);
		}

		$(".offer_main li").removeClass("on3").eq(i).addClass("on3");
		$(".pager2 > li").removeClass("on2");
		$(this).addClass("on2");
					
		d=i;	
		return false;
	});
					
					
	$(".prev_cover").click(function(){
		if(d==0){
			d=7;
			$(".offer_main").css("margin-left",-d*100+"%");
		}
								
		d--;
		$(".offer_main").stop().animate({
				"margin-left":-d*100+"%"
		},1000);
								
		$(".offer_main li").removeClass("on3").eq(d).addClass("on3");
		$(".pager2 > li").removeClass("on2").eq(d).addClass("on2");
		return false;
	});		
					
	$(".next_cover").click(function(){
		if(d==7){
			d=0;
			$(".offer_main").css("margin-left",0);
		}
								
		d++;
		$(".offer_main").stop().animate({
				"margin-left":-d*100+"%"
		},1000);
								
		$(".offer_main li").removeClass("on3").eq(d).addClass("on3");
						
		if(d==7){
			$(".pager2 > li").removeClass("on2").eq(0).addClass("on2");
		}else{
			$(".pager2 > li").removeClass("on2").eq(d).addClass("on2");
		}
		return false;
	});
	
	/******************restaurant*********************/	
	
	var clone2 = $(".restaurant_b ul li").eq(0).clone();
	$(".restaurant_b ul").append(clone2);
	
	var e = 0;
	
	setInterval(function(){
		if(e==2){
			e=0;
			$(".restaurant_b ul").css("margin-left",-e*100+"%");
		}	
		
		e++;
		
		$(".restaurant_b ul").stop().animate({
				"margin-left":-e*100+"%"
		},800);
		
		$(".recommend").removeClass("on4").eq(e).addClass("on4");
	},3000);
	

});

