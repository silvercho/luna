$(function(){
	
		
	
	$(window).scroll(function(){

			var ws = $(window).scrollTop();
			
			if(ws>=1200)
			
			{
				
				$(".mountains_and_city").css({
					"position":"fixed",
					"top":"0"
				});
				
				
				$(".river").css({
					"position":"fixed",
					"top":"500px"
					
				});
				
				}else{
				$(".mountains_and_city").css({
					"position":"relative",
					"top":"1200px"
				});
				
				$(".river").css({
					"position":"relative",
					"top":"1200px"
					
				});
				
				}
			if(ws==0){
				$(".logo_1").css(
					"opacity","0.3"
				);
				
				$(".scroll").css(
					"opacity",1);
			}	
			if(ws>=100){
				$(".logo_1").css(
					"opacity","0.3"
				);
				$(".logo").css(
					"top","420px"
				);
				
				$(".scroll").css(
					"opacity","0.5");
			}
			if(ws>=200){
				$(".logo_1").css(
					"opacity","0.3"
				);
				$(".logo").css(
					"top","440px"
				);
				
				$(".scroll").css(
					"opacity",0);
			}
			if(ws>=300){
				$(".logo_1").css(
					"opacity","0.3"
				);
				$(".logo").css(
					"top","460px"
				);
			}
			if(ws>=400){
				$(".logo_1").css(
					"opacity","0.3"
				);
				$(".logo").css(
					"top","480px"
				);
			}
			if(ws>=500){
				$(".logo_1").css(
					"opacity","0.2"
				);
				$(".logo").css(
					"top","500px"
				);
			}
			if(ws>=600){
				$(".logo_1").css(
					"opacity","0"
				);
				$(".logo").css(
					"top","520px"
				);
			}
			if(ws>=700){
				$(".logo_1").css(
					"opacity","0"
				);
				$(".logo").css(
					"top","540px"
				);
			}
			if(ws>=800){
				$(".logo_1").css(
					"opacity","0"
				);
				$(".logo").css(
					"top","560px"
				);
			}
			if(ws>=900){
				$(".logo_1").css(
					"opacity","0"
				);
				$(".logo").css(
					"top","580px"
				);

			}
			if(ws>=1000){
				$(".logo_1").css(
					"display","none"
				);	
			}else{$(".logo_1").css(
				"display","block"
			);
				
			}
				
			console.log(ws);
		});
	
		
		
		setInterval(function(){
			var t = new Date();
			var s = t.getSeconds();
			
			s=s*6;
			
			
			$(".sec").css("transform","rotate("+s+"deg)")
			
		},1000);
		
	
		
		
	
		$(window).scroll(function(){
			var sct = $(window).scrollTop();
			var off = $(".section").offset().top;
			
			if(sct > off){
				graph();
			}

		});	
			
		function graph(){
			
			if($(".charts").hasClass("on")==false){
			
				$(".chart").each(function(){
					var cl = $(this).find(".left .circle-mask-inner").css("transform","rotate(0)");
					var cr = $(this).find(".right .circle-mask-inner").css("transform","rotate(0)");
					
					var pn = $(this).find(".percent-number");
					var pdata = pn.text();
					
					pn.text(0);
					
					$({percent:0}).animate({
						percent:pdata
					},{
						duration:5800,
						progress:function(){
							var now = this.percent;
							//75 25 10
							var deg = (now*360)/100;
							//270 90 36
							var dl = Math.min(Math.max(deg-180,0),180);
							//90 0 0
							var dr = Math.min(Math.max(deg,0),180);
							//180 90 36
							
							cl.css("transform","rotate("+dl+"deg)");
							cr.css("transform","rotate("+dr+"deg)");
							pn.text(Math.ceil(now));
						}
					});
				
				});
			
			}$(".charts").addClass("on");

		}
			
	
		$("#c1").mouseover(function(){
			$(".circle").stop().removeClass("spin");
			$(this).stop().addClass("spin");
			$("#p01").css("opacity","1");
		});
		$("#c2").mouseover(function(){
			$(".circle").stop().removeClass("spin");
			$(this).stop().addClass("spin");
			$("#p02").css("opacity","1");
		});
		$("#c3").mouseover(function(){
			$(".circle").stop().removeClass("spin");
			$(this).stop().addClass("spin");
			$("#p03").css("opacity","1");
		});
		$("#c4").mouseover(function(){
			$(".circle").stop().removeClass("spin");
			$(this).stop().addClass("spin");
			$("#p04").css("opacity","1");
		});
		
		$(".pursue").mouseleave(function(){
			$(".circle").removeClass("spin");
			$(".p").css("opacity","0");
		});
	
		$(".p_menu span").click(function(){
			$(".p_menu span").removeClass("on");
			$(this).addClass("on");
		});
	
		$(".right").click(function(){
			$(".web").css("left",0).animate({
				"left":"-100%"	
			},300);
			$(".psai").css("left","100%").animate({
				"left":0
			},300);
		});
		
		$(".left").click(function(){
			$(".psai").css("left",0).animate({
				"left":"100%"	
			},300);
			$(".web").css("left","-100%").animate({
				"left":0
			},300);
		});
		
		
});