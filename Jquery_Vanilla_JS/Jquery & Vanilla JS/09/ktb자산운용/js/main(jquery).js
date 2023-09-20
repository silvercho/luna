$(function(){
	$('.dd').click(function(){
		var k=$(this).hasClass('on');
		// alert(k);
		if(k==false){
			$(this).addClass('on');
			$('.right').addClass('on');
			$('.sub').addClass('on');
			$('ul.gnb>li').addClass('on');
			$('header').addClass('on');
			$('.shadow').addClass('on');
			
		}else{
			$(this).removeClass('on');
			$('.right').removeClass('on');
			$('.sub').removeClass('on');
			$('ul.gnb>li').removeClass('on');
			$('header').removeClass('on');
			$('.shadow').removeClass('on');
			
		}
	});
		
	$('ul.gnb li').click(function(){
		if($(this).hasClass('on')==false){
			$('ul.gnb li').addClass('on');
			$('.right').addClass('on');
			$('.sub').addClass('on');
			$('.dd').addClass('on');
			$('header').addClass('on');
			$('.shadow').addClass('on');
		}
	});
	$('header').mouseleave(function(){
		$('ul.gnb li').removeClass('on');
		$('.right').removeClass('on');
		$('.sub').removeClass('on');
		$('.dd').removeClass('on');
		$('header').removeClass('on');
		$('.shadow').removeClass('on');
	});
	var visual=$('#brandVisual>ul>li'); // 큰사진 li
	var button=$('#buttonList>li'); // 블릿(버튼)li
	var current=0;
	var id;
	var i=0;	//전역변수
	var k;
	
	button.click(function(){
		i=$(this).index();
		button.removeClass('on');
		$(this).addClass('on');
		k=i+1;
		//$('.num1').text(k);
		$('.num1').html(k+'&nbsp');
		move();
		return false
	});
	timer();
	function timer(){
		id=setInterval(function(){
			var n=current+1
			//length==갯수 (6)
			if(n==visual.length){
				n=0;
			} 
			button.eq(n).trigger('click'); // 강제로 인덱스번호 n값을 누른다.(컴퓨터가 누름)
		},2000);
	}
	
	function move(){
		if(current==i) return;
		var cu=visual.eq(current);
		var ne=visual.eq(i);
		cu.css('left','0').stop().animate({left:'-100%'});
		ne.css('left','100%').stop().animate({left:'0'});
		current=i;
	}
	
	$('#brandVisual ul,#buttonList').mouseenter(function(){
		clearInterval(id);
	});
	$('#brandVisual ul,#buttonList').mouseleave(function(){
		timer();
	});
	$('.next').click(function(){
		i=i+1;
		if(i==6){
			i=0;
		}	
		button.removeClass('on');
		button.eq(i).addClass('on');
		k=i+1;
		//$('.num1').text(k);
		$('.num1').html(k+'&nbsp');
		
		var cu=visual.eq(current);
		var ne=visual.eq(i);
		cu.css('left','0').stop().animate({left:'-100%'});
		ne.css('left','100%').stop().animate({left:'0'});
		current=i;
		return false
	});
	$('.prev').click(function(){
		i=i-1;
		if(current==0){
			i=5;
		}
		button.removeClass('on');
		button.eq(i).addClass('on');
		k=i+1;
		//$('.num1').text(k);
		$('.num1').html(k+'&nbsp');
		
		var cu=visual.eq(current);
		var pe=visual.eq(i);
		cu.css('left','0').stop().animate({left:'100%'});
		pe.css('left','-100%').stop().animate({left:'0'});
		current=i;
		return false
	});
	$('.play').click(function(){
		if($(this).hasClass('on')==true){
			$(this).removeClass('on');
			timer();
		}else{
			$(this).addClass('on');
			clearInterval(id);
		}
		return false
	});
});











