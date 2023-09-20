$(function(){
	
	$(".movie_enter").click(function(){
		$(".bg_curtain").stop().animate({
			"width":"10%"
		},800);
		$(this).stop().animate({
			"opacity":0
		});
		
	});	
	
	for(var i=0; i<200; i++){
		$(".screen_inner").append("<img src='./img_cut/scene"+i+".jpg' alt=''>");
	}
	
	$(window).mousemove(function(e){
		var mouseX = e.clientX;
		var widthW = $(window).width();
		var mouseC = Math.floor((mouseX/widthW)*200)
		
		$(".screen_inner img").css("display", "none");
		$(".screen_inner img").eq(mouseC).css("display", "block");
	});	
	
	var i = 0;
	$(window).scroll(function(){
		i++;
		
		if(i==200){
			i=0;
		}
		
		$(".screen_inner img").css("display", "none");
		$(".screen_inner img").eq(i).css("display", "block");
		
		console.log(i);
	});	

	
	
});