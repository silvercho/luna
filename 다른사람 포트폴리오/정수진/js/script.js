$(function(){
	$(window).on("scroll",scroll_active);
	$(window).on("scroll",onScroll);
	
	function scroll_active(){
		var w = $(window).width();
		
		if(w>800){
			var s = $(this).scrollLeft();
			var off1 = $(".s5").offset().left;
			var off2 = $(".skill").offset().left-100;
			
			if(s>=off1){
				$(".s5 .s5_main .s5_main_slide").slick("slickPlay");
			}
			
			if(s>=off2){
				graph();
			}
			$("#wrap>section").each(function(){
				var off = $(this).offset().left;
				var i = $(this).index()+1;
				if(s>=off-100 && s<off+$(window).width()-100){
					
					if($(this).hasClass("s2")==true){
						$(this).addClass("on");
					}else{
						$(this).find(".s"+i+"_img").addClass("on");
					}
					
				}else{
					$(this).find(".s"+i+"_img").removeClass("on");
				}
			});
		}else{
			var s = $(this).scrollTop();
			var off1 = $(".s5").offset().top;
			var off2 = $(".skill").offset().top-100;
			
			if(s>=off1){
				$(".s5 .s5_main .s5_main_slide").slick("slickPlay");
			}
			
			if(s>=off2){
				graph();
			}
			$("#wrap>section").each(function(){
				var off = $(this).offset().top;
				var i = $(this).index()+1;
				if(s>=off-100 && s<off+$(this).height()-100){
					
					if($(this).hasClass("s2")==true){
						$(this).addClass("on");
					}else{
						$(this).find(".s"+i+"_img").addClass("on");
					}
					
				}else{
					$(this).find(".s"+i+"_img").removeClass("on");
				}
			});
		}
		
	}	
		
	function onScroll(){
		var scr=$(window).scrollLeft();
		
		$("#menu li").each(function(){
			
			var t=$($(this).children("a").attr("href"));
			var off=t.offset().left;
			
			if(scr>=off && scr<off+t.width()){
				$("#menu li").removeClass("on");
				$(this).addClass("on");
			}
		});
	}
	
	$("#menu li").click(function(){
		
		$(window).off("scroll",onScroll);
		
		var target=$(this).children("a").attr("href");
		var off=$(target).offset().left;
		
		$("#menu li").removeClass("on");
		$(this).addClass("on");
		
		$("html,body").stop().animate({
			"scrollLeft":off
		},1300,function(){
			$(window).on("scroll",onScroll);
		});
		return false;
	});	
	
	$("#wrap > section").on("mousewheel DOMMousescroll",function(event, y){
		var w = $(window).width();
		
		if(w>800){
			event.preventDefault();
		
			var scr = $(window).scrollLeft();
			if(y<0){
				var s = $(this).next("section").offset().left;
				//$(window).scrollLeft(scr+100);
			}else if(y>0){
				//$(window).scrollLeft(scr-100);
				var s = $(this).prev("section").offset().left;
				
			}
			$("html,body").stop().animate({
				scrollLeft:s
			},1300);
			
			console.log(s);
		}else{
			return;
		}
		
		
	});
	

	
	$(".s5 .s5_main .s5_main_slide").slick({
		arrows:false,	//next, prev 버튼 출력 여부
		autoplay:false,	//자동 슬라이드 실행 여부
		autoplaySpeed:3000,	//자동 슬라이드 실행 시간/이미지 
		slidesToShow:4,	//슬라이드에 보여질 이미지의 갯수
		slidesToScroll:1,	//슬라이드시 이동하는 이미지의 갯수
		pauseOnHover:true,	//마우스 호버시 자동슬라이드 정지 여부
		
		responsive:[
					{breakpoint:800, settings:{slidesToShow:3, slidesToScroll:1}}, 
				]
	});
	
	
	
	$(".s5 .s5_main .pager li").on("click",click_pager);
		
		function click_pager(){
			$(".s5 .s5_main .pager li").off("click",click_pager);
		
			var i=$(this).index();
			var w=$(".s5 .s5_main .pager li").width();
			$(".s5_main_slide").slick("slickGoTo",i);
			$(".focus").stop().animate({
				"left":i*w
			},600, function(){
				$(".pager li").on("click",click_pager);
			});
			
			
			
			return false;
		}
		
		$(".s5_main_slide").on("beforeChange",function(event, slick, currentSlide, nextSlide){
			var cs=$(".s5_main_slide").slick("slickCurrentSlide")+1;
			if(cs==5){
				cs=0;
			}
			var w=$(".pager li").width();
			
			$(".focus").stop().animate({
				"left":cs*w
			},600);
			console.log(cs);
		});
		
	
	
	
	function graph(){
		var s = $(this).scrollLeft();
		var off2 = $(".skill").offset().left;
		console.log(s,off2);
		if($("#bar").hasClass("on")==false){
			$(".skillbar").each(function(){
				var percent = parseInt($(this).attr("data-percent"));
				var t = $(this);
				
				$(this).find(".skill_bar").stop().animate({
					width:percent+"%"
				},5000);	

				$({Count:0}).stop().animate({
					Count:percent
				},{
					duration:5000,
					progress:function(){
						t.find(".Count").text(Math.ceil(this.Count));
					}
				});
			});
		}
	}
	
	
	$(".s5 .s5_slide li").mouseenter(function(){
		var h = $(this).height();
		var ih = $(this).find("img").height();
		
		$(this).find("img").stop().animate({
			top:-(ih-h)
		},1500);
		
	});
	
	$(".s5 .s5_slide li").mouseleave(function(){		
		$(this).find("img").stop().animate({
			top:30
		},600);
		
	});
	
	
	
	
	var i;
	
	$(".s6 .pj_img li").click(function(){
		i = $(this).index();
		
		$("#pro_pop .popup .pop_img").css({
			marginLeft:"-"+i*100+"%"
		});
		$("#pro_pop").stop().fadeIn();
		
		
		console.log(i);
	});
	
	
	var c = $("#pro_pop .popup .pop_img li").eq(0).clone();
	$("#pro_pop .popup .pop_img").append(c);
	
	$(".next_btn").on("click",pop_next_slide);
	$(".prev_btn").on("click",pop_prev_slide);
	
	function pop_next_slide(){
		$(".next_btn").off("click",pop_next_slide);
		$(".prev_btn").off("click",pop_prev_slide);
		if(i==7){
			i=0;
			$("#pro_pop .popup .pop_img").css({marginLeft:0});
		}
		
		i++;
		
		$("#pro_pop .popup .pop_img").stop().animate({
			marginLeft:"-"+i*100+"%"
		
		},600, function(){
			$(".next_btn").on("click",pop_next_slide);
			$(".prev_btn").on("click",pop_prev_slide);
		});
					
	}
		
	function pop_prev_slide(){
		$(".next_btn").off("click",pop_next_slide);
		$(".prev_btn").off("click",pop_prev_slide);
		if(i==0){
			i=7;
			$("#pro_pop .popup .pop_img").css({marginLeft:"-600%"});
		}
		
		i--;
		
		$("#pro_pop .popup .pop_img").stop().animate({
			marginLeft:"-"+i*100+"%"			

		},600, function(){
			$(".next_btn").on("click",pop_next_slide);
			$(".prev_btn").on("click",pop_prev_slide);
		});

	}

	$(".close_btn").click(function(){
		$("#pro_pop").stop().fadeOut();
	});
	
	
	
	$(window).mousemove(function(e){
			var x = e.clientX;
			var y = e.clientY;
			
			
			
			var w = $(window).width();
			var h = $(window).height();
				
			var x_result = ((x/w)*100)-50;	
			var y_result = ((y/h)*100)-50;	
				
			$(".s1 .s1_bg").css({"top":y,"left":x});
			$(".part4").css("transform","skew("+(-x_result)+"deg,"+(-y_result/1.5)+"deg)");
			$(".part3").css("transform","skew("+(-x_result)+"deg,"+(y_result/1.5)+"deg)");
			$(".part2").css("transform","skew("+(x_result)+"deg,"+(y_result/1.5)+"deg)");
			
			
			$(".cursor").css({"top":y,"left":x});
		});
	
	
	$("a, .btn, .close_btn, .main_text").mouseenter(function(){

			$(".cursor img").eq(0).css("opacity",0);
			$(".cursor img").eq(1).css("opacity",1);
	
	});
	$("a, .btn, .close_btn, .main_text").mouseleave(function(){

			$(".cursor img").eq(0).css("opacity",1);
			$(".cursor img").eq(1).css("opacity",0);

	});
		
		
		
		
		
		
		
	$(window).width(800);
		
		
		
		
		

	
});