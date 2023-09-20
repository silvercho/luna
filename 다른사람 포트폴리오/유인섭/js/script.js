$(function(){
	
	
	
			
	
	//수동
		$("#logowrap .next-btn").click(function(){
			$("#logowrap").css("display","none");
			$("#wrap").css("display","block");
			$("header").css("display","block");
			$("#pager").css("display","block");
			$(".main_text").shuffleLetters();
		});
	
		
	
	
	//자동
	setTimeout(function(){
		if($("#wrap").css("display")=="none"){
			$("#logowrap").css("display","none");
			$("#wrap").css("display","block");
			$("header").css("display","block");
			$("#pager").css("display","block");
			$(".main_text").shuffleLetters();
		}
	},10000);
			
	/////////////
	
		
		
		
	////////////
		
		
		var img_clone = $(".li_cover .li:lt(4)").clone();
		$(".li_cover").append(img_clone);
		var img_length = $(".li_cover .li").length;
		
		$(".li_cover").width((100/4)*img_length+"%");
		$(".li_cover .li").width((100/img_length)+"%");
		
		
		$(".li_cover .li").mouseover(function(){
			var img_h = $(this).find("img").height();
			var li_h = $(this).height();
			
			$(this).find('img').stop().animate({
				"top":-(img_h-li_h)
			},2000);
		});
		$(".li_cover .li").mouseleave(function(){
			$(this).find('img').stop().animate({
				"top":0
			},2000);
		});
		
		
	//////////////
		
		

		
		var time = 10;
		var count = setInterval(function(){
			time--;
			
			if(time<0){
				$(".seconds").fadeOut();
				clearInterval(count);
			}
			
			$(".seconds span").text(time);
			
		},1000);
		/////////////////
		
		
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
		
		
		
	
		
		
		
});