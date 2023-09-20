
$(function(){
   	
/***********************성남 도서관*************************/
	$(".events span").click(function(){
		$(this).children("ul").slideToggle();
	});
/***********************사이드 메뉴*************************/
	$("ul.main_menu li").click(function(){
		var i = $(this).index();
		$(".sub_wrap ul").eq(i).css("display","block");
		
		$(this).addClass("on");
	});
	
	$(".sub_wrap ul .remove").click(function(){
		$(this).parents("ul").css("display","none");
		
		var i = $(this).parents("ul").index();
		$("ul.main_menu li").eq(i).removeClass("on");
	});
/***********************팝업창*************************/
	$(".login").click(function(){
		$(".login_pop").css("display","block");
		$("html").css("overflow","hidden");

	});
	$(".alarm a").click(function(){
		$(".login_pop").css("display","block");
		$("html").css("overflow","hidden");
		alert("로그인 후 이용 바랍니다.")
	});
	$(".close").click(function(){
		$(".pop_wrap").css("display","none");
		$("html").css("overflow-y","scroll");
	});
/**********************사이드 팝업*************************/	
	$(document).scroll(function(){
		var sct = $(window).scrollTop();
		$("#closed_day").css({top:100+sct});
	});
	
	var m = $(".month > ul > li.on_month").index();
	$("#closed_day .next").click(function(){
		m++;
		
		if(m>=12){
			m=0;
		}
		
		$(".month > ul > li").eq(m-1).css({"left":"100"});		
		$(".month > ul > li").removeClass("on_month");
		$(".month > ul > li").eq(m).addClass("on_month");
			console.log(m);
	});
	
	$("#closed_day .prev").click(function(){
		m--;
		
		if(m<=-1){
			m=11;	
		}
		$(".month > ul > li").eq(m+1).css({"left":"100"});	
		$(".month > ul > li").removeClass("on_month");
		$(".month > ul > li").eq(m).addClass("on_month");
		
			console.log(m);
	});

/**********************모바일 메뉴************************/		
	$(".m_menu").click(function(){
		$(".fixed_left").toggleClass("menu_on");
	});
	
/**********************오늘하루보지않기 팝업************************/	
	
	function couponClose(){
		if($("input[name='chkbox']").is(":checked") ==true){
			setCookie("close","Y",1);
		}
		$(".notice_pop").hide();
	}
	$(document).ready(function(){
		cookiedata = document.cookie;
		if(cookiedata.indexOf("close=Y")<0){
			$(".notice_pop").show();
		}else{
			$(".notice_pop").hide();
		}
		$(".close").click(function(){
			couponClose();
		});	
	});

	
	
	
	
	
	
});




