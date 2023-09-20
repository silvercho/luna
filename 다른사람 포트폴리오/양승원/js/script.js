$(function(){
			var length = $("#wrap .section").length;
			$("body").append("<ul id='pager'></ul>");

			for(var r = 0; r<length; r++){
				$("#pager").append("<li></li>");
			}
			
			$("#pager li").eq(0).addClass("on");
			
			var i = 0;
			var k = null;
			
			$(document).on("wheel",mousewheel);
			$(document).on("keydown",pressKey);
			$("#pager li").on("click",clickSlide);
			
			
			
			
			function mousewheel(e){			
				
				if($("#wrap").hasClass("on")==true){
					var y = e.originalEvent.deltaY;
					$(document).off("wheel");
					$(document).off("keydown");	
					$("#pager li").off("click");
					console.log(true);
					if(y>0){
						nextSlide();
						
					}
					if(y<0){
						prevSlide();
						console.log(false);
					}
				}
			}
			function pressKey(e){
				if($("#wrap").hasClass("on")==true){
					$(document).off("wheel");	
					$(document).off("keydown");	
					$("#pager li").off("click");
					
					e.preventDefault();
					
					if(e.keyCode==38){
						prevSlide();
					}else if(e.keyCode==40){
						nextSlide();
					}
				}
			}
			
			
			
			
			
			
			function nextSlide(){
				if(i==length-1){
					setTimeout(function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown",pressKey);
						$("#pager li").on("click",clickSlide);
					},200);
				}else{
					i++;
					$("#pager li").removeClass("on").eq(i).addClass("on");
					$("#wrap .section").eq(i-1).css("top","0%").animate({
						"top":"-100%"
					},600);
					$("#wrap .section").eq(i).css("top","100%").animate({
						"top":"0%"
					},600,function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown",pressKey);
						$("#pager li").on("click",clickSlide);
						if($(".about").css("top")=="0px"){
							graph();
						}
					});
				}
				k=i;
				console.log(i);
			}
			
			function prevSlide(){
				if(i==0){
					setTimeout(function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown",pressKey);
						$("#pager li").on("click",clickSlide);
					},200);
				}else{
					i--;
					$("#pager li").removeClass("on").eq(i).addClass("on");
					$("#wrap .section").eq(i+1).css("top","0%").animate({
						"top":"100%"
					},600);
					$("#wrap .section").eq(i).css("top","-100%").animate({
						"top":"0%"
					},600,function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown",pressKey);
						$("#pager li").on("click",clickSlide);
						if($(".about").css("top")=="0px"){
							graph();
						}
					});
				}
				k=i;
				console.log(i);
			}
			
			function clickSlide(){
				i = $(this).index();
				if(i==k)return;
				
				$(document).off("wheel");	
				$(document).off("keydown");	
				$("#pager li").off("click");
				
				if(k<i){
					$("#wrap .section").eq(k).css("top","0%").animate({
						"top":"-100%"
					},600);
					$("#wrap .section").eq(i).css("top","100%").animate({
						"top":"0%"
					},600,function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown",pressKey);
						$("#pager li").on("click",clickSlide);
						if($(".about").css("top")=="0px"){
							graph();
						}
					});
				}else if(k>i){
					$("#wrap .section").eq(k).css("top","0%").animate({
						"top":"100%"
					},600);
					$("#wrap .section").eq(i).css("top","-100%").animate({
						"top":"0%"
					},600,function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown",pressKey);
						$("#pager li").on("click",clickSlide);
						if($(".about").css("top")=="0px"){
							graph();
						}
					});
				}
				$("#pager li").removeClass("on").eq(i).addClass("on");
				
				k=i;
			}
			/*
			$("#wrap").on("touchstart",handDragStart);
			$("#wrap").on("touchend",handDragEnd);
			
			var startY = null;
			var endY = null;
			
			function handDragStart(e){
				e.preventDefault();
				
				$(document).off("wheel");	
				$(document).off("keydown");	
				$("#pager li").off("click");
				
				if(e.type == "touchstart"){
					startY = e.originalEvent.touches[0].clientY;
				}else{
					startY = e.clientY;
				}
				$("#wrap").on("mousemove touchmove",handDragMove);
			}
			
			function handDragMove(e){
				e.preventDefault();
				
				if(e.type == "touchmove"){
					endY = e.originalEvent.touches[0].clientY;
				}else{
					endY = e.clientY;
				}
			}
			
			function handDragEnd(e){
				if(startY-endY>0){
				//터치하고 터치가끝났을때 0보다 클때(내렸을때)
					nextSlide();
				}
				if(startY-endY<0){
					prevSlide();
				}
			}
			*/
			
			$(".snow-canvas").snow();
			
			$(window).resize(function(){
				
				var h =	$(".window").height();
				$(".window_bg").height(h-80);
			});
			$(window).trigger("resize");
			
			
			
			/*$(window).scroll(function(){
				var s = $(this).scrollTop();
				var off2 = $(".skill").offset().top-200;
				
				if(s>off2){
					graph();
				}
			});
			*/
			function graph(){
		
			if($(".graph").hasClass("on")==false){
				
				$(".skill_graph li a").each(function(){
					var t = $(this);
					var circle_left = t.find(".left_wrapper .left_circle").css({"transform":"rotate(0deg)"});
					var circle_right = t.find(".right_wrapper .right_circle").css({"transform":"rotate(0deg)"});
					
					var p_num = t.find(".percent-number");
					var p_data = p_num.text();
					
					p_num.text(0);
					
					$({percent:0}).stop().animate({
						percent:p_data
					},{
						duration:1500,
						progress:function(){
							var now = this.percent;
							//25
							var deg = now*360/100;
							//90					
							var degRight = Math.min(Math.max(deg,0),180);
							//
							var degLeft = Math.min(Math.max(deg-180,0),180);
							//
							circle_right.css({"transform":"rotate("+degRight+"deg)"});
							circle_left.css({"transform":"rotate("+degLeft+"deg)"});
							p_num.text(Math.ceil(now));
						}
						
					});
					
				});
				
			}$(".graph").addClass("on")
		}
		
		
	
	
	var works_i = 0;
	var works_k = 0;
	var w_repeat;
	
	
	$(".w_pager li").on("click",click_slide);
	$(window).scroll(function(){
		var scr = $(this).scrollTop();
		
		var off = $(".about").offset().top;
		
		if(scr > off){
			
			graph();
		}
		
	});
	function click_slide(){
		$(".w_next").off("click");
		$(".w_prev").off("click");
		$(".w_pager li").off("click");
		clearInterval(w_repeat);
		
		works_i = $(this).index();
		
		if(works_i==works_k) {
			setTimeout(function(){
				$(".w_next").on("click",next_slide);
				$(".w_prev").on("click",prev_slide);
				$(".w_pager li").on("click",click_slide);
				w_timer();
			},400);
			
		}
		
		if(works_i>works_k){
			$(".w_imgs li").eq(works_i).css("left","100%").animate({
				"left":0
			},600);
			$(".w_imgs li").eq(works_k).css("left","0").animate({
				"left":"-100%"
			},600, function(){
				$(".w_next").on("click",next_slide);
				$(".w_prev").on("click",prev_slide);
				$(".w_pager li").on("click",click_slide);
				w_timer();
			});
		}else if(works_i<works_k){
			$(".w_imgs li").eq(works_i).css("left","-100%").animate({
				"left":0
			},600);
			$(".w_imgs li").eq(works_k).css("left","0").animate({
				"left":"100%"
			},600,function(){
				$(".w_next").on("click",next_slide);
				$(".w_prev").on("click",prev_slide);
				$(".w_pager li").on("click",click_slide);
				w_timer();
			});
		}
		
		$(".w_pager li").removeClass("on").eq(works_i).addClass("on");
		
		works_k=works_i;

	}
	
	
	w_timer();
	
	function w_timer(){
		w_repeat = setInterval(function(){
			$(".w_next").off("click");
			$(".w_prev").off("click");
			$(".w_pager li").off("click");
			
		
			works_i++;
			
			if(works_i==8){
				works_i=0;
			}
			$(".w_imgs li").eq(works_i).css("left","100%").animate({
				"left":0
			},600);
			$(".w_imgs li").eq(works_i-1).css("left","0%").animate({
				"left":"-100%"
			},600, function(){
				$(".w_next").on("click",next_slide);
				$(".w_prev").on("click",prev_slide);
				$(".w_pager li").on("click",click_slide);
			});
			
			$(".w_pager li").removeClass("on").eq(works_i).addClass("on");
			
			works_k=works_i;
		},3000);
	}
	
	
	
	$(".w_next").on("click",next_slide);
	$(".w_prev").on("click",prev_slide);
	
	function next_slide(){
		$(".w_next").off("click");
		$(".w_prev").off("click");
		$(".w_pager li").off("click");
		clearInterval(w_repeat);
		
		works_i++;
		if(works_i==8){
			works_i=0;
		}
		
		$(".w_imgs li").eq(works_i).css("left","100%").animate({
			"left":0
		},600);
		$(".w_imgs li").eq(works_i-1).css("left","0%").animate({
			"left":"-100%"
		},600, function(){
			w_timer();
			$(".w_next").on("click",next_slide);
				$(".w_prev").on("click",prev_slide);
				$(".w_pager li").on("click",click_slide);
		});
		
		$(".w_pager li").removeClass("on").eq(works_i).addClass("on");
		
		wokrs_k=works_i;
	}
	function prev_slide(){
		$(".w_next").off("click");
		$(".w_prev").off("click");
		$(".w_pager li").off("click");
		clearInterval(w_repeat);
	
		works_i--;
		
		$(".w_imgs li").eq(works_i).css("left","-100%").animate({
			"left":0
		},600);
		$(".w_imgs li").eq(works_i+1).css("left","0%").animate({
			"left":"100%"
		},600, function(){
				w_timer();
				$(".w_next").on("click",next_slide);
				$(".w_prev").on("click",prev_slide);
				$(".w_pager li").on("click",click_slide);
		});
		
		if(works_i==-1){
			works_i=7;
		}
		$(".w_pager li").removeClass("on").eq(works_i).addClass("on");
		works_k=works_i;
	}
	
	
	
	
	
	var works_page = 0;
	$(".works_btn").click(function(){
		works_page++;
		if(works_page>1){
			works_page = 0;
		}
		$(".page").removeClass("on").eq(works_page).addClass("on");
		
	});
	
	

	
	$(".f_gift img:nth-child(2)").click(function(){
		$(".pop1").fadeIn();
		
		$(document).off("wheel");
		$(document).off("keydown");	
		$("#pager li").off("click");
		
	});
	$(".pop1_b_wrap").click(function(){
		$(".pop1").fadeOut();
		
		$(document).on("wheel",mousewheel);
		$(document).on("keydown",pressKey);
		$("#pager li").on("click",clickSlide);
	});
	
	var pop1 = 0;
	
	$(".p_next1").click(function(){
		pop1++;
		
		if(pop1==8){
			pop1=0;
		}
		
		$(".pop1 ul li").eq(pop1).css("left","100%").animate({
			"left":0
		},600);
		$(".pop1 ul li").eq(pop1-1).css("left",0).animate({
			"left":"-100%"
		},600);
	});
	$(".p_prev1").click(function(){
		pop1--;
		
		$(".pop1 ul li").eq(pop1).css("left","-100%").animate({
			"left":0
		},600);
		$(".pop1 ul li").eq(pop1+1).css("left",0).animate({
			"left":"100%"
		},600);
	});
	
	$(".box img:nth-child(3)").click(function(){
		$(".pop2").fadeIn();
		
		$(document).off("wheel");
		$(document).off("keydown");	
		$("#pager li").off("click");
	});
	$(".pop2_b_wrap").click(function(){
		$(".pop2").fadeOut();
		
		$(document).on("wheel",mousewheel);
		$(document).on("keydown",pressKey);
		$("#pager li").on("click",clickSlide);
	});
	
	var pop3 = 0;
	
	$(".p_next3").click(function(){
		pop3++;
		
		if(pop3==14){
			pop3=0;
		}
		
		$(".pop3 ul li").eq(pop3).css("left","100%").animate({
			"left":0
		},600);
		$(".pop3 ul li").eq(pop3-1).css("left",0).animate({
			"left":"-100%"
		},600);
	});
	$(".p_prev3").click(function(){
		pop3--;
		
		$(".pop3 ul li").eq(pop3).css("left","-100%").animate({
			"left":0
		},600);
		$(".pop3 ul li").eq(pop3+1).css("left",0).animate({
			"left":"100%"
		},600);
	});
	
	$(".tree").click(function(){
		$(".pop3").fadeIn();
		
		$(document).off("wheel");
		$(document).off("keydown");	
		$("#pager li").off("click");
	});
	$(".pop3_b_wrap").click(function(){
		$(".pop3").fadeOut();
		
		$(document).on("wheel",mousewheel);
		$(document).on("keydown",pressKey);
		$("#pager li").on("click",clickSlide);
	});

});


























