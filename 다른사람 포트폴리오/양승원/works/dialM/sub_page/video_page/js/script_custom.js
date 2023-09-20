$(document).ready(function(){
	

	
	$("#m_menu_btn").click(function(){
		$("#m_menu").stop().fadeIn(600);
	});
	$("#m_menu .mobile_close_btn").click(function(){
		$("#m_menu").stop().fadeOut(600);
	});
	$(window).resize(function(){
		var window_width = $(window).width();
		if(window_width>=800){
			$("#m_menu").hide();
		}
	});
});