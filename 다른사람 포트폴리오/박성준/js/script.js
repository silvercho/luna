$(function(){
	$(window).on("load", function(){
		setTimeout(function(){
			$(".swipe2").addClass("load");
		},1600);
	});
	$(window).resize(function(){
		var width = $(".box").width();
		var height = $(window).height();
		var ww = $(window).width();
		$(".box").height(width);
		$(".home").height(height);
		var margin = $(".t_box").height()/2;
		$(".t_box").css("margin-top",-margin);
		
		if(ww>1280){
			$(".contact").height(height-60);
			$(".p_con li").removeClass("to");
		}else{
			$(".contact").height(height);
		}
		if(ww<551){
			$("#swipe").css("display","block");
			$(".swipe2").addClass("on");
		}else{
			$("#swipe").css("display","none");
			$(".swipe2").removeClass("on");
		}
	});
	
	$(window).trigger("resize");
	
	
		
	$(".slick").slick({           
		infinite: true , /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */         
		slidesToShow: 5, /* 화면에 보여질 이미지 갯수*/        
		slidesToScroll: 1,  /* 스크롤시 이동할 이미지 갯수 */         
		autoplay: true, /* 자동으로 다음이미지 보여주기 */         
		arrows: true, /* 화살표 */         
		dots:false, /* 아래점 */         
		autoplaySpeed:2500,/* 다음이미지로 넘어갈 시간 */         
		speed:400 , /* 다음이미지로 넘겨질때 걸리는 시간 */         
		pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */
		responsive: [ 
			{breakpoint: 1280, settings: {slidesToShow:4}},//해상도 1280px에서 이미지 4개보여줌
			{breakpoint: 768, settings: {slidesToShow:3}},
			{breakpoint: 551, settings: {slidesToShow:1}}
		]
	});
	/*
	$(".title").click(function(){
		$(".title").off("click");
		$(".wave").stop().animate({
			"top":"-42%"
		},600, function(){
			$(".wave").stop().animate({
			"top":"-500%"
			},2000);
		});
		setTimeout(function(){
			$(".title").css("display","none");
		},700);
		setTimeout(function(){
			$(".intro_cover, .main").addClass("on");
		},1100);
	});
	*/
	$(".title").click(function(){
		var standard = $(".profile").offset().top-60;
		$("html,body").stop().animate({
			"scrollTop":standard
		},800);
	});
	
	
	$(".p_con li").click(function(){
		var www = $(window).width();
		
		if(www<552){
			$(this).toggleClass("to");
		}
		$("#swipe").css("display","none");
	});	
	
	function count(){
		
			if($(".profile").hasClass("co")==false){
				$(".count").each(function(){
					var t = $(this);
					var c = t.attr('data-percent');
					
					$({Counter:0}).stop().animate({
						Counter:c
					},{
						duration:3000,
						progress:function(){
							t.text(Math.ceil(this.Counter))
						}
					});
				});
				$(".profile").addClass("co");
			}
	}
	
	$(".gnb ul li").click(function(){
				
		$(window).off("scroll",onScroll);
		var aa = $(this).children("a").attr("href");
		var offf = $(aa).offset().top;
		
		
		$("html,body").stop().animate({
			"scrollTop":offf-59
		},800,function(){
			$(window).on("scroll",onScroll);
			var s = $(window).scrollTop();
			var standard = $(".profile").offset().top-60;
			
			if(s>=standard){
				$(".gnb").addClass("on");
				$(".fake_gnb").addClass("on");
			}else{
				$(".gnb").removeClass("on");
				$(".fake_gnb").removeClass("on");
			}
			if(s>0){
				$(".gnb").addClass("on");
			}else{
				$(".gnb").removeClass("on");
			}
			$(".gnb ul li").each(function(){
				var aaa = $($(this).children("a").attr("href"));
				
				if(s>=aaa.offset().top-60 && s<aaa.offset().top + aaa.height()-60){
					$(".gnb ul li").removeClass("on");
					$(this).addClass("on");
					aaa.addClass("on");
					if($(".profile").hasClass("on")==true){
						count();
					}
				}
			});
		});
		
		$(".gnb ul li").removeClass("on");
		$(this).addClass("on");
		return false;
	});
	$(window).scroll(function(){
		var s = $(window).scrollTop();
			var standard = $(".profile").offset().top-60;
			
			if(s>=standard){
				$(".gnb").addClass("on");
				$(".fake_gnb").addClass("on");
			}else{
				$(".gnb").removeClass("on");
				$(".fake_gnb").removeClass("on");
			}
	});

	$(window).on("scroll",onScroll);
	
	function onScroll(){
		var s = $(window).scrollTop();
		$(".gnb ul li").each(function(){
			var aa=$($(this).children("a").attr("href"));
			
			if(s>=aa.offset().top-60 && s<aa.offset().top + aa.height()-60){
				$(".gnb ul li").removeClass("on");
				$(this).addClass("on");
			}
			
			if(s>=aa.offset().top-$(window).height()/2 && s<aa.offset().top + aa.height()-$(window).height()/2){
				
				aa.addClass("on");
				
				if($(".profile").hasClass("on")==true){
					count();
				}
			}
			
		});
	}
	
});





























