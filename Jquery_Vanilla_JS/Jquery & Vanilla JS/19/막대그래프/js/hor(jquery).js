$(function(){
	var $content = $('.skills');
	var $charts = $content.find('.skill');
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		if(sct > 1500){
			zPercent();
		}
		if(sct>600 && sct <1500){
			aPercent();
		}
		
		
	});

	var percentDatas = [];

	
	$charts.each(function(){	
		percentDatas.push($(this).find(".skill_p .num").text());	
		// percentData 입력값들을 배열에 저장
	})
	
	console.log(percentDatas);
	
		function aPercent(){
			if($content.hasClass('active')==false){	
			$content.stop().animate({left:"50%"},1200);
			
			$charts.each(function(i){
			var $chart = $(this);	
			var $chartBar = $chart.find('.skill_g').css({width:'0%'});	
			//챠트바의 넓이 0	
			var $percentNumber = $chart.find(".skill_p .num");	
			// html  지정한 퍼센트 숫자를 $percentNumber 대입
			var percentData = $(percentDatas).get(i);	
			// 배열에 저장해 둔 percentData 입력값을 지정
			$chart.find(".skill_p .num").text(0);	
				
			$({percent:0}).delay(1000).animate({percent:percentData},{
				duration:3000,
				progress:function(){
				var now = this.percent;	
				$chartBar.css({width:now+'%'});
				$percentNumber.text(Math.floor(now));
				//글씨가 0 부터 now까지 증가
				}
			});
		
		  });
		}
		$content.addClass('active');
		$content.removeClass('unactive');
	}
	
	function zPercent(){
		if($content.hasClass('unactive')==false){
			$charts.each(function(){
			var $chart =$(this);			
			var $chartBar = $chart.find('.skill_g').css({width:'0%'});	
			//챠트바의 넓이 0	
			
			});		
		}
		$content.removeClass('active');
		$content.addClass('unactive');
	}
	
	
	
	
	
	
});



