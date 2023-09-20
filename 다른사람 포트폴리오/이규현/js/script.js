$(function(){
	// $("html,body").stop().animate({
		// scrollTop:0
	// },1200, "easeOutQuad");
	
	var h = $(window).height();
	$("#wrap .section .main, #home").height(h);
	var scene_h = $(".scene").height();
	$(".skill_sub").height(scene_h);
	$(window).resize(function(){
		var h = $(window).height();
		$("#wrap .section .main, #home").height(h);
		var scene_h = $(".scene").height();
		$(".skill_sub").height(scene_h);
	});
	
	var repeat;
	var slide = 0;
	timer();
	function timer(){
		repeat = setInterval(function(){
			slide++;
			if(slide==4){
				slide=0;
			}
			$("#home .main_slide").eq(slide).fadeIn(2000);
			$("#home .main_slide").eq(slide-1).fadeOut(2000);
		},5000);
	}
	
	$(document).on("scroll", onScroll);	
	$("header ul li a").on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");
		$("header ul li a").each(function () {
			$(this).removeClass('on');
		});
		$(this).addClass('on');
		var target = this.hash,
			menu = target,
			$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 1700,"swing",function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	}); 
    function onScroll(){      
		var scr = $(window).scrollTop();
        $("header ul li a").each(function () {
            var a = $(this);
            var r = $(a.attr("href"));
            if (scr>=r.position().top && scr<r.position().top + r.height()) {
                 $("header ul li a").removeClass("on");
                a.addClass("on");
				}
                else{
                a.removeClass("on");
            }
        });  
    }
	
	$(window).resize(function(){
		var w = $(window).width();
		
		if(w>839){
			$("#mobile_menu").hide();
		}
	});
	
	$("header .m_menu_btn").click(function(){
		$("#mobile_menu").fadeIn(400);
		$("#mobile_menu ul li").show();
	});
	$("#mobile_menu .menu_close").click(function(){
		$("#mobile_menu").fadeOut(400);
		$("#mobile_menu ul li").fadeOut(400);
	});
	
	$("#mobile_menu ul li").click(function(){
		var target = $(this).children("a").attr("href");
		var t = $(target).offset().top;
		
		$("#mobile_menu").fadeOut(400);
		$("#mobile_menu ul li").fadeOut(400);
		
		$("html,body").stop().animate({
			scrollTop:t
		},1300);
	});
	
	$(".section .arrow_icon").click(function(){
		var off = $(this).parent().parent(".main").next(".sub_section").offset().top;
		$("html,body").stop().animate({
			scrollTop:off	
		},600);
	});
	
	$(window).scroll(function(){
		var scr = $(window).scrollTop();
		var off1 = $("#about").children(".sub_section").offset().top-100;
		var ih1 = $("#about").children(".sub_section").height();
		var off2 = $("#skill").children(".sub_section").offset().top-100;
		var ih2 = $("#skill").children(".sub_section").height();
		var off3 = $("#works").children(".sub_section").offset().top-100;
		var ih3 = $("#works").children(".sub_section").height();
		var off4 = $("#contact").children(".sub_section").offset().top-100;
		var ih4 = $("#contact").children(".sub_section").height();
		
		if(scr >= off1 && scr < off1+ih1){
			$("header .logo").css("color","#333");
			$("header .gnb li a").css("color","#333");
			$("header .gnb li .line").css("background-color","#333");
		}else if(scr >= off2 && scr < off2+ih2){
			$("header .logo").css("color","#333");
			$("header .gnb li a").css("color","#333");
			$("header .gnb li .line").css("background-color","#333");
			
			graph();
		}else if(scr >= off3 && scr < off3+ih3){
			$("header .logo").css("color","#333");
			$("header .gnb li a").css("color","#333");
			$("header .gnb li .line").css("background-color","#333");
			
		
		}else if(scr >= off4 && scr < off4+ih4){
			$("header .logo").css("color","#333");
			$("header .gnb li a").css("color","#333");
			$("header .gnb li .line").css("background-color","#333");
			
			$("footer").stop().animate({
				"bottom":0
			},600, "swing");
		}else{
			$("header .logo").css("color","#fff");
			$("header .gnb li a").css("color","#fff");
			$("header .gnb li .line").css("background-color","#fff");
			
			$("footer").stop().animate({
				"bottom":"-50px"
			},300, "swing");
		}
	});
	
	
	function graph(){
			if($(".charts").hasClass("on")==false){
				$(".chart").each(function(){
					var p = $(this).find(".percent-number");
					var pData = p.attr("data-percent");
					var leftCircle = $(this).find(".left .circle-mask-inner");
					var rightCircle = $(this).find(".right .circle-mask-inner");
					
					$({ percent:0 }).animate({
						percent:pData
					},{
						duration:5000,
						progress:function(){
							var now = this.percent;
							var deg = now*360/100;
							var degRight = Math.min(Math.max(deg,0),180);
							var degLeft = Math.min(Math.max(deg-180,0),180);
							leftCircle.css("transform","rotate("+degLeft+"deg)");
							rightCircle.css("transform","rotate("+degRight+"deg)");
							p.text(Math.ceil(this.percent));
						}
					});
				});
			}$(".charts").addClass("on");
		}
});



