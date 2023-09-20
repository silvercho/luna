$(function(){
	$(".main_img .img li").eq(0).css("left","0");
	$(".main_img .img li").eq(0).siblings().css("left","100%");
	
		var i=0;
				
		$(".next").click(function(){
			i++;
			if(i==4){
				i=0;
			}
			$(".main_img .img li").eq(i).css("left","100%").animate({
				"left":"0"
			});
			$(".main_img .img li").eq(i-1).css("left","0%").animate({
				"left":"-100%"
			});
		});
		
		$(".prev").click(function(){
			i--;
			if(i==-4){
				i=0;
			}
			$(".main_img .img li").eq(i).css("left","-100%").animate({
				"left":"0"
			});
			$(".main_img .img li").eq(i+1).css("left","0%").animate({
				"left":"100%"
			});
		});
		

	$(window).resize(function(){
		var h = $(window).height();
		
		var imgh = $(".banner_img .gnb2 li img").height();
		$(".main_img").height(h);
		
		$(".banner_img .gnb1").height(imgh);
	});	
	
	$(window).trigger("resize");	
		
	$(".banner_img .gnb1 li").eq(0).css("left","0");
	$(".banner_img .gnb1 li").eq(0).siblings().css("left","100%");
	
		var n = 0;
		
		setInterval(function(){
			n++;
			if(n==2){
			   n=0
			}
			$(".banner_img .gnb1 li").eq(n).css("left","100%").animate({
				"left":"0"
			},400);
			$(".banner_img .gnb1 li").eq(n-1).css("left","0%").animate({
				"left":"-100%"
			},400);
			
		},3000);
	
	$(window).scroll(function(){
		var s = $(window).scrollTop();
		
		if(s>99){
			$("header").addClass("on");
		}else{
			$("header").removeClass("on");
		}
		
	});
	
	
	
});