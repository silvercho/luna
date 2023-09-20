$(function(){
	var contents = $(".section");
	var w;
	var h;
	$(window).resize(function(){
		w = $(window).width();
		h = $(window).height();
		contents.height(h);
		//contents.css("height",h);
		contents.width(w);
		$('#wrap').height(h);
	});
	$(window).trigger('resize');
	
	var left1 = contents.eq(1).offset().left;
	//alert(left1);
	$('html,body').stop().animate({'scrollLeft':left1},1300);
	
	$(".top_logo").click(function(){
		var left1 = contents.eq(0).offset().left;
	//alert(left1);
		$('html,body').stop().animate({'scrollLeft':left1},1300);
		return false;
		
	});
	
	
	
	$('.lnb > li').click(function(e){
		e.preventDefault();//return false;
		var i = $(this).index();
		var wt = $(window).width(); 
		var nowLeft = i * wt;
		$('html,body').stop().animate({'scrollLeft':nowLeft},1300);
		
	});
	
	
	
	
	
	$('.section').mousewheel(function(event, d){
		
		console.log(d);
		
		if(d>0){
			var prev = $(this).prev().offset().left;
			$('html,body').stop().animate({scrollLeft:prev},1300,"easeOutBounce");
			}
			
		
		
		if(d<0){
			var next = $(this).next().offset().left;
			$('html,body').stop().animate({scrollLeft:next},1300,"easeOutBounce");
			}
		
		
		
	});
	
	
	


});



