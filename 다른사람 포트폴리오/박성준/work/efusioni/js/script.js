$(function(){

	
	$(".slide").on("mousewheel DOMMouseScroll", function(event, d){
		if(d<0){
			$(".contents, nav").addClass("prev");	
			$(".logo").addClass("on");			
		}
	});
	$(".contents").on("mousewheel DOMMouseScroll", function(event, d){
		if($(".contents").scrollTop()==0){
			if(d>0){
				$(".contents, nav").removeClass("prev");	
				$(".logo").removeClass("on");	
			}
		}
		
		if($(".contents").scrollTop()>=$(".contents_cover").height()-$(window).height()){
			if(d<0){
				$(".movie").addClass("on");	
				$(".logo").removeClass("on");
			}
		}
		
	});
	
	$(".movie").on("mousewheel DOMMouseScroll",movie_wheel);
	
	function movie_wheel(event, d){
		if(d<0){
			$(".movie").off("mousewheel DOMMouseScroll");	
			$("footer").stop().animate({
					"bottom":0
			}, function(){
				$(".movie").on("mousewheel DOMMouseScroll",movie_wheel);
			});
		}
		
		if(d>0){
			if($("footer").css("bottom")=="0px"){
				$(".movie").off("mousewheel DOMMouseScroll");
				$("footer").stop().animate({
						"bottom":-250
				}, function(){
					$(".movie").on("mousewheel DOMMouseScroll",movie_wheel);
					$(".logo").removeClass("on");
				});
			
			}else{
				
				$(".logo").addClass("on");
				$(".movie").removeClass("on").find("video").trigger("pause").prop("currentTime",0);
				$(".play_cover").css("display","block");		
				$(".pause_cover").css("display","none");
				$(".contents").scrollTop(0);				
				$("footer").stop().animate({
					"bottom":-250
				});
				
			}
		}
	}
	

	
	
	var i = 0;
	var k = 0;
	var repeat;
	
	$(".pager li").on("click",click_slide);
	
	function click_slide(){
		
		i = $(this).index();
		
		if(i==k)return;
				
		$(".list li").eq(i).find("video").css("display","block").trigger("play");
		$(".list li").eq(k).find("video").css("display","none").trigger("pause").prop("currentTime",0);
		
		if(i==0){
			$(".list li").removeClass();
			$(".list li").eq(6).addClass("prev");
			$(".list li").eq(0).addClass("active");
			$(".list li").eq(1).addClass("next");
			
		}else if(i==6){
			$(".list li").removeClass();
			$(".list li").eq(5).addClass("prev");
			$(".list li").eq(6).addClass("active");
			$(".list li").eq(0).addClass("next");
		}else{
			$(".list li").removeClass();
			$(".list li").eq(i-1).addClass("prev");
			$(".list li").eq(i).addClass("active");
			$(".list li").eq(i+1).addClass("next");
		}
		
		pager_animation();
		
		k=i;
	}
	
	
	
	timer();
	
	function timer(){
		repeat = setInterval(function(){
			i++;
			if(i==7){
				i=0;
				$(".list li").removeClass();
				$(".list li").eq(6).addClass("prev");
				$(".list li").eq(0).addClass("active");
				$(".list li").eq(1).addClass("next");
				
			}else if(i==6){
				$(".list li").removeClass();
				$(".list li").eq(5).addClass("prev");
				$(".list li").eq(6).addClass("active");
				$(".list li").eq(0).addClass("next");
			}else{
				$(".list li").removeClass();
				$(".list li").eq(i-1).addClass("prev");
				$(".list li").eq(i).addClass("active");
				$(".list li").eq(i+1).addClass("next");
			}
			$(".list li").eq(i).find("video").css("display","block").trigger("play");
			$(".list li").eq(k).find("video").css("display","none").trigger("pause").prop("currentTime",0);
			
			
			
			pager_animation();
			k=i;
		},4000);
		
	}
	
	function pager_animation(){
		var past_position = $(".pager li").eq(k).position().left;
		var present_position = $(".pager li").eq(i).position().left;
		$(".pager li").removeClass("on");
		if(past_position<present_position){
			$(".pager .line").css("left",past_position+30).animate({
				"width":present_position-past_position
			},200, function(){
				$(".pager .line").delay(100).css({
						"left":"auto",
						"right":$(".pager").width()-present_position-30
				}).animate({
					"width":0
				},200, function(){
					$(".pager li").eq(i).addClass("on");
				});
			});
		}else if(past_position>present_position){
			$(".pager .line").css("right",$(".pager").width()-past_position-30).animate({
				"width":past_position-present_position
			},200, function(){
				$(".pager .line").delay(100).css({
						"right":"auto",
						"left":present_position+30
				}).animate({
					"width":0
				},200, function(){
					$(".pager li").eq(i).addClass("on");
				});
			});
		}
	}
	$(".pager").mouseover(function(){
		clearInterval(repeat);
	});
	$(".pager").mouseleave(function(){
		timer();
	});
	for(var imgNum=1;imgNum<=42; imgNum++){
			$(".c_list ul").append("<li><img src='./images/clients_"+imgNum+".png' alt=''/></li>");
	}
	
	$("#mapbtn").click(function(){
		$(".f_layer").stop().animate({
			"bottom":0
		});
	});
	$(".control").click(function(){
		$(".f_layer").stop().animate({
			"bottom":"-100%"
		});
	});
	
	$(".navi li").click(function(){
			$(".contents").off("scroll");
			var t=$(this).children("a").attr("href");
			var off=$(t).position().top;
			$("#client .head").css({
				"position":"absolute",
				"left":"-40%"
			});
			$(".contents").stop().animate({
				"scrollTop":off
			},600,function(){
				$(".contents").on("scroll", onScroll)
			});
			
			$(".navi li").removeClass("on");
			$(this).addClass("on");
			return false;
	});
		
	$(".contents").on("scroll",onScroll);
		
	function onScroll(){	
	
		var s = $(".contents").scrollTop();
		
		$(".navi li").each(function(){
			var a=$($(this).children("a").attr("href"));
			
			if(s>=a.position().top && s<a.position().top + a.height()){
				$(".navi li").removeClass("on");
				$(this).addClass("on");
			}
			
			
		});
		if(s>=$("#client").position().top){
			$("#client .head").css({
				"position":"fixed",
				"left":"30.4%"
			});
		}else{
			$("#client .head").css({
				"position":"absolute",
				"left":"-40%"
			});
		}
	}	
	
	$(".movie").mousemove(function(e){
		var x = e.clientX;
		var y = e.clientY;
		
		$(".pause_cover").css({
			"top":y,
			"left":x
		});
	});
	
	$(".play_btn").click(function(){
		$(".video_cover video").trigger("play");
		$(".play_cover").css("display","none");		
		$(".pause_cover").css("display","block");
	});
	$(".pause_cover").click(function(){
		$(".video_cover video").trigger("pause").prop("currentTime",0);
		$(".play_cover").css("display","block");		
		$(".pause_cover").css("display","none");	
	});
});
























