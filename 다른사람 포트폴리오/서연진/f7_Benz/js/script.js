$(function(){

	
	for(var i=3; i<=173; i++){
		if(i<10){
			$(".img_video").append("<img src='./images/pic/extracted_frame_000"+i+".jpg' alt=''/>");
		}else if(i>=10 && i<100){
			$(".img_video").append("<img src='./images/pic/extracted_frame_00"+i+".jpg' alt=''/>");
		}else{
			$(".img_video").append("<img src='./images/pic/extracted_frame_0"+i+".jpg' alt=''/>");
		}
	}
	
	$(".img_video img").eq(0).show();
	$(".img_video img").eq(0).siblings("img").hide();
	
	$(window).resize(function(){
		var h = $("#cube .motion_img_cover .img_video").height();
		
		$("#cube .motion_img_cover .c_text_box").height(h);
		console.log(h);
	});
	$(window).trigger("resize");
	
	/*var m = 0;
	setInterval(function(){
		m++;
		
		if(m==172){m=0;}
		
		$("#cube img").hide();
		$("#cube img").eq(m).show();
	},30);*/
	
	
	$("#strong .str_img .img1").eq(0).show();
	$("#strong .str_img .img1").eq(0).siblings().css("left","100%");
	
	$("#strong .txt_box .txt1").eq(0).show();
	$("#strong .txt_box .txt1").eq(0).siblings().css("left","100%");
	var strN = 0;
	
	$(".str_btn .btn.next").click(function(){
		var length = $(".str_img li").length;
		
		strN++;
		
		if(strN==length){
			strN=0;
		}
		$(".str_img li").eq(strN).css("left","100%").animate({
			"left":"0"
		},400);
		$(".str_img li").eq(strN-1).css("left","0").animate({
			"left":"-100%"
		},400);
		
		$(".txt_box li").eq(strN).css("left","100%").animate({
			"left":"0"
		},400);
		$(".txt_box li").eq(strN-1).css("left","0").animate({
			"left":"-100%"
		},400);console.log(strN);
	});
	$(".str_btn .btn.prev").click(function(){
		var length = $(".str_img li").length;
		strN--;
		
		if(strN==-1){
			strN=length-1;
			$(".str_img li").eq(strN).css("left","-100%").animate({
			"left":"0"
			},400);
			$(".str_img li").eq(0).css("left","0").animate({
				"left":"100%"
			},400);
			
			$(".txt_box li").eq(strN).css("left","-100%").animate({
				"left":"0"
			},400);
			$(".txt_box li").eq(0).css("left","0").animate({
				"left":"100%"
			},400);
		}else{
			$(".str_img li").eq(strN).css("left","-100%").animate({
				"left":"0"
			},400);
			$(".str_img li").eq(strN+1).css("left","0").animate({
				"left":"100%"
			},400);
			
			$(".txt_box li").eq(strN).css("left","-100%").animate({
				"left":"0"
			},400);
			$(".txt_box li").eq(strN+1).css("left","0").animate({
				"left":"100%"
			},400);
		}
		console.log(strN);
	});
	
	
	$("#cube .c_text_box .c_txt").eq(0).show();
	$("#cube .c_text_box .c_txt").eq(0).siblings().hide();
	
	var n=0;
	var bg1 = 0;
	var bg2 = 0;
	var cNum = 0;
	
	$(".m_cover .next i").click(function(){
		n+=33.33;
		cNum++;
		bg1+=10;
		bg2+=7;
		
		if(cNum==7){
			$(".m_cover .next i").hide();			
		}else if(cNum>0){
			$(".m_cover .prev i").show();
		}
		
		$(".m_cover").css("background-position",bg1+"% bottom");
		$(".mom_over").css("background-position",bg2+"% bottom");
		$(".m_cover .mom_over ul").stop().animate({
			"left":"-"+n+"%"
		},400);
		
	});
	$(".m_cover .prev i").click(function(){
		n-=33.33;
		cNum--;
		bg1-=10;
		if(cNum==0){
			$(".m_cover .prev i").hide();	
		}else if(cNum<7){
			$(".m_cover .next i").show();
		}
		
		$(".m_cover").css("background-position",bg1+"% bottom");
		$(".mom_over").css("background-position",bg2+"% bottom");
		$(".m_cover .mom_over ul").stop().animate({
			"left":"-"+n+"%"
		},400);
	});
	
	var count = 0;
	$("#cube .c_button li").click(function(){
		
		var t = $(this);
			
		$({ Counter:count }).stop().animate({
			Counter:t.attr("data-count")
			
		},{
			duration:1500,
			progress:function(){	
				var last = Math.ceil(this.Counter);
				$(".img_video img").hide();
				$(".img_video img").eq(last).show();
				
				count=last;
			}
		});
	
		var width = $(this).attr("data-hover");

		$(".c_button .line").stop().animate({
			"width":width+"%"			
		},1500);	
		
		var num = $(this).index();
		$("#cube .c_text_box .c_txt").fadeOut(400);
		$("#cube .c_text_box .c_txt").eq(num).fadeIn(400);
		
		
	
	});
	
	$(window).scroll(function(){
		var scr = $(this).scrollTop(); 	
		if(scr>=130){
			$("header").css({
				"position":"fixed",
				"top":"-130px"
			});
			$("#fake_header").show();
		}else{
			$("header").css({
				"position":"relative",
				"top":"0px"
			});
			$("#fake_header").hide();
		}
		
		var ah = $("body").height()-$(window).height();

		
		var result = (scr/ah)*100;
		
		$(".scr_line").css("width",result+"%");
		
	});
	
	
	
	
});