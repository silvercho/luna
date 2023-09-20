$(function(){

	$(window).resize(function(){
		var h = $(window).height();
		$(".section").height(h);
		$("#contact").height(h);
	});
	
	$(window).trigger("resize");

	//mouse move _ circle_item
	
	var moveForce = 30; // max popup movement in pixels
	var rotateForce = 20; // max popup rotation in deg

	$(document).mousemove(function(e) {
		var docX = $(document).width();
		var docY = $(document).height();
		
		var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
		var moveY = (e.pageY - docY/3) / (docY/3) * -moveForce;
		
		var rotateY = (e.pageX / docX * rotateForce*1) - rotateForce*10;
		var rotateX = (e.pageY / docY * rotateForce*2) - rotateForce;
		
		$('#items').css({
			'left': moveX+'px',
			'top': moveY+'px',
			'transform':'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'
		});
	
	});
	
	/*section_scroll*/
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		
		var off1 = $(".work_wrap").offset().top;
		var off2 = $(".design_wrap").offset().top;
		var off3 = $(".blank_box").offset().top;
		var off4 = $("#contact").offset().top;
		//console.log(off1);
		
		
		if(sct < off1){
			$("#content .art_box").removeClass("on");
		}else if(sct >=off1 && sct < off2){
			$("#content .art_box").removeClass("on");
			$("#content .art_box").eq(0).addClass("on");
			$(".art_box .section_name").eq(0).addClass("on");
			$(".section_cover .menu_cover").addClass("on"); 	
		}else if(sct >=off2 && sct < off3){
			$("#content .art_box").removeClass("on");
			$("#content .art_box").eq(1).addClass("on");
			$(".art_box .section_name").eq(1).addClass("on");
			$(".art_box .section_name").eq(0).addClass("on");
			$(".section_cover .menu_cover").addClass("on");
		}else if(sct >=off3  &&  sct < off4){
			$(".section_cover  .menu .menu_cover").addClass("on");
			$("#content .art_box").eq(1).removeClass("on");
			$(".card_cover .card_inner").removeClass("on");
		}else if(sct >=off4){
			$(".card_cover .card_inner").addClass("on");
			$("#content .art_box").eq(1).removeClass("on");
			$(".art_box .section_name").eq(1).removeClass("on");
		}
		
	});
	
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		var off0 =  $("#about").offset().top;
		var off1 = $("#skill").offset().top;
		
		var wooaoo = ($("#main").height()+$("#about").height()+$("#skill").height()+$(".section_cover").height())-$(window).height();
		
		
		if(sct < off0){$(".section_cover .menu_cover").removeClass("on");}
		
		if(sct >= off0){
			$("#about .intro").eq(0).addClass("on");
			$("#about .intro .intro_name svg").addClass("on");
			$("#about .picture").addClass("on");
			$("#about .art_board").addClass("on");
			$(".section_cover .menu_cover").addClass("on");
		}
		
		if(sct >= off1){
			$(".skill_inner").addClass("on");
		}
		
		if(sct > wooaoo){
			$("#content").css("top",-(sct-wooaoo));			
		}else{
			$("#content").css("top",0);	
		}
	});
	
	/*menu_click*/
	$(".m_icon .fa-bars").click(function(){
		$(".ph_menu").fadeIn(500);
		$(".m_icon .fa-bars").css("display","none");
	});
	$(".ph_menu .fa-times").click(function(){
		$(".ph_menu").fadeOut(500);
		$(".m_icon .fa-bars").css("display","block");
	});
	$(".ph_menu").mouseleave(function(){
		$(".ph_menu").fadeOut(1000);
		$(".m_icon .fa-bars").css("display","block");
	});
	
	
	/*
	$("#wrap .section").mousewheel(function(event,d){
		var i = $(this).index();
		
		if(d>0){
			if(i==0) return;
			var off = $(this).prev().offset().top;
		}else if(d<0){
			if(i==3) return;
			var off = $(this).next().offset().top;
		}
		
		$("html,body").stop().animate({
			"scrollTop":off
		},600);
		console.log(i);
	});
		
	*/
	/*section_hover*/

	$(".work_item").mouseover(function(){
		var bg = $(this).attr("data-hover");
		var wt = $(this).find(".work_item_inner");
		
		$(bg).stop().fadeIn(500);
		$(wt).stop().fadeIn(500);
		$(".art_opacity").stop().fadeIn(400);
	});
	
	$(".work_item").mouseleave(function(){
		var bg = $(this).attr("data-hover");
		var wt = $(this).find(".work_item_inner");
		
		$(bg).stop().fadeOut(400);
		$(wt).stop().fadeOut(400);
		$(".art_opacity").stop().fadeOut(400);
	});

	
	
});


