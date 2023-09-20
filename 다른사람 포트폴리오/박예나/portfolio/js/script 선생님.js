$(function(){

		/***********************************************/
		var i = 0; 
		
		$(".next_button").click(function(){
			
			i++;
			
			if(i>2){i=0;}
					
					$(".cloth li").removeClass("on1");
					$(".cloth li").eq(i).addClass("on1");
					
					
					return false;
		});
		
		
		/***********************************************/

			$(document).mousemove(function(e){
				
				var px = e.clientX;
				var py = e.clientY;
				
				$("#mouse").css({"left":px-50,"top":py-50})
			});
		
		
		/***********************************************/
		
		$(window).resize(function(){
			var w = $(window).width()/2;
			var h = $(window).height();
			$(".clothes").height(h);
			$("#skill").height(h);
			$("#work").height(h);
			$("#contact").height(h);
			
			
			$("body").height(h*5+w);
		});
	
		$(window).trigger("resize");
		
		/***********************************************/
		$(document).on("scroll",onScroll);
		
		$("header ul li").click(function(){
				var w;
				var h = $(window).height();
				var n = $(this).index();
			
				$(document).off("scroll");
				if(n==0){
					w=0;
				}else{
					w=$(window).width()/2;
				}
		
				$("html, body").stop().animate({
					"scrollTop":h*n+w
				},1500, function(){
					$(document).on("scroll",onScroll);
				});
				
				$("header ul li").removeClass("on3").eq(n).addClass("on3");	
				
				console.log($(window).scrollTop())
		});
		
		function onScroll(){

			var sct = $(window).scrollTop();
			var w = $(window).width()/2;
			var h = $(window).height();
			
			$("header ul li").each(function(){
					var i = $(this).index();
					if(sct >= h*i+w-70 && sct < (h*(i+1))+w-70){
							if(i==0){
								w=0;
								$("header ul li").removeClass("on3").eq(i).addClass("on3");
							}else{
								w=w;
								$("header ul li").removeClass("on3").eq(i).addClass("on3");
							}
					}
			});
			
		
		}
	
		
		/***********************************************/
		/*$("#main img").mousewheel(function(event,d){
			
			var h = $(window).height();
			
				if(d<0){
					$("html,body").stop().animate({
						"scrollTop":h
					},1000,"easeOutCubic");
				}
				
		});
		$("#door").mousewheel(function(event,d){
			
			
			
				if(d>0){
					if($(".door_left").css("left")=="0px")
					$("html,body").stop().animate({
						"scrollTop":0
					},1000,"easeOutCubic");
				}
				
		});*/
		
		
	
		var past_scroll = null;
			
		$(window).scroll(function(){
				var sct = $(window).scrollTop();
				var h = $(window).height();
				var move = (sct-h);
				var mt = $("#main").offset().top;

				if(sct>past_scroll){
					$("header").css({"top":"-75px","transition":"all 0.4s"});
				}else if(sct<past_scroll){
					$("header").css({"top":0,"transition":"all 0.4s"});	
				}
				past_scroll=sct;
				
				
				if(sct>=h){
					
					
					$("#main").css({"display":"none","transform":"translateZ("+h+"px)"});
					
					
					var w = $(window).width()/2;
					
					if(sct > h+w){
						$(".wrap").css({
							//"position":"relative",
							//"margin-top":h+w
							"position":"fixed",
							"top":-(sct-(h+w))
						});
					}else{
						$(".wrap").css({
							"position":"fixed",
							"top":0
						});
					}
					
					if(move>w){
						
						$(".door_left").css({"left":-w});
						$(".door_right").css({"right":-w});
						$("#door").css("display","none");
						

						}else{
							
							if(move>=(h+w)/4){
							
								$("#door").css("display","none");
								$("section").css("display","none");
								
								
								/*$(".wrap").css({
									"position":"fixed",
									"top":0,
									"margin-top":0
								});
								*/
							}else{
								$("#door").css("display","block");
								$("section").css("display","block");
								$(".door_left").css({"left":-(move*2)});
								$(".door_right").css({"right":-(move*2)});
								
								
								/*$(".wrap").css({
									"position":"fixed",
									"top":0,
									"margin-top":0
								});*/
							}
						}

					
				}else{
					
					if(sct>mt){
						$("header").css({"top":0,"transition":"all 0.4s"});	
					}
					
					$("#main").css({"display":"block","transform":"translateZ("+sct+"px)"});
					$(".door_left").css({"left":0});
					$(".door_right").css({"right":0});
					
					/*(".wrap").css({
						"position":"fixed",
						"top":0
					});*/
				}
		});
		
		/***********************************************/		
		var repeat;		
		timer();
		var pi=-2;
		function timer(){
		repeat = setInterval(function(){
				pi++;
				if(pi>=6){
					clearInterval(repeat);
				}
				$(".main_text p").eq(pi).addClass("on2")
				//console.log(pi);
			},500);
		}
		/***********************************************/

		for(var i=1; i<=4; i++){
					$(".rain_cover").append("<img src='./images/rain"+i+".svg' alt=''/>")
			}
			
		var k=1;
			
				setInterval(function(){
					k++;
					
					if(k>4){
							k=1;
					}
					$(".rain_cover img").css("display","none");
					$(".rain_cover img").eq(k).css("display","block");
				},100);
			
			
			
			
		for(var i=1; i<=6; i++){
				$(".juice_cover").append("<img src='./images/juice"+i+".svg' alt=''/>")
		}
		
			
			var a=0;
			var repeat2;
			function timer2(){
				
		
			repeat2 = setInterval(function(){	
			
					a++;
					if(a==7){
						clearInterval(repeat2);
						a=0;
					}

					$(".juice_cover img").css("display","none");
					$(".juice_cover img").eq(a).css("display","block");
					$(".juice_cover img").eq(0).css("display","none");
				},100);
				
				
			}
			
			
		
		
		
		
		$(window).scroll(function(){
			var h = $(window).height();
			var w = $(window).width()/2;
			var sct = $(window).scrollTop();
			var skill_off = 2*h+w-80;
			var work_off = 2*h+w-80+h;
			var contact_off = 2*h+w-80+h+h;
		
		
		
		
			if(sct < skill_off || sct > work_off){
				 $(".juice_cover").removeClass("on");
			 }
		
		
		
		
			if(sct>=skill_off && sct<=work_off){
				
				$(".animate").addClass("on");
				

				$(".skill_bar").each(function(){
					var delay = $(this).attr("data-delay");
					
					$(this).delay(delay).animate({
						"left":$(this).parent(".skillbar").attr("data-percent")+"%"
					},1700);
				});

					
						if($(".skillbar").hasClass("on") == false){
				
							$(".Count").each(function(){
								var delay = $(this).attr("data-delay");
					
								var t = $(this);
									$({ Counter:0 }).delay(delay).animate({
										Counter:$(this).parent(".skillbar").attr("data-percent")
									},{
									duration:1700,
									progress:function(){
											t.text(Math.ceil(this.Counter));
									}
									});
							});
						}
						
						
						if($(".juice_cover").hasClass("on") == false){	
						setTimeout(function(){
								timer2();//주스실행	
							},3350);
							$(".juice_cover").addClass("on")
						}
						
					
						$(".skillbar").addClass("on");

			}else{
					$(".animate").removeClass("on");
			}
			


			
			if(sct>=contact_off){
				$(".me_animation").addClass("on5");
			}else{
				$(".me_animation").removeClass("on5");
			}
			
		});

	/***********************************************/
		
		$("#work .w_hover").mouseover(function(){
			var w = $(this).children("a").attr("data-hover");
			
			$(".shop").addClass("on");
			$(".shop").children("img").removeClass("on4");
			$(".shop").children("img").eq(w).addClass("on4");
			
		});	
			
		$("#work .w_hover").mouseleave(function(){
			$(".shop").removeClass("on");
			$(".shop").children("img").removeClass("on4");
			$(".shop").children("img").eq(0).addClass("on4");
			
			
		});	
		

		var p = null;	
		$("#work .w_hover").click(function(){
			p = $(this).index()-1;

		
			$("header").css({"top":0});	
			$(".work_pop").css("left","100%");
			$(".work_pop").eq(p).css("left",0);
			$(".pager_bar").css("left",16.66*p+"%");
			$("#pop_slide").addClass("on11");
			$("body").css("overflow","hidden");
			
			console.log(p);
			return false;
		});	
		$("header").click(function(){
			$("body").css("overflow-y","scroll");
			$("#pop_slide").removeClass("on11");
		});

		
		$(".w_next").click(function(){
			p++;
			
			if(p>5){p=0;}
			
			$(".work_pop").eq(p).css("left","100%").stop().animate({"left":0},600);
			$(".work_pop").eq(p-1).css("left",0).stop().animate({"left":"-100%"},600);
		
			$(".pager_bar").stop().animate({"left":16.66*p+"%"},600);
			console.log(p);
			
			return false;
		});
		
		$(".w_prev").click(function(){
			p--;
			
			if(p<0){
				p=5;
				$(".work_pop").eq(5).css("left","-100%").stop().animate({"left":0},600);
				$(".work_pop").eq(0).css("left",0).stop().animate({"left":"100%"},600);
				$(".pager_bar").stop().animate({"left":16.66*5+"%"},600);
				
			}else{
				$(".work_pop").eq(p).css("left","-100%").stop().animate({"left":0},600);
				$(".work_pop").eq(p+1).css("left",0).stop().animate({"left":"100%"},600);
			}
		$(".pager_bar").stop().animate({"left":16.66*p+"%"},600);
		
		console.log(p);
		
		return false;
		});
		
		
		
		
		$(".pager li a").click(function(){
			var i= $(this).parents("li").index()-1;
			
			if(i==p)return;
			if(i>p){
				$(".work_pop").eq(i).css("left","100%").stop().animate({"left":0},600);
				$(".work_pop").eq(p).css("left",0).stop().animate({"left":"-100%"},600);
			}else if(i<p){
				$(".work_pop").eq(i).css("left","-100%").stop().animate({"left":0},600);
				$(".work_pop").eq(p).css("left",0).stop().animate({"left":"100%"},600);
			}
			p=i;
			$(".pager_bar").stop().animate({"left":16.66*i+"%"},600);
			
			return false;
			
		});
		
		

		
		
		$("#pop_slide .close").mouseover(function(){
			$(this).removeClass("on9");
		});
		$("#pop_slide .close").mouseleave(function(){
			$(this).addClass("on9");
		});
		
		
		
		$(".close").click(function(){
			var wh = $("#work .w_hover").index()-1;
			
			$("header").css({"top":"-75px"});
			$(".pager_bar").css("left",0);
			$("#pop_slide").removeClass("on11");
			$("body").css("overflow-y","scroll");
			
		return false;
		});
		
		

	/***********************************************/		
		var pc=0;	
		var repeat3;

		timer3();
		
		function timer3(){
			
			repeat3 = setInterval(function(){
				pc++;
				if(pc==6){pc=0;}
				$(".work_pop1 .pc_cover ul li").eq(pc).css("left","100%").animate({"left":0},600);
				$(".work_pop1 .pc_cover ul li").eq(pc-1).css("left",0).animate({"left":"-100%"},600);
				//console.log(pc);
				
				
			},3000);
		
			
		}		
		$(".work_pop1 .pc_cover").mouseover(function(){
				clearInterval(repeat3);
		});
		$(".work_pop1 .pc_cover").mouseleave(function(){
				timer3();
		});
		
		
			
	/***********************************************/				
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
});				