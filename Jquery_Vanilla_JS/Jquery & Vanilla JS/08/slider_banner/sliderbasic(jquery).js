$(function(){
	var visual = $("#brandVisual>ul>li"); //큰사진 li
	var button = $('#buttonList > li'); //블릿(버튼) li 
	var current = 0; //현재
	var id;
	
	button.click(function(){
		var i = $(this).index();
		//alert(i);
		button.removeClass('on');//초기화
		
		$(this).addClass('on');
		//button.eq(i).addClass('on');
		move(i);
		
	});
	timer();//timer() 한번실행;
	function timer(){
		id = setInterval(function(){
			var n = current + 1;
			if(n == 3){
				n=0;
			}
			button.eq(n).trigger("click");
			//컴퓨터가 버튼을 강제로 누른다(클릭).
			
		},3000);
		
	}
	
	$("#brandVisual").mouseenter(function(){
		clearInterval(id);
	
	});
	
	$("#brandVisual").mouseleave(function(){
		timer();
	
	});
	
	
	
	
	
	
	function move(i){
		if(current == i) return;
		//현재있는 슬라이드 번호(인덱스번호) 와
		//클릭한 슬라이드번호가 같으면 빠져 나간다.
		var cu = visual.eq(current);
		var ne = visual.eq(i);
		
		cu.css("left","0").stop().animate({left:"-100%"});
		ne.css("left","100%").stop().animate({left:0});
		current = i;
	}
	
	
	
	
});