$(function(){
	/*
	$("#gnb li").mouseenter(function(){
		$(this).find(".sub").stop(true,true).slideDown();
		$(this).children(".sub").stop(true,true).slideDown();
	});
	$("#gnb li").mouseleave(function(){
		$(this).find(".sub").stop(true,true).slideUp();
		$(this).children(".sub").stop(true,true).slideUp();
	});
	*/
	$("#gnb li").hover(function(){
		$(this).find(".sub").stop(true,true).slideDown();
		
	},function(){
		$(this).find(".sub").stop(true,true).slideUp();
		
	});
	
	
	
	
});