/*버튼 연결 - nav.js*/
$( function () {
    $("#themeChange ul li a").click(function(){
	
		var clsName = $(this).attr("title");
		
		$("#wrap").removeClass().addClass(clsName);
		//alert(clsName);
	});
} );

