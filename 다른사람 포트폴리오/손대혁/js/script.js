$(function(){


//대문 스위치
 $(".vbox .swich li").click(function(){
	 $(this).toggleClass("on");
	 $("#main").slideUp(1000);
	 $("#main .vbox").css("opacity",1).animate({"opacity":0},1000);
	 
 });


//영역 호출

var a = 0;

$(".h_cover .gnb > li").click(function(){
	var li_index = $(this).index();
	
	$(".wonpan >li").addClass("pause");
	
	$(".disk_stroke .stick").stop().animate({
		"transform":"rotate(0deg)"
	},600,function(){
		$(".wonpan >li").stop().animate({
			"left":"-100%"
		},600);
		$(".wonpan >li").eq(li_index).stop().animate({
			"left":"50%"
		},600, function(){
			$(".disk_stroke .stick").stop().animate({
				"transform":"rotate(-45deg)"
			},600, function(){
				$(".wonpan >li").removeClass();
				$(".wonpan >li").eq(li_index).addClass("on");
			});
		});
		
	});
		
	
	
	
	var target = $(this).children("a").attr("href");
	var t = $(target);
	
	a++;
	
	if(target=="#about"){
		
		
		$(".h_cover .gnb li").removeClass("on");
		$(this).addClass("on");
		$(".art").css("left","100%").animate({"left":"100%"},1000);
		t.stop().css({
			"left":"100%",
			"z-index":a
		}).animate({
			"left":"0"
		},500);
		
		
		$(".art.box1  div").delay(500).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},1000);
		setTimeout(function(){original_skillbar();},1500);
		
	}else if(target=="#skill"){
		$(".h_cover .gnb li").removeClass("on");
		$(this).addClass("on");
		$(".art").css("left","100%").animate({"left":"100%"},1000);
				t.stop().css({
					"left":"100%",
					"z-index":a
				}).animate({
					"left":"0"
				},500);
		$(".art.box2  div").delay(500).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},1000);
		setTimeout(function(){
			if($("#bar").hasClass("on")==false){
				$(".skillbar").each(function(){
					var t = $(this);
					var percent = parseInt($(this).attr("data-percent"));
					
					$({ Counter:0 }).stop().animate({
						Counter:percent
					},{
						duration:5000,
						progress:function(){
							var num = Math.ceil(this.Counter);
							t.find(".Count").text(num);
							t.find(".skill_bar").css("bottom",this.Counter+"%");
						}
					});
				});
				$("#bar").addClass("on");
			}
			
		},1500);
	
	}else if(target=="#works"){
		$(".h_cover .gnb li").removeClass("on");
		$(this).addClass("on");
		$(".art").css("left","100%").animate({"left":"100%"});
				t.stop().css({
					"left":"100%",
					"z-index":a
				}).animate({
					"left":"0"
				},500);
		//$(".recode").css("width","35%").animate({"width":"0%"});			
		//$(".art.box3").css("width","75%").animate({"width":"100%"});		
		$(".art.box3  div").delay(500).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},1000);
		
		setTimeout(function(){original_skillbar();},1500);
		
	return false;
	
	}else if(target=="#contact"){
		$(".h_cover .gnb li").removeClass("on");
		$(this).addClass("on");
		$(".art").css("left","100%").animate({"left":"100%"});
				t.stop().css({
					"left":"100%",
					"z-index":a
				}).animate({
					"left":"0"
				},500);
		$(".conbg_box").delay(500).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},1000);
		$(".conbg_box .conani").delay(1500).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},1000);
		$(".conbg_box .conani ul li").delay(2000).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},2000);
		
		
		$(".art.box4  div").delay(500).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},1000);
		
		//$(".recode").css("width","100%").animate({"width":"35%"});
		setTimeout(function(){original_skillbar();},1500);
	return false;
	}else if(target=="#main"){
		$(".h_cover .gnb li").removeClass("on");
		$(this).addClass("on");
		$(".art").css("left","100%").animate({"left":"100%"});
				t.stop().css({
					"left":"100%",
					"z-index":a
				}).animate({
					"left":"0"
				},500);
					
		//$(".art.box3").css("width","75%").animate({"width":"100%"});		
		$(".art.box3  div").delay(500).css({"opacity":"0" ,"margin-top":"10%"}).animate({
			"opacity":"1" ,"margin-top":"0"
		},1000);
		
		//$(".recode").css("width","35%").animate({"width":"100%"});
		setTimeout(function(){original_skillbar();},1500);
	return false;
	}

	
});



