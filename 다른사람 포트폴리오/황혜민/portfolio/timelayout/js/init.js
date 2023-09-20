$( function () {  			

	setInterval(function(){
		
		var t = new Date();
		var h = t.getHours();
		var m = t.getMinutes();
		var s = t.getSeconds();
		
		if(h<10){
			h="0"+h;			
		}else{
			h=h;
		}
		
		if(m<10){
			m="0"+m;
		}else{
			m=m;
		}
	
		if(s<10){
			s="0"+s;
		}else{
			s=s;
		}
		
		
	
		$("#frontFrame p span").eq(0).text(h);
		$("#frontFrame p span").eq(1).text(m);
		$("#frontFrame p span").eq(2).text(s);
		
		
	},1000);

   
	
	var now = new Date();
	var hr = now.getHours();
   
	if(hr>=5 && hr<11){
		$("#wrap").removeClass();
		$("#wrap").addClass("morning");
	}else if(hr>=11 && hr<16){
		$("#wrap").removeClass();
		$("#wrap").addClass("afternoon");
	}else if(hr>=16 && hr<20){
		$("#wrap").removeClass();
		$("#wrap").addClass("evening");
	}else{
		$("#wrap").removeClass();
		$("#wrap").addClass("night");
	}
	
	$("#themeChange ul li a").click(function(){
		var clsName = $(this).attr("title");
		
		$("#wrap").removeClass();
		$("#wrap").addClass(clsName);
	});
   
} );

    
	


















