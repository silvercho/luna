$(function(){
		
		var i = 0;
		var k = null;
		
		function prevSlide(){
			if(i==0){
				setTimeout(function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$("#pager ul li").on("click", clickSlide);
					$("header .gnb li").on("click", gnb_click);
				},200);
			}else{
				i--;
				$("#pager ul li").removeClass("on").eq(i).addClass("on");
				
				$(".section").eq(i+1).css("top","0%").animate({
					"top":"100%"
				},1000,"easeInOutExpo");
				
				$(".section").eq(i).css("top","-100%").animate({
					"top":"0"
				},1000,"easeInOutExpo",function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$("#pager ul li").on("click", clickSlide);
					$("header .gnb li").on("click", gnb_click);
					
					if($("#about").css("top")=="0px"){
						$("#about").addClass("on");
					}
					else if($("#ability").css("top")=="0px"){
						$("#ability").addClass("on")
						skillbar();
					}
					else if($("#work").css("top")=="0px"){
						$("#work").addClass("on");
					}
					else if($("#Contact").css("top")=="0px"){
						$("#Contact").addClass("on");
					}
				});
				$("#wrap").css("background-position","0 "+i*100+"px");
			}
			
			console.log(i);
			k=i;
			
		}
		function nextSlide(){
			var length = $(".section").length;
			if(i==length-1){
				setTimeout(function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$("#pager ul li").on("click", clickSlide);
					$("header .gnb li").on("click", gnb_click);
				},200);
			}else{
				i++;
				$("#pager ul li").removeClass("on").eq(i).addClass("on");
				
				$(".section").eq(i-1).css("top","0%").animate({
					"top":"-100%"
				},1000,"easeInOutExpo");
				
				$(".section").eq(i).css("top","100%").animate({
					"top":"0"
				},1000,"easeInOutExpo",function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$("#pager ul li").on("click", clickSlide);
					$("header .gnb li").on("click", gnb_click);
					
					if($("#about").css("top")=="0px"){
						$("#about").addClass("on");
					}
					else if($("#ability").css("top")=="0px"){
						$("#ability").addClass("on")
						skillbar();
					}
					else if($("#work").css("top")=="0px"){
						$("#work").addClass("on");
					}
					else if($("#Contact").css("top")=="0px"){
						$("#Contact").addClass("on");
					}
				
				});
			$("#wrap").css("background-position","0 "+i*100+"px");
			}
			console.log(i);
			k=i;
		}

		function mousewheel(e){
		
			var y = e.originalEvent.deltaY;
				$("#pager ul li, header .gnb li").off("click");
				$(document).off("wheel");
				$(document).off("keydown");
				

				if(y>0){
					nextSlide();
				}
				if(y<0){
					prevSlide();
				}
		}
		
		/////
		function pressKey(e){
		
				$("#pager ul li, header .gnb li").off("click");
				$(document).off("wheel");
				$(document).off("keydown");
				if(e.keyCode==38){
					e.preventDefault();
					prevSlide();
				}else if(e.keyCode==40){
					e.preventDefault();
					nextSlide();
				}else{
					setTimeout(function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown", pressKey);
						$("#pager ul li").on("click", clickSlide);
						$("header .gnb li").on("click", gnb_click);
					},200);
				}
		}
		
		
	
		
		////////////////
		
		function clickSlide(){
		
			i=$(this).index();	
			console.log(i);
			if(i==k) return;
				$("#pager ul li, header .gnb li").off("click");
				$(document).off("wheel");
				$(document).off("keydown");
			if(k>i){
				$(".section").eq(k).css('top',"0").animate({
					"top":"100%"
				},1000,"easeInOutExpo");
				$(".section").eq(i).css('top',"-100%").animate({
					"top":"0"
				},1000,"easeInOutExpo", function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$("#pager ul li").on("click", clickSlide);
					$("header .gnb li").on("click", gnb_click);
					
					if($("#about").css("top")=="0px"){
						$("#about").addClass("on");
					}
					else if($("#ability").css("top")=="0px"){
						$("#ability").addClass("on")
						skillbar();
					}
					else if($("#work").css("top")=="0px"){
						$("#work").addClass("on");
					}
					else if($("#Contact").css("top")=="0px"){
						$("#Contact").addClass("on");
					}
				
				});
				$("#wrap").css("background-position","0 "+i*100+"px");
			}else if(k<i){
				$(".section").eq(k).css('top',"0").animate({
					"top":"-100%"
				},1000,"easeInOutExpo");
				$(".section").eq(i).css('top',"100%").animate({
					"top":"0"
				},1000,"easeInOutExpo", function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$("#pager ul li").on("click", clickSlide);
					$("header .gnb li").on("click", gnb_click);
					
					if($("#about").css("top")=="0px"){
						$("#about").addClass("on");
					}
					else if($("#ability").css("top")=="0px"){
						$("#ability").addClass("on")
						skillbar();
					}
					else if($("#work").css("top")=="0px"){
						$("#work").addClass("on");
					}
					else if($("#Contact").css("top")=="0px"){
						$("#Contact").addClass("on");
					}
				
				});
				$("#wrap").css("background-position","0 "+i*100+"px");
			}
			$("#pager ul li").removeClass("on").eq(i).addClass("on");
			k=i;
			return false;
		}

		var t_start = null;
		var y = null;
		function handDragStart(e){
			$("#pager ul li, header .gnb li").off("click");
			$(document).off("wheel");
			$(document).off("keydown");
		
			y = e.originalEvent.touches[0].clientY;
			t_start=y;
		}

		function handDragMove(e){
			y = e.originalEvent.touches[0].clientY;
			
		}
		function handDragEnd(e){
			if(t_start-y>0){
				nextSlide();
			}
			if(t_start-y<0){
				prevSlide();
			}
		}

		
		$("#wrap").on("touchstart", handDragStart);
		$("#wrap").on("touchmove", handDragMove);
		$("#wrap").on("touchend", handDragEnd);
		
		$(document).on("wheel",mousewheel);
		$(document).on("keydown", pressKey);
		
		$("#pager ul li").on("click", clickSlide);
		$("header .gnb li").on("click", gnb_click);
		
		
		

	function gnb_click(){
	
		$(this).children("span").shuffleLetters();
		
		i=$(this).index();	
		console.log(i);
		if(i==k) return;
			$("#pager ul li, header .gnb li").off("click");
			$(document).off("wheel");
			$(document).off("keydown");
		if(k>i){
			$(".section").eq(k).css('top',"0").animate({
				"top":"100%"
			},1000,"easeInOutExpo");
			$(".section").eq(i).css('top',"-100%").animate({
				"top":"0"
			},1000,"easeInOutExpo", function(){
				$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$("#pager ul li").on("click", clickSlide);
				$("header .gnb li").on("click", gnb_click);
				
				if($("#about").css("top")=="0px"){
					$("#about").addClass("on");
				}
				else if($("#ability").css("top")=="0px"){
					$("#ability").addClass("on")
					skillbar();
				}
				else if($("#work").css("top")=="0px"){
					$("#work").addClass("on");
				}
				else if($("#Contact").css("top")=="0px"){
					$("#Contact").addClass("on");
				}
			
			});
			$("#wrap").css("background-position","0 "+i*100+"px");
		}else if(k<i){
			$(".section").eq(k).css('top',"0").animate({
				"top":"-100%"
			},1000,"easeInOutExpo");
			$(".section").eq(i).css('top',"100%").animate({
				"top":"0"
			},1000,"easeInOutExpo", function(){
				$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$("#pager ul li").on("click", clickSlide);
				$("header .gnb li").on("click", gnb_click);
				
				if($("#about").css("top")=="0px"){
					$("#about").addClass("on");
				}
				else if($("#ability").css("top")=="0px"){
					$("#ability").addClass("on")
					skillbar();
				}
				else if($("#work").css("top")=="0px"){
					$("#work").addClass("on");
				}
				else if($("#Contact").css("top")=="0px"){
					$("#Contact").addClass("on");
				}
			
			});
			$("#wrap").css("background-position","0 "+i*100+"px");
		}
		$("#pager ul li").removeClass("on").eq(i).addClass("on");
		k=i;
		return false;
	}	
	
	
	function skillbar(){
		
		$(".skillbar").each(function(){
			$(this).children(".skill_bar").animate({
				"height":$(this).attr("data-percent")
			},5000);
		});
		
		
		
		if($(".skillbar").hasClass("on")==false){
			$(".Count").each(function(){
				var t = $(this);
				
				$({ Counter:0 }).stop().animate({
					Counter:t.text()
				},{
					duration:5000,
					progress:function(){
						t.text(Math.ceil(this.Counter));
					}
				});
				
			});
			$(".skillbar").addClass("on");
		}
	}
	
	
	
	
	var a = 0;
	var b = 0;
	var repeat;
	

	$(".next").on("click",img_n_slide);
	$(".prev").on("click",img_p_slide);
	
	function img_n_slide(){
		$(".next").off("click");
		$("#pager ul li, header .gnb li").off("click");
		$(document).off("wheel");
		$(document).off("keydown");
		
	//	clearInterval(repeat);
		
		a++;
		if(a==6){
			a=0;
		}
		
		$(".imgs li").eq(a).css("left","100%").animate({
			"left":0
		},600);
		$(".imgs li").eq(a-1).css("left","0%").animate({
			"left":"-100%"
		},600, function(){
			$(".next").on("click",img_n_slide);
			$(document).on("wheel",mousewheel);
			$(document).on("keydown", pressKey);
			$("#pager ul li").on("click", clickSlide);
			$("header .gnb li").on("click", gnb_click);
			//timer();
		});
		
		$(".pager li").removeClass("on").eq(a).addClass("on");
		
		b=a;
	}
	function img_p_slide(){
		$("#pager ul li, header .gnb li").off("click");
		$(document).off("wheel");
		$(document).off("keydown");
	
		$(".prev").off("click");
		//clearInterval(repeat);
		a--;
		
		$(".imgs li").eq(a).css("left","-100%").animate({
			"left":0
		},600);
		$(".imgs li").eq(a+1).css("left","0%").animate({
			"left":"100%"
		},600, function(){
			$(".prev").on("click",img_p_slide);
			$(document).on("wheel",mousewheel);
			$(document).on("keydown", pressKey);
			$("#pager ul li").on("click", clickSlide);
			$("header .gnb li").on("click", gnb_click);
			//timer();
		});
		
		if(a==-1){
			a=5;
		}
		$(".pager li").removeClass("on").eq(a).addClass("on");
		b=a;
	}
	
});