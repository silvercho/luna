$( function () {  			

    setInterval(function(){
		
		var now = new Date();
		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();
		
		
		if(hr<10){
			hr="0"+hr;		
		}
		if(min<10){
			min="0"+min;
		}
		if(sec<10){
			sec="0"+sec;
		}
		
		$("p span").eq(0).text(hr);	
		$("p span").eq(1).text(min);
		$("p span").eq(2).text(sec);
		
		
		
	},1000);
   
		$(window).on("load",function(){
			var t = new Date();
			var h = t.getHours();

			   if(h>=5 && h<11){
				   $("#wrap").addClass("morning");		   
			   }else if(h>=11 && h<16){
				   $("#wrap").addClass("afternoon");
			   }else if(h>=16 && h<20){
				   $("#wrap").addClass("evening");
			   }else{
				   $("#wrap").addClass("night");
			   }
		 }); 
		  


   
	
});

    		
		
















