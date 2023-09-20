$(function(){
	var gap=300;
	
	var top1=$('.area1').offset().top;
	var top2=$(".area2").offset().top;
	var top3=$(".area3").offset().top;
	var top4=$(".area4").offset().top;
	var top5=$(".area5").offset().top;
	console.log(top1);
	console.log(top2);
	console.log(top3);	
	console.log(top4);	
	console.log(top5);	
	
	$(window).scroll(function(){
	var sct = $(window).scrollTop();
	$('.title span').text(sct);
		if(sct  < top2-gap ){
			$('.area1').addClass('on')
		}else if(sct  < top3-gap){
			$('.area2').addClass('on')
		}else if(sct  < top4-gap){
			$('.area3').addClass('on')
		}else if(sct  < top5-gap){
			$('.area4').addClass('on')
		}else{
			$('.area5').addClass('on')
		}
		
	});
	
	
	
	
});