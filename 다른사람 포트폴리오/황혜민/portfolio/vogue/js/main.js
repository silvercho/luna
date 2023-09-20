$(document).ready(function(){
	$(".btn").click(function(){
		$("nav").addClass("on");
		$("section").addClass("on");
		$(this).fadeOut();
	});
	
	$("#gnb li").click(function(){
		
		$("nav").removeClass("on");
		$("section").removeClass("on");
		
		$(".btn").fadeIn();
		
		var i = $(this).index();
		$("section>div").removeClass("on").eq(i).addClass("on");
	});
 
 
	
});















