$(function(){

		$(window).resize(function(){
			var w = $(window).width()/2;
			var h = $(window).height();
			
			$(".clothes").height(h);
			$(".m_three_quart").height(h);
			$(".shop").height(h);
			$("#contact").height(h);
			
			$("body").height(h*8+w+100);

			return false;
			
		});
		
		$(window).trigger("resize");
		
/************************header******************************/
		$(".menu > a").click(function(){
			$("header").toggleClass("on4");
			$(".menu").toggleClass("on6");
			
			if($("header").hasClass("on4") == true){
				$("body").css("overflow","hidden");
			}else{
				$("body").css("overflow-y","scroll");
			}
			
			return false;
		});

/************************header******************************/

		$("header ul li").click(function(){
			
			var sct = $(window).scrollTop();
			var w = $(window).width()/2+120;
			var h = $(window).height();
			var i = $(this).index();
			
			
					if(i==0){
						$("html, body").stop().animate({
							"scrollTop":0
						},1500);
					}else if(i==1){
						$("html, body").stop().animate({
							"scrollTop":w
						},1500);
					}else if(i==2){
						$("html, body").stop().animate({
							"scrollTop":w+2*h
						},1500);
					}else if(i==3){
						$("html, body").stop().animate({
							"scrollTop":w+5*h
						},1500);
					}else if(i==4){
						$("html, body").stop().animate({
							"scrollTop":w+7*h
						},1500);
					}
						
						
					$("header ul li").removeClass("on3").eq(i).addClass("on3");
					$("header").removeClass("on4");
							if($("header").hasClass("on4") == true){
								$("body").css("overflow","hidden");
							}else{
								$("body").css("overflow-y","scroll");
							}
					$(".menu").removeClass("on6");
			});

		

/************************main_text******************************/		
		var repeat;		
		timer();
		var pi=-1;
		function timer(){
		repeat = setInterval(function(){
				pi++;
				if(pi>=5){
					clearInterval(repeat);
				}
				$(".main_text p").eq(pi).addClass("on2")
				//console.log(pi);
			},500);
		}
		
/************************clothes_silde******************************/		
		 
		var ii = 0;
		$(".next_button").click(function(){
			
			ii++;	
			console.log(ii);
			if(ii>2){ii=0;}
				
					$(".cloth li").removeClass("on1");
					$(".cloth li").eq(ii).addClass("on1");
					
					return false;
		});
		

		
/************************document_scroll******************************/				
		
			
		$(window).scroll(function(){
				var sct = $(window).scrollTop();
				var h = $(window).height();
				var move = (sct-150);
				var mt = $("#main").offset().top;
				
		if(sct>=100){
					$("#main").fadeOut(100);
					var w = $(window).width()/2;
					
					if(sct > 100+w){
						$(".wrap").css({
							"position":"fixed",
							"top":-(sct-(100+w))
						});
						
					if(sct<w+100+7*h && sct+40>=w+100+5*h){
						$(".menu").addClass("on7");
					}else{
						$(".menu").removeClass("on7");
					}
						
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
						$("section").css("display","none");
						

					}else{
							
							if(move<w+100 && move>0){
							
								$("#door").css("display","block");
								$("section").css("display","block");
								$(".door_left").css({"left":-(move*1.05)});
								$(".door_right").css({"right":-(move*1.05)});
							}else if(move<0){
								$("#door").css("display","block");
								$("section").css("display","block");
							}
						}

				}else{
					 
						 $("#main").fadeIn(100);
					
					$(".door_left").css({"left":0});
					$(".door_right").css({"right":0});
				}
		});
			
			
/************************skill_rain******************************/
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
				
/************************skill_juice******************************/				
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
					//console.log(bike);
				
			},120);
		}
			
							
	$(window).scroll(function(){
			var h = $(window).height();
			var w = $(window).width()/2;
			var sct = $(window).scrollTop();
			var skill_off1 = 100+w+(2*h);
			var skill_off2 = 100+w+(3*h);
			var skill_off3 = 100+w+(4*h);
			var work_off = 100+w+(5*h);
			var contact_off = 100+w+(7*h);
	
				
			if(sct < skill_off1 || sct > work_off){
					$(".juice_cover").removeClass("on");
				} 
			
						/************skill_bar************/
			if(sct>=skill_off1 && sct<=work_off){
								
									if(sct>=skill_off1 && sct<skill_off2){
										
										$(".m_animate").removeClass("on");
										$(".m_animate1").addClass("on");
										$(".skillbar1").addClass("on");
										$(".skill_bar1").animate({
											"left":$(".skillbar1").attr("data-percent")+"%"
										},1700);
										
											
											/************count************/
											if($(".m_html").hasClass("on") == false){
							
													$(".m_html").each(function(){
																		
														var t = $(this);
														$({ Counter:0 }).animate({
															Counter:$(this).find(".skillbar").attr("data-percent")
														},{
															duration:1700,
															progress:function(){
																t.find(".Count").text(Math.ceil(this.Counter));
															}
														});
													});
													$(".m_html").addClass("on");
											}
										
									}else if(sct>=skill_off2 && sct<skill_off3){
										
										$(".m_animate").removeClass("on");
										$(".m_animate2").addClass("on");
										$(".skillbar2").addClass("on");
										$(".skill_bar2").animate({
											"left":$(".skillbar2").attr("data-percent")+"%"
										},1700);
										
										
										/************count************/
										if($(".m_illust").hasClass("on") == false){
							
													$(".m_illust").each(function(){
																		
														var t = $(this);
														$({ Counter:0 }).animate({
															Counter:$(this).find(".skillbar").attr("data-percent")
														},{
															duration:1700,
															progress:function(){
																t.find(".Count").text(Math.ceil(this.Counter));
															}
														});
													});
													$(".m_illust").addClass("on");
										}
										
									}else if(sct>=skill_off3 && sct<=work_off){
										
										$(".m_animate").removeClass("on");
										$(".m_animate3").addClass("on");
										$(".skillbar3").addClass("on");
										$(".skill_bar3").animate({
											"left":$(".skillbar3").attr("data-percent")+"%"
										},1700);
										
										
										/************count************/	
										if($(".m_jquery").hasClass("on") == false){
							
													$(".m_jquery").each(function(){
																		
														var t = $(this);
														$({ Counter:0 }).animate({
															Counter:$(this).find(".skillbar").attr("data-percent")
														},{
															duration:1700,
															progress:function(){
																t.find(".Count").text(Math.ceil(this.Counter));
															}
														});
													});
													$(".m_jquery").addClass("on");
										}
										
										/************juice 실행************/		
										if($(".juice_cover").hasClass("on") == false){	
											setTimeout(function(){
													timer2();	
												},800);
												$(".juice_cover").addClass("on");
										}
									}


			}else{
					$(".m_animate").removeClass("on");
			}
			

		/**********************contact_animation*********************/	
			
			if(sct>=contact_off){
				$(".me_animation").addClass("on5");
			}else{
				$(".me_animation").removeClass("on5");
			}
			
		});
		




















});