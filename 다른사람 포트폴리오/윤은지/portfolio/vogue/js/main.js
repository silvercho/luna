$(document).ready(function(){
 
	$(".btnMenu").click(function(){
		$("header, section").addClass("on");
		$(this).stop().fadeOut();
	});

	$(".gnb li").click(function(){
		
		$(".btnMenu").stop().fadeIn();
		$("header, section").removeClass("on");
		
		var i = $(this).index();
			
		$("section > div").removeClass("on").eq(i).addClass("on");	
			
	});

	return false;
	
});















