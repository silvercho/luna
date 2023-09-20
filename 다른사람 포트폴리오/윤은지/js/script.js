$(function(){
	
	//main 호버페이지 	
	$(".video_nav").mouseover(function(){
		$(this).siblings(".nav").stop().animate({"width":"20%"},1000);
		$(this).stop().animate({"width":"80%"},1000,function(){	
			$(this).find('#left_h3').stop().animate({"right":"10px"},400);
			$(this).find('#left_p').stop().animate({"right":"10px"},800);
			$(this).find('#right_h3').stop().animate({"left":"10px"},400);
			$(this).find('#right_p').stop().animate({"left":"30px"},800);
		});
		
		$(this).children("video").stop().animate({"opacity":"1"},1200);	
		$(this).children("video").prop("currentTime",0).trigger("play");
	});

	$(".video_nav").mouseleave(function(){
		$(this).siblings(".nav").stop().animate({"width":"50%"},1000);
		$(this).stop().animate({"width":"50%"},1000);
		$(this).find('#left_h3').stop().animate({"right":"-310px"},400);
		$(this).find('#left_p').stop().animate({"right":"-310px"},800);
		$(this).find('#right_h3').stop().animate({"left":"-310px"},400);
		$(this).find('#right_p').stop().animate({"left":"-310px"},800);
		$(this).find('video').stop().animate({"opacity":"0"},1200);
		$(this).children("video").trigger("pause");
	});	

		
	
	//메뉴 2개 부분 (about, get in touch)	
	
	$(".about_menu").on("click", aboutOnClick);
	$(".touch_menu").on("click", touchOnClick);
	
	function aboutOnClick(){
		$(".about_box").toggleClass("on");
				
		setTimeout(function(){
			skillbar();
		},600);

		if($(".about_box").hasClass("on")==true){
			$(document).off("wheel");
			$(document).off("keydown");
			$("#pager ul li").off("click");	
			$(".about_menu").addClass("on");
			$(".touch_menu").off("click");
			$(".logo").css("display","none");
			$(".pager").css("display","none");
		}else{
			$(document).on("wheel",mousewheel);
			$(document).on("keydown", pressKey);
			$("#pager ul li").on("click", clickSlide);			
			$(".about_menu").removeClass("on");
			$(".touch_menu").on("click", touchOnClick);
			$(".logo").css("display","block");
			$(".pager").css("display","block");
		}		
	}
	function touchOnClick(){
		$(".touch_box").toggleClass("on");		

		if($(".touch_box").hasClass("on")==true){
			$(document).off("wheel");
			$(document).off("keydown");
			$("#pager ul li").off("click");	
			$(".touch_menu").addClass("on");
			$(".about_menu").off("click");
			$(".pager").css("display","none");
		}else{
			$(document).on("wheel",mousewheel);
			$(document).on("keydown", pressKey);
			$("#pager ul li").on("click", clickSlide);
			$(".about_menu").on("click", aboutOnClick);
			$(".touch_menu").removeClass("on");
			$(".pager").css("display","block");
		}		
	}
		
	
	//about메뉴 부분 
	function skillbar(){
		$(".skillbar").each(function(){
			$(this).children(".skill_bar").animate({
				"width":$(this).attr("data-percent")
			},4000);
		});	
	}	

	for(var horse=1; horse<=16; horse++){
		$(".horse_run").append("<img src='./images/horse_"+horse+".png' alt=''>");
	}
	
	var hor = 0;
	setInterval(function(){
		hor++;
		
		if(hor==16){
			hor=0;
		}
		$(".horse_run").children("img").css("opacity",0)
		$(".horse_run").children("img").eq(hor).css("opacity",1)
		
	},50);
	
	
	//get in touch 메뉴 부분 
		$(".NLine").children("span").css("transform","translateX(56px)");
		
		$(".NLine").mouseover(function(){
			$(this).children("span").stop().animate({
				"transform":"translateX(86px)"
			},200);
			$(".dLine").stop().animate({
				"width":"100%"
			},200,function(){
				$(".dLine").stop().animate({
					"left":"100%"
				},200,function(){
					$(".aLine").stop().animate({
						"width":"60px"
					},200);
					$(".arrow").stop().animate({
						"left":"60px",
						"opacity":1
					},200);			
				});				
			});			
		});
		
		$(".NLine").mouseout(function(){
			$(this).children("span").stop().animate({
				"transform":"translateX(56px)"
			},200);
			$(".aLine").stop().animate({
				"width":0
			},200);
			$(".arrow").stop().animate({
				"left":"-28px",
				"opacity":0
			},200,function(){
				$(".dLine").stop().animate({
					"left":"-10px"
				},200,function(){
					$(".dLine").stop().animate({
						"width":"60px"
					},200);
				});
			});
		});

		
		setInterval(function(){
			
			if($(".tm_box1").css("left")=="0px"){
				$(".tm_box1").css("left",0).animate({
					"left":"-100%"
				},800);
				$(".tm_box2").css("left","100%").animate({
					"left":0
				},800);
			}else if($(".tm_box1").css("left")=="-100%"){
				$(".tm_box1").css("left","-100%").animate({
					"left":"0"
				},800);
				$(".tm_box2").css("left",0).animate({
					"left":"100%"
				},800);
			}
			
		});
	
	
	//37.471094, 127.141615
	var Y_point = 37.471094;
	var X_point = 127.141615;
	var zoomLevel = 12;
	var markerTitle = 'YOUN';
	
	var myLatlng = new google.maps.LatLng(Y_point, X_point);
			var mapOptions = {
								zoom: zoomLevel,
								center: myLatlng,
								mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);

			var marker = new google.maps.Marker({
													position: myLatlng,
													map: map,
													title: markerTitle
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
	
		

		
	//pager hover
	$(".pager li").mouseover(function(){
		$(this).addClass("onn");
	});
	$(".pager li").mouseleave(function(){
		$(this).removeClass("onn");
	});
	
	//work4 풀무원 img_slide 부분 	
	var pul = null; 
	$(".img_slide ul li").click(function(){
		pul = $(this).index();
		
		$(".img_slide ul").stop().animate({
			"margin-left": -pul*100+"%"
		},600);
		
		$(".bookmark").stop().animate({
			"top":"-16%"
		},200,function(){
			$(".bookmark").stop().animate({
				"top":"-14%"
			},200);
		});
		
		$(".img_slide ul li").removeClass("on");
		$(".img_slide ul li").eq(pul).addClass("on");		
	});
	
	$(".img_slide").on("touchstart", handSlideStart); 
	$(".img_slide").on("touchend", handSlideEnd);
	
	var pul_x = null;
	var pul_t = null;
	
	function handSlideStart(e){		
		e.stopPropagation();
		pul_x = e.originalEvent.touches[0].pageX;
		pul_t = pul_x;
		
		$(".img_slide").on("touchmove", handSlideMove);
	}
	function handSlideMove(e){
		e.stopPropagation();
		pul_x = e.originalEvent.touches[0].pageX;		
	}
	function handSlideEnd(e){
		e.stopPropagation();
		if(pul_t-pul_x>0){
			pul++;
			if(pul>6){
				pul=6;				
			}
			$(".img_slide ul").stop().animate({
				"margin-left": -pul*100+"%"
			},600);
			
			$(".bookmark").stop().animate({
				"top":"-16%"
			},200,function(){
				$(".bookmark").stop().animate({
					"top":"-14%"
				},200);
			});
			
			$(".img_slide ul li").removeClass("on");
			$(".img_slide ul li").eq(pul).addClass("on");		
		}	
		if(pul_t-pul_x<0){
			pul--;	
			if(pul<0){
				pul=0;				
			}
			$(".img_slide ul").stop().animate({
				"margin-left": -pul*100+"%"
			},600);
		
			$(".bookmark").stop().animate({
				"top":"-16%"
			},200,function(){
				$(".bookmark").stop().animate({
					"top":"-14%"
				},200);
			});
			
			$(".img_slide ul li").removeClass("on");
			$(".img_slide ul li").eq(pul).addClass("on");			
		}
	}
	
	
	//중북실행방지
	/*var mouseover = true;
	
	$("#works .work_box").mouseenter(function(){
		if(mouseover){
			$(document).off("wheel");
			$("#works .work_box").on("mousewheel",scrollLeft);	
			
			mouseover = !mouseover;
			console.log(mouseover);
		}
	});
	*/
	
	
	//마지막페이지 works - piece scrollLeft
	function scrollLeft(event, d){
		
		
		var scrLeft = $("#works .work_box").scrollLeft();

		$(document).off("wheel");
	
		if(d>0){
			scrLeft-=70;	
			if(scrLeft<0){
				//event.stopPropagation();
				scrLeft=0;
				
				$(".arrow_s").css("display","block");
				
				$("#works .work_box").off("mousewheel");
				$(document).off("wheel");
				$(document).off("keydown");
				$(".pager li").off("click");
				
				prevSlide();
			}
			
		}else if(d<0){
			scrLeft+=70;
			$(".arrow_s").css("display","none");
		}
		
		$("#works .work_box").scrollLeft(scrLeft);
		console.log(scrLeft);
	}		

	
	$("#works .work_box").on("touchstart", handWorkStart);
	$("#works .work_box").on("touchend", handWorkEnd);
	
	var works_x = null;
	var works_y = null;
	
	function handWorkStart(e){
		e.stopPropagation();
		works_x = e.originalEvent.touches[0].pageX;
		works_y = works_x;
		
		$("#works .work_box").on("touchmove", handWorkMove);
	}
	function handWorkMove(e){
		e.stopPropagation();
		works_x = e.originalEvent.touches[0].pageX; 
	}
	function handWorkEnd(e){
		e.stopPropagation();
		if(works_y - works_x >0){
			$(".arrow_s").css("display","none");
			//scrLeft-=50	
		}else if(works_y - works_x<0){
			
			$(".arrow_s").css("display","block");
			//scrLeft+=50;
		}
	}
	
	
	//마지막페이지 css 
	

	$("#ironman").click(function(){
		$(".modal").stop().fadeIn(600,function(){
			$(".modal_iron").stop().animate({
				"height":"60%"
			},600);
		});		
		$(".modal_iron").css("border-color","#fff");
	});
	$(".modal_close").click(function(){
		$(".modal_iron").stop().animate({
			"height":"0%"
		},600,function(){
			$(".modal").fadeOut();
		});			
		setTimeout(function(){
			$(".modal_iron").css("border-color","transparent");
		},600)
	});	
	
	$("#submarine").click(function(){
		$(".modal").stop().fadeIn(600,function(){
			$(".modal_subm").stop().animate({
				"height":"60%"
			},600);
		});		
		$(".modal_subm").css("border-color","#fff");
	});
	$(".modal_close").click(function(){
		$(".modal_subm").stop().animate({
				"height":"0%"
			},600,function(){
				$(".modal").fadeOut(600);
			});		
		setTimeout(function(){
			$(".modal_subm").css("border-color","transparent");
		},600)	
	});
	
	$("#minions").click(function(){
		$(".modal").stop().fadeIn(600,function(){
			$(".modal_mini").stop().animate({
				"height":"60%"
			},600);
		});		
		$(".modal_mini").css("border-color","#fff");
	});
	$(".modal_close").click(function(){
		$(".modal_mini").stop().animate({
				"height":"0%"
			},600,function(){
				$(".modal").fadeOut(600);
			});		
		setTimeout(function(){
			$(".modal_mini").css("border-color","transparent");
		},600)	
	});
	
	

	//전체 페이지 넘기기
	
	var i = 0;
	var k = null;
	
		$(document).on("wheel",mousewheel);
		$(document).on("keydown", pressKey);
		$(".pager li").on("click", clickSlide);

	
	function prevSlide(){
		if(i==0){
			setTimeout(function(){
				$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$(".pager li").on("click", clickSlide);
			},200);
			
		}else{
			i--;
			$(".pager li").removeClass("on").eq(i).addClass("on");
			$("section").eq(i+1).css("top",0).animate({
				"top":"100%"
			},700,"easeInQuad");
			$("section").eq(i).css("top","-100%").animate({
				"top":0
			},700, "easeInQuad",function(){
				$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$(".pager li").on("click", clickSlide);
				
				if($("section#work1").css("top")=="0px"){
					$("#work1 .title, #work1 .cont_bg, #work1 .cont_theme, #work1 .name_cover, #work1 .baemin_info_hori, #work1 .baemin_info_verti, #work1 .baemin_info_text").addClass("on");
				}
				if($("section#work2").css("top")=="0px"){
					$("#work2 .title, #work2 .cont_bg, #work2 .cont_theme, #work2 .name_cover, #work2 .farms_info, #work2 .farms_info_text ").addClass("on");				
				}
				if($("section#work3").css("top")=="0px"){
					$("#work3 .title, #work3 .bts_bg, #work3 .cont_theme, #work3 .name_cover, #work3 .bts_info, #work3 .bts_info_text").addClass("on");
				}
				if($("section#work4").css("top")=="0px"){
					$("#work4 .title, #work4 .name_cover, #work4 .img_slide, #work4 .pul_info, #work4 .pul_info_text").addClass("on");
				}
				if($("section#work5").css("top")=="0px"){
					$("#work5 .title, #work5 .fc_bg, #work5 .cont_theme, #work5 .name_cover, #work5 .fc_info, #work5 .fc_info_text").addClass("on");						
				}
				if($("section#works").css("top")=="0px"){
					$(".piece > a > span").addClass("on");
				}
				
			});
			console.log(i);
			
		}
		k=i;		
	}
	function nextSlide(){
		var length = $("section").length;
		if(i==length-1){
			setTimeout(function(){
				//$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$(".pager li").on("click", clickSlide);
				$("#works .work_box").on("mousewheel",scrollLeft);
			},200);
			
		}else{
			i++;
			$(".pager li").removeClass("on").eq(i).addClass("on");
			$("section").eq(i-1).css("top",0).animate({
				"top":"-100%"
			},700,"easeInQuad");
			$("section").eq(i).css("top","100%").animate({
				"top":0
			},700,"easeInQuad", function(){
				$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$(".pager li").on("click", clickSlide);
					
				
				if($("section#work1").css("top")=="0px"){
					$("#work1 .title, #work1 .cont_bg, #work1 .cont_theme, #work1 .name_cover, #work1 .baemin_info_hori, #work1 .baemin_info_verti, #work1 .baemin_info_text").addClass("on");
				}
				if($("section#work2").css("top")=="0px"){
					$("#work2 .title, #work2 .cont_bg, #work2 .cont_theme, #work2 .name_cover, #work2 .farms_info, #work2 .farms_info_text ").addClass("on");				
				}
				if($("section#work3").css("top")=="0px"){
					$("#work3 .title, #work3 .bts_bg, #work3 .cont_theme, #work3 .name_cover, #work3 .bts_info, #work3 .bts_info_text").addClass("on");
				}
				if($("section#work4").css("top")=="0px"){
					$("#work4 .title, #work4 .name_cover, #work4 .img_slide, #work4 .pul_info, #work4 .pul_info_text").addClass("on");
				}
				if($("section#work5").css("top")=="0px"){
					$("#work5 .title, #work5 .fc_bg, #work5 .cont_theme, #work5 .name_cover, #work5 .fc_info, #work5 .fc_info_text").addClass("on");						
				}
				if($("section#works").css("top")=="0px"){
					$(".piece > a > span").addClass("on");
				}
				
			});
			
			console.log(i);
			
			
		}
		k=i;
	}

	function mousewheel(e){
		
		var y = e.originalEvent.deltaY;
			$(".pager li").off("click");
			$(document).off("wheel");
			$(document).off("keydown");

			if(y>0){
				nextSlide();
			}
			if(y<0){
				prevSlide();
			}

	}
	
	function pressKey(e){
	
			$(".pager li").off("click");
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
					$(".pager li").on("click", clickSlide);
				},200);
			}
	}
	
	function clickSlide(){
		i=$(this).index();
		if(i==k) return;
			$(".pager li").off("click");
			$(document).off("wheel");
			$(document).off("keydown");
		if(k>i){
			$("section").eq(k).css('top',0).animate({
				"top":"100%"
			},700,"easeInQuad");
			$("section").eq(i).css('top',"-100%").animate({
				"top":0
			},700,"easeInQuad", function(){
				$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$(".pager li").on("click", clickSlide);
				
				if($("section#work1").css("top")=="0px"){
					$("#work1 .title, #work1 .cont_bg, #work1 .cont_theme, #work1 .name_cover, #work1 .baemin_info_hori, #work1 .baemin_info_verti, #work1 .baemin_info_text").addClass("on");
				}
				if($("section#work2").css("top")=="0px"){
					$("#work2 .title, #work2 .cont_bg, #work2 .cont_theme, #work2 .name_cover, #work2 .farms_info, #work2 .farms_info_text ").addClass("on");				
				}
				if($("section#work3").css("top")=="0px"){
					$("#work3 .title, #work3 .bts_bg, #work3 .cont_theme, #work3 .name_cover, #work3 .bts_info, #work3 .bts_info_text").addClass("on");
				}
				if($("section#work4").css("top")=="0px"){
					$("#work4 .title, #work4 .name_cover, #work4 .img_slide, #work4 .pul_info, #work4 .pul_info_text").addClass("on");
				}
				if($("section#work5").css("top")=="0px"){
					$("#work5 .title, #work5 .fc_bg, #work5 .cont_theme, #work5 .name_cover, #work5 .fc_info, #work5 .fc_info_text").addClass("on");						
				}
				if($("section#works").css("top")=="0px"){
					$(".piece > a > span").addClass("on");
				}
			});
			
			
			
		}else if(k<i){
			$("section").eq(k).css('top',0).animate({
				"top":"-100%"
			},700,"easeInQuad");
			$("section").eq(i).css('top',"100%").animate({
				"top":0
			},700,"easeInQuad", function(){
				$(document).on("wheel",mousewheel);
				$(document).on("keydown", pressKey);
				$(".pager li").on("click", clickSlide);
				
				if($("section#work1").css("top")=="0px"){
					$("#work1 .title, #work1 .cont_bg, #work1 .cont_theme, #work1 .name_cover, #work1 .baemin_info_hori, #work1 .baemin_info_verti, #work1 .baemin_info_text").addClass("on");
				}
				if($("section#work2").css("top")=="0px"){
					$("#work2 .title, #work2 .cont_bg, #work2 .cont_theme, #work2 .name_cover, #work2 .farms_info, #work2 .farms_info_text ").addClass("on");				
				}
				if($("section#work3").css("top")=="0px"){
					$("#work3 .title, #work3 .bts_bg, #work3 .cont_theme, #work3 .name_cover, #work3 .bts_info, #work3 .bts_info_text").addClass("on");
				}
				if($("section#work4").css("top")=="0px"){
					$("#work4 .title, #work4 .name_cover, #work4 .img_slide, #work4 .pul_info, #work4 .pul_info_text").addClass("on");
				}
				if($("section#work5").css("top")=="0px"){
					$("#work5 .title, #work5 .fc_bg, #work5 .cont_theme, #work5 .name_cover, #work5 .fc_info, #work5 .fc_info_text").addClass("on");						
				}
				if($("section#works").css("top")=="0px"){
					$(".piece > a > span").addClass("on");
				}
			});
		}
		$(".pager li").removeClass("on").eq(i).addClass("on");
		k=i;
	}

	$(document).on("touchstart", handDragStart);
	$(document).on("touchmove", handDragMove);
	$(document).on("touchend", handDragEnd);
		
	var t_start = null;
	function handDragStart(e){
		$(".pager li").off("click");
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

	
	
	
	//모바일 header menu
	$(".m_menu").click(function(){
		$(this).toggleClass("on");
		$(".about_box").toggleClass("come");
		
		setTimeout(function(){
			skillbar();
		},600);
		
	});
	
	
	

		
//마지막	
});