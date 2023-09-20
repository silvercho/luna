$(function(){
	var i = 0;
	var clone = $(".slide_cover ul li").eq(0).clone();
	$(".slide_cover ul").append(clone);
	var clone1 = $(".slide_cover ul li").eq(14).clone();
	$(".slide_cover ul").prepend(clone1);
	setInterval(function(){
		i++;
		if(i==15){
			i=0;
			$(".slide_cover ul").css("margin-left",750+"px")
			$(".slide_cover ul").animate({
				"margin-left":-i*750+"px"
			})
			
		}else{
			$(".slide_cover ul").animate({
				"margin-left":-i*750+"px"
			})
		}
	},3000);
	
	
	var f = 0;
	var text_clone = $(".f1 ul li").eq(0).clone();
	$(".f1 ul").append(text_clone);
	
	setInterval(function(){
		if(f==10){
			f=0;
			$(".f1 ul").css("margin-top",0+"px");
		}
		f++;
		$(".f1 ul").animate({
			"margin-top":-f*21+"px"
		},300);
		
		
		
		
	},3000);
	
	
	
});