$(function(){
		
	$(window).scroll(function(){
		var s = $(window).scrollTop();
		
		if(s>99){
			$("header").addClass("on");
		}else{
			$("header").removeClass("on");
		}
		
	});
	
	
	
});