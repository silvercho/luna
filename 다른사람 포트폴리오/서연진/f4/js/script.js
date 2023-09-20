$(function(){
	
	var i = 0;
	var k = 0;
	var repeat;
	
	$(".pager ul li").on("click",click_slide);
	function click_slide(){
		$(".pager ul li").off("click");
		i = $(this).index();
		if(i>k){
			$(".imgs li").eq(i).css("left","100%").animate({
				"left":0
			},1000);
			$(".imgs li").eq(k).css("left","0%").animate({
				"left":"-100%"
			},1000,function(){
				$(".pager ul li").on("click",click_slide);
			});
		}else if(i<k){
			$(".imgs li").eq(i).css("left","-100%").animate({
				"left":0
			},1000);
			$(".imgs li").eq(k).css("left","0%").animate({
				"left":"100%"
			},1000,function(){
				$(".pager ul li").on("click",click_slide);
			});
		}else{
			$(".pager ul li").on("click",click_slide);
		}
		$(".pager ul li").removeClass("on").eq(i).addClass("on");
		k=i;
	}
	timer();
	
	function timer(){
	repeat = setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".pager ul li").removeClass("on").eq(i).addClass("on");
		
		$(".img_slide > ul > li").eq(i).css("left","100%").animate({
			"left":"0%"
		},1000);
		$(".img_slide > ul > li").eq(i-1).css("left","0%").animate({
			"left":"-100%"
		},1000);
		
		k=1;
	},3000);
};	
	
	$(".next").on("click",next_slide);
	$(".prev").on("click",prev_slide);
	
	function next_slide(){
		$(".next").off("click");
		clearInterval(repeat);
		i++;
		if(i==3){
			i=0;
		}
		$(".imgs li").eq(i).css("left","100%").animate({
			"left":0
		},1000);
		$(".imgs li").eq(i-1).css("left","0%").animate({
			"left":"-100%"
		},1000,function(){
			$(".next").on("click",next_slide);
			timer();
		});
		$(".pager ul li").removeClass("on").eq(i).addClass("on");
		k=i;
	}
	function prev_slide(){
		$(".prev").off("click");
		clearInterval(repeat);
		i--;
		$(".imgs li").eq(i).css("left","-100%").animate({
			"left":0
		},1000);
		$(".imgs li").eq(i+1).css("left","0%").animate({
			"left":"100%"
		},1000,function(){
			$(".prev").on("click",prev_slide);
			timer();
		});
		if(i==-1){
			i=2;
		}
		$(".pager ul li").removeClass("on").eq(i).addClass("on");
		k=i;
	}
	
	
	
	$(".nav_btn").click(function(){
		$(".nav_btn").toggleClass("on");
		$(".nav990").toggleClass("on");
		$(".nav990 ul").toggleClass("on");
	});
});