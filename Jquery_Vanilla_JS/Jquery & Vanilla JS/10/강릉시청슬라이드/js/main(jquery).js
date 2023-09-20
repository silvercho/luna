$(function(){
	var status = 0;
	//var wi = $("#banner li:first").width();	
	var wi = parseInt($("#banner li:first").css('width'));
	// 정수만 추출   예)  parseInt(10.5px)- 10만 추출
	var num = 0;
	var total = $("#banner li").length;
	//전체사진의 갯수
	var copy1 = $("#banner li:eq(0)").clone();
	$("#banner").append(copy1);
	
	$('.btn_next').click(function(){
		if(num==total){
			num = 0;
			$("#banner").css('margin-left','0');
		}		
		num++;
		$("#banner").stop().animate({"margin-left":-num*wi},1000);
		
	});
	$('.btn_prev').click(function(){
		if(num==0){
			num = total;
			$("#banner").css('margin-left',-num*wi);
		}		
		num--;
		$("#banner").stop().animate({"margin-left":-num*wi},1000);
		
	});
	
	var id = setInterval(auto,3000);
	function auto(){
		if(num==total){
			num = 0;
			$("#banner").css('margin-left','0');
		}		
		num++;
		$("#banner").stop().animate({"margin-left":-num*wi},1000);
	
	}
	
	$(".btn_stop").click(function(){
		if($(this).hasClass("on")==true){
			$(this).removeClass("on");
			status=0;
			id = setInterval(auto,3000);
			
		}else{
			$(this).addClass("on");
			clearInterval(id);
			status = 1;
		}
	});
	
	$(".main2").mouseover(function(){
		clearInterval(id);
		
	});
	$(".main2").mouseout(function(){
		if(status==0){
		id = setInterval(auto,3000);
		}
	});
	
	
	
	
	
	
	
});