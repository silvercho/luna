$(document).ready(function(){
	$(".btnMenu").click(function(){
		$("header, section").addClass("on");
		$(this).fadeOut();
	});
	$(".gnb>li").click(function(){
		var i = $(this).index();
		$(".btnMenu").fadeIn();
		$("header, section").removeClass("on");
		
		$("section>div").removeClass("on").eq(i).addClass("on")
		
		return false;
	});
});