function original_skillbar(){
	$(".skillbar").each(function(){
		var t = $(this);
		t.find(".Count").text(0);
		t.find(".skill_bar").css("bottom",0+"%");
	});
	$("#bar").removeClass("on");
	
}



//캐릭터 스크롤 회전	

$("html,body").animate({
	scrollTop:0
},400);


$(window).resize(function(){
	var h = $(window).height();
	$("#wrap .ani_cover, .section.main").height(h);
//	$(".section .body_cover").height(h-100);
});
$(window).trigger("resize");

var wrap_height = $("#wrap").height()+1400;

$("body").height(wrap_height);

$(window).scroll(function(){
	var sct = $(this).scrollTop();
	
	for(var i=0; i<13; i++){
		if(sct>=i*100 && sct<(i+1)*100){
			$(".img_ani_cover img").css("display","none").eq(i).css("display","block");
		}
		
	}
	
	/*if(sct>=0 && sct<100{
		$(".img_ani_cover img").css("display","none").eq(0).css("display","block");
	}
	if(sct>=100 && sct<200{
		$(".img_ani_cover img").css("display","none").eq(1).css("display","block");
	}
	if(sct>=200 && sct<300{
		$(".img_ani_cover img").css("display","none").eq(2).css("display","block");
	}
	if(sct>=300 && sct<400{
		$(".img_ani_cover img").css("display","none").eq(3).css("display","block");
	}
	if(sct>=400 && sct<500{
		$(".img_ani_cover img").css("display","none").eq(4).css("display","block");
	}
	if(sct>=500 && sct<600{
		$(".img_ani_cover img").css("display","none").eq(5).css("display","block");
	}
	*/
	
	if(sct>1400){
		$("#wrap").css("top",-(sct-1400));
		$(".text").css({"opacity":"0","bottom":"-20%"}).animate({
			"opacity":"1","bottom":"0"},800);
	}

	if(sct<=1400){
		$("#wrap").css("top",0);
		$(".ani_cover").slideDown(3000);
	}

	//console.log(sct);
});


//스킬바
		/*$(window).scroll(function(){
				var s = $(this).scrollTop();
				var off1 = $("#section2").offset().top-200;
				var off2 = $("#section3").offset().top-200;
				
				if(s>off1){
						skillbar();
				}
				
				if(s>off2){
						graph();
				}
				
		});

	
		function skillbar(){
			
			$(".skillbar").each(function(){
					$(this).children(".skill_bar").animate({
						"width":$(this).attr("data-percent")
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

	function graph(){
		
		if($(".graph").hasClass("on")==false){
				
			$(".pager li a").each(function(){
				var t = $(this);
				var circle_left = t.find(".left_wrapper .left_circle").css({"transform":"rotate(0deg)"});
				var circle_right = t.find(".right_wrapper .right_circle").css({"transform":"rotate(0deg)"});
							
				var p_num = t.find(".percent-number")
				var p_data = p_num.text();
							
				p_num.text(0);
							
				$({percent:0}).stop().animate({
						percent:p_data
				},{
						duration:1500,
						progress:function(){
								var now = this.percent;
								//25
								var deg = now*360/100
								//
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
				
	}$(".graph").addClass("on");
		
}*/

















	

		var z = 2;
		var clone = $(".slide > li:lt(5)").clone();
		$(".slide").append(clone);
		
		var length = $(".slide > li").length;
		$(".slide").css("width",100*length+"%");
		$(".slide > li").css("width",100/length+"%");
		//$(".slide").append(clone);
		
		
		$(".next").on("click",work_next_slide);
		$(".prev").on("click",work_prev_slide);
		function work_next_slide(){
			$(".next").off("click");
			$(".prev").off("click");
			if(z==10){
				z=2;
				$(".slide").css({"left":-z*100+"%"});
			}
			z++;
			
			$(".slide").stop().animate({
				"left":-z*100+"%"
			},600, function(){
				$(".next").on("click",work_next_slide);
				$(".prev").on("click",work_prev_slide);
			});
			
			$(".slide > li").removeClass("on").eq(z).addClass("on");
	
		}

		function work_prev_slide(){
			$(".next").off("click");
			$(".prev").off("click");
			if(z==2){
				z=10;
				$(".slide").css({"left":-z*100+"%"});
			}
			z--;
			
			$(".slide").stop().animate({
				"left":-z*100+"%"
			},600, function(){
				$(".next").on("click",work_next_slide);
				$(".prev").on("click",work_prev_slide);
			});
			
			$(".slide > li").removeClass("on").eq(z).addClass("on");
			console.log(z);
		}

		




});