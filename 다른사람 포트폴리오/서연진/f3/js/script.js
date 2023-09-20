$(function(){
	
	$(".nav_cover > ul > a").click(function(){
				var d =$(".nav_full").css("display");
				
				if(d=="none"){
					$(".nav_full").stop().slideDown();
				}else{
					$(".nav_full").stop().slideUp();
				}
				
				var c = $(this).index();
				$(".menubtn").eq(c).toggleClass("on")
			});
			
			$(window).on("load", function(){
				var random = Math.floor(Math.random()*5);
				
				$("span.text").eq(random).css("display","block");
			});
			
			$("header .header_cover .header_top .input_cover input").focus(function(){
				$("span.text").css("display","none");
			});
	
	
});








