$(function(){


	//선생님이 알려주신 부분↓
		var i = 0;
		var k = null;
		var length = $(".part").length;

		function prevSlide(){
			if(i==0){
				setTimeout(function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$(".pager ul li").on("click", clickSlide);
				},200);
			}else if(i==length-1){
				if($(".part5").css("top")=="-350px"){
					$(".part5").animate({
						"top":0
					},400, function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown", pressKey);
						$(".pager ul li").on("click", clickSlide);
					});
				}else{
					i--;
					$(".pager ul li").removeClass("on").eq(i).addClass("on");
					$(".part").eq(i+1).css("top","0%").animate({
						"top":"100%"
					},600);
					$(".part").eq(i).css("top","-100%").animate({
						"top":"0"
					},600, function(){
						$(document).on("wheel",mousewheel);
						$(document).on("keydown", pressKey);
						$(".pager ul li").on("click", clickSlide);

						//메뉴 나오는 부분
						if($(".part2").css("top")=="0px"){
							$(".p2_pic").addClass("on");
						}
						if($(".part3").css("top")=="0px"){
							$(".p3_pic").addClass("on");
						}
						if($(".part4").css("top")=="0px"){
							$(".p4_box").addClass("on");
						}

					});
				}

			}else{
				i--;
				$(".pager ul li").removeClass("on").eq(i).addClass("on");
				$(".part").eq(i+1).css("top","0%").animate({
					"top":"100%"
				},600);
				$(".part").eq(i).css("top","-100%").animate({
					"top":"0"
				},600, function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$(".pager ul li").on("click", clickSlide);

					//메뉴 나오는 부분
					if($(".part2").css("top")=="0px"){
						$(".p2_pic").addClass("on");
					}
					if($(".part3").css("top")=="0px"){
						$(".p3_pic").addClass("on");
					}
					if($(".part4").css("top")=="0px"){
						$(".p4_box").addClass("on");
					}

				});
			}



			console.log(i);
			k=i;

		}
		function nextSlide(){
			if(i==length-1){
				$(".part5").animate({
					"top":-350
				},400);
				setTimeout(function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$(".pager ul li").on("click", clickSlide);
				},200);
			}else{
				i++;
				$(".pager ul li").removeClass("on").eq(i).addClass("on");
				$(".part").eq(i-1).css("top","0%").animate({
					"top":"-100%"
				},600);
				$(".part").eq(i).css("top","100%").animate({
					"top":"0"
				},600,function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$(".pager ul li").on("click", clickSlide);

					//메뉴 나오는 부분 여기만 됨
					if($(".part2").css("top")=="0px"){
						$(".p2_pic").addClass("on");
					}
					if($(".part3").css("top")=="0px"){
						$(".p3_pic").addClass("on");
					}
					if($(".part4").css("top")=="0px"){
						$(".p4_box").addClass("on");
					}

				});


			}
			console.log(i);
			k=i;
		}

		function mousewheel(e){
			if($("#wrap").hasClass("on")==true){
				var y = e.originalEvent.deltaY;
				$(".pager ul li").off("click");
				$(document).off("wheel");
				$(document).off("keydown");

				if(y>0){
					nextSlide();
				}
				if(y<0){
					prevSlide();
				}
			}
		}

		function pressKey(e){
			if($("#wrap").hasClass("on")==true){
				$(".pager ul li").off("click");
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
						$(".pager ul li").on("click", clickSlide);
					},200);
				}
			}
		}

		function clickSlide(){
			if($("#wrap").hasClass("on")==true){

			if($(this).hasClass("sec_box")==true){
				i=$(this).index()+1;
			}else{
				i=$(this).index();
			}

			if(i==k) return;
				$(".pager ul li").off("click");
				$(document).off("wheel");
				$(document).off("keydown");
			if(k>i){
				$(".part").eq(k).css('top',"0").animate({
					"top":"100%"
				},600);
				$(".part").eq(i).css('top',"-100%").animate({
					"top":"0"
				},600, function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$(".pager ul li").on("click", clickSlide);
					
					if($(".part2").css("top")=="0px"){
						$(".p2_pic").addClass("on");
					}
					if($(".part3").css("top")=="0px"){
						$(".p3_pic").addClass("on");
					}
					if($(".part4").css("top")=="0px"){
						$(".p4_box").addClass("on");
					}
				});
			}else if(k<i){
				$(".part").eq(k).css('top',"0").animate({
					"top":"-100%"
				},600);
				$(".part").eq(i).css('top',"100%").animate({
					"top":"0"
				},600, function(){
					$(document).on("wheel",mousewheel);
					$(document).on("keydown", pressKey);
					$(".pager ul li").on("click", clickSlide);
					
					if($(".part2").css("top")=="0px"){
						$(".p2_pic").addClass("on");
					}
					if($(".part3").css("top")=="0px"){
						$(".p3_pic").addClass("on");
					}
					if($(".part4").css("top")=="0px"){
						$(".p4_box").addClass("on");
					}
				});
			}
			$(".pager ul li").removeClass("on").eq(i).addClass("on");
			k=i;
			}
		}

		var t_start = null;
		function handDragStart(e){
			if($("#wrap").hasClass("on")==true){
				$(".pager ul li").off("click");
				$(document).off("wheel");
				$(document).off("keydown");

				y = e.originalEvent.touches[0].clientY;
				t_start=y;
			}
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


		$(document).on("touchstart", handDragStart);
		$(document).on("touchmove", handDragMove);
		$(document).on("touchend", handDragEnd);

		$(document).on("wheel",mousewheel);
		$(document).on("keydown", pressKey);
		$(".pager ul li, .section_box .sec_box").on("click", clickSlide);


	$(window).resize(function(){
		var w = $(window).width();

		if(w>1024){
			$("#wrap").addClass("on");
		}else{
			$("#wrap").removeClass("on");
		}
	});

	$(window).trigger("resize");

	//.part5 footer
	/*$(".part5").mousewheel(function(event, d){
		if(d<0){
			if($(".part5").css("top")=="0px"){
				$(".part5").animate({
					"top":"-350px"
				},400);
			}
		}
		if(d>0){
			if($(".part5").css("top")=="-350px"){
				$(".part5").animate({
					"top":"0px"
				},400);
			}
		}
	});
	*/

	$(".brand").click(function(){
		$(".brand_box").stop().css("display","block");
	});
	$(".brand").mouseleave(function(){
		$(".brand_box").stop().css("display","none");
	});



	//part1 _ header _ menu hover부분 ↓

		$(".menu > ul > li").mouseover(function(){
			var i =$(this).index();
			$(".menu > ul > li > .menu_cover").css("display","block");
			$(".fulldown").css("display","block");
			$(this).children(".menu_cover").css({
				"background-color":"#F8FBF6",
				"border-top":"2px solid #68a12a"
			});
			$(".menu > ul > li").eq(i).children("a").css("color","#68A12A");
			$(".menu > ul > li").eq(i).children(".triangle").css("display","block");
			$(".logo .img_box").css("display","block");
			$(".logo .img_box .img_cover img").css("display","none");
			$(".logo .img_box .img_cover img").eq(i).css("display","block");
		});
		$(".menu > ul > li").mouseout(function(){
			var i =$(this).index();
			$(".menu > ul > li > .menu_cover").css("display","none");
			$(".fulldown").css("display","none");
			$(this).children(".menu_cover").css({
				"background-color":"transparent",
				"border-top":"2px solid transparent"
			});
			$(".menu > ul > li").eq(i).children("a").css("color","#585858");
			$(".menu > ul > li").eq(i).children(".triangle").css("display","none");
			$(".logo .img_box").css("display","none");
		});

		$(".fulldown, .img_box").mouseover(function(){
			$(".menu > ul > li > .menu_cover").css("display","block");
			$(".fulldown").css("display","block");
		});
		$(".fulldown").mouseout(function(){
			$(".menu > ul > li > .menu_cover").css("display","none");
			$(".fulldown").css("display","none");
			$(".logo .img_box").css("display","none");
		});

		$(".menu").mouseleave(function(){
			$(".logo .img_box").css("display","none");
		});

		$(".menu > ul > li > .menu_cover > ul > li > a").mouseover(function(){
			var i =$(this).index();
			$(this).eq(i).css({
				"background-color":"#68A12A",
				"color":"#fff",
				"text-decoration":"underline"
			});
		});
		$(".menu > ul > li > .menu_cover > ul > li > a").mouseout(function(){
			var i =$(this).index();
			$(this).eq(i).css({
				"background-color":"transparent",
				"color":"#000",
				"text-decoration":"none"
			});
		});

		$(".fulldown .event").mouseenter(function(){
			$(this).stop().animate({
				"top":"37%"
			},200,function(){
				$(this).stop().animate({
					"top":"40%"
				})
			});
		});

		$(".popup_xx").click(function(){
			$(".popup").stop().hide();
		});

		$(".popup")	.draggable();

	//part1 이미지 클릭하면 페이지 넘어가는 부분↓



	// part2 부분
	$(window).resize(function(){
		var pt_w = $(window).width();

		if(pt_w>1024){
			$(".p2_pic1").mouseenter(function(){
				$(this).children("p").stop().fadeIn(1000);
			});
			$(".p2_pic1").mouseleave(function(){
				$(this).children("p").stop().fadeOut(1000);
			});
			$(".p2_pic2").mouseenter(function(){
				$(this).children("p").stop().fadeIn(1000);
			});
			$(".p2_pic2").mouseleave(function(){
				$(this).children("p").stop().fadeOut(1000);
			});
			$(".p2_pic3").mouseenter(function(){
				$(this).children("p").stop().fadeIn(1000);
			});
			$(".p2_pic3").mouseleave(function(){
				$(this).children("p").stop().fadeOut(1000);
			});

			$(".menu_mob").removeClass("on");
		}else{

		}


		console.log(pt_w);


	});

	//btn_mob

	$(".btn_mob").click(function(){
		$(".menu_mob").addClass("on");
	});
	$(".menu_mob_x").click(function(){
		$(".menu_mob").removeClass("on");
	});

	$(".aa").scroll(function(){
		var s = $(this).scrollTop();
		$(".menu_mob_x").css("top",20+s);

		console.log(s);
	});


	//search_mob

	$("#s_btn_mob").click(function(){
		$(".search_mob").toggleClass("on");
	});


});
