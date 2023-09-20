$(function(){
	$(window).resize(function(){
		var w = $(window).width();
		var h = $(window).height();
		var mh = $("#main_wrap").height();
		
		if(w>1200){
			$("#main_wrap").height("100%");
		}else{
			$("#main_wrap").css({"height":h*5,"left":0});
		}
			
	});
	$(window).trigger("resize");	
	
	
	
	//home
		var i=0;
		setInterval(function(){
			i++;
			if(i>11){
				i=0;
			}
			$(".home .y1 img").css("display","none");
			$(".home .y1 img").eq(i).css("display","block");
			$(".home .y2 img").css("display","none");
			$(".home .y2 img").eq(i).css("display","block");
			$(".home .comment img").css("display","none");
			$(".home .comment img").eq(i).css("display","block");
			$(".home .dot img").css("display","none");
			$(".home .dot img").eq(i).css("display","block");
		},100);
	//about
		var k=0;
		setInterval(function(){
			k++;
			if(k>11){
				k=0;
			}
			$(".about .b1 img").css("display","none");
			$(".about .b1 img").eq(k).css("display","block");
			$(".about .w1 img").css("display","none");
			$(".about .w1 img").eq(k).css("display","block");
			$(".about .r_comment img").css("display","none");
			$(".about .r_comment img").eq(k).css("display","block");
			$(".about .r_dot img").css("display","none");
			$(".about .r_dot img").eq(k).css("display","block");
		},100);
	//skill
		var s=0;
		setInterval(function(){
			s++;
			if(s>11){
				s=0;
			}
			$(".skill .sw img").css("display","none");
			$(".skill .sw img").eq(s).css("display","block");
			$(".skill .pur img").css("display","none");
			$(".skill .pur img").eq(s).css("display","block");
			$(".skill .b_comment img").css("display","none");
			$(".skill .b_comment img").eq(s).css("display","block");
			$(".skill .b_dot img").css("display","none");
			$(".skill .b_dot img").eq(s).css("display","block");
		},100);
	//work
		var w=0;
		setInterval (function(){
			w++;
			if(w>11){
				w=0;
			}
			$(".work .light_b img").css("display","none");
			$(".work .light_b img").eq(w).css("display","block");
			$(".work .dark_b img").css("display","none");
			$(".work .dark_b img").eq(w).css("display","block");
			$(".work .w_comment img").css("display","none");
			$(".work .w_comment img").eq(w).css("display","block");
			$(".work .ws_comment img").css("display","none");
			$(".work .ws_comment img").eq(w).css("display","block");
			$(".work .w_dot img").css("display","none");
			$(".work .w_dot img").eq(w).css("display","block");
		},100);
	//contact
		var p=0;
		setInterval (function(){
			p++;
			if(p>11){
				p=0;	
			}
			$(".contact .orange img").css("display","none");
			$(".contact .orange img").eq(p).css("display","block");
			$(".contact .lemon img").css("display","none");
			$(".contact .lemon img").eq(p).css("display","block");
			$(".contact .p_comment img").css("display","none");
			$(".contact .p_comment img").eq(p).css("display","block");
			$(".contact .p_dot img").css("display","none");
			$(".contact .p_dot img").eq(p).css("display","block");
		},100);
		
	//sub page	
		
	//home
		var y=0;
		setInterval(function(){
			y++;
			if(y>11){
				y=0;
			}
			$(".h_cover .y1 img").css("display","none");
			$(".h_cover .y1 img").eq(y).css("display","block");
			$(".h_cover .y2 img").css("display","none");
			$(".h_cover .y2 img").eq(y).css("display","block");
			$(".h_cover .comment img").css("display","none");
			$(".h_cover .comment img").eq(y).css("display","block");
			$(".h_cover .dot img").css("display","none");
			$(".h_cover .dot img").eq(y).css("display","block");
		},100);
	//about
		var u=0;
		setInterval(function(){
			u++;
			if(u>11){
				u=0;
			}
			$(".a_cover .b1 img").css("display","none");
			$(".a_cover .b1 img").eq(u).css("display","block");
			$(".a_cover .w1 img").css("display","none");
			$(".a_cover .w1 img").eq(u).css("display","block");
			$(".a_cover .r_comment img").css("display","none");
			$(".a_cover .r_comment img").eq(u).css("display","block");
			$(".a_cover .r_dot img").css("display","none");
			$(".a_cover .r_dot img").eq(u).css("display","block");
		},100);
	//skill
		var o=0;
		setInterval(function(){
			o++;
			if(o>11){
				o=0;
			}
			$(".s_cover .sw img").css("display","none");
			$(".s_cover .sw img").eq(o).css("display","block");
			$(".s_cover .pur img").css("display","none");
			$(".s_cover .pur img").eq(o).css("display","block");
			$(".s_cover .b_comment img").css("display","none");
			$(".s_cover .b_comment img").eq(o).css("display","block");
			$(".s_cover .b_dot img").css("display","none");
			$(".s_cover .b_dot img").eq(o).css("display","block");
		},100);
	//work
		var t=0;
		setInterval (function(){
			t++;
			if(t>11){
				t=0;
			}
			$(".w_cover .light_b img").css("display","none");
			$(".w_cover .light_b img").eq(t).css("display","block");
			$(".w_cover .dark_b img").css("display","none");
			$(".w_cover .dark_b img").eq(t).css("display","block");
			$(".w_cover .w_comment img").css("display","none");
			$(".w_cover .w_comment img").eq(t).css("display","block");
			$(".w_cover .ws_comment img").css("display","none");
			$(".w_cover .ws_comment img").eq(t).css("display","block");
			$(".w_cover .w_dot img").css("display","none");
			$(".w_cover .w_dot img").eq(t).css("display","block");
		},100);
	//contact
		var q=0;
		setInterval (function(){
			q++;
			if(q>11){
				q=0;	
			}
			$(".c_cover .orange img").css("display","none");
			$(".c_cover .orange img").eq(q).css("display","block");
			$(".c_cover .lemon img").css("display","none");
			$(".c_cover .lemon img").eq(q).css("display","block");
			$(".c_cover .p_comment img").css("display","none");
			$(".c_cover .p_comment img").eq(q).css("display","block");
			$(".c_cover .p_dot img").css("display","none");
			$(".c_cover .p_dot img").eq(q).css("display","block");
		},100);
		
		
		
		var move_num = 25;
		$(document).on("mousewheel",function(event, d){
			var w = $(window).width();
			
			if(w>1200){
				if(d>0){
					if(move_num>25) return;
					move_num+=5;
					
					$("#main_wrap").css("left",move_num+"%");
				}else if(d<0){
					if(move_num<-220) return;
					move_num-=5;
					
					$("#main_wrap").css("left",move_num+"%");
					
				
				}
			}
		});

	
		
			
			
		var j = 0;
		$(".next").on("click",next_slide);
		
		function next_slide(){
			$(".next").off("click");
			
			j++;
			if(j>9){
				j=0;
			}
			
			$(".w_left_box .work").eq(j).css("left","100%").animate({
				"left":0
			},600);
			$(".w_left_box .work").eq(j-1).css("left",0).animate({
				"left":"-100%"
			},600, function(){
				$(".next").on("click",next_slide);
			});
			console.log(j);
			
		}
		$(".prev").on("click",prev_slide);
	
		function prev_slide(){
			$(".prev").off("click");
			j--;
			
			
			$(".w_left_box .work").eq(j).css("left","-100%").animate({
				"left":0
			},600);
			$(".w_left_box .work").eq(j+1).css("left",0).animate({
				"left":"100%"
			},600, function(){
				$(".prev").on("click",prev_slide);
			});
			
			
			if(j==-1){
				j=9;
			}
		}

/*혜민이 메롱*/	
	$("#btn").click(function(){
		$("#sub_wrap, .wrap_section").css("display","none");
		$(".wrap").css("display","block");
	});
	$(".category").click(function(){
		var selctor = $(this).attr("data-hover");
		
		$(".wrap").css("display","none");
		$("#sub_wrap").css("display","block");
		$("#"+selctor+"_wrap").css("display","block");
	});	
	$("#top_wrap nav ul li").click(function(){
		var target = $(this).children("a").attr("href");
		$(".wrap_section").css("display","none");
		
		$(target).css("display","block");
		
	});	

/*
	$(window).resize(function(){
		var w = $(window).width();
		
		if(w<=1200){
			var desk = $(".w_left_box .work .work_box img.desk").height();
			var beatbox = $(".w_left_box .work .work_box .beatbox").height();
				
			$(".w_left_box, .w_left_box .work").height(desk+beatbox);
		}else{
			$(".w_left_box, .w_left_box .work").height(600);			
		}
	});
	*/
});