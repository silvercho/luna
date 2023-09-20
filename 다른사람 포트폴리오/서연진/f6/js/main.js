$(document).ready(function(){
	$(".btnMenu").click(function(){
		$("header, section").addClass("on");
		$(this).fadeOut();
		return false;
	});
	$(".gnb li").click(function(){
		$(".btnMenu").fadeIn();
		$("header, section").removeClass("on");
		
		var i =$(this).index();
		
		$("section>div").removeClass("on").eq(i).addClass("on");
		return false;
	});

	
});















