$( function () {  			
	setInterval(function(){
		var now = new Date();
		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();
		
		if(hr<10){
			hr = "0"+hr;
		}
		
		if(min<10){
			min = "0"+min;
		}
		
		if(sec<10){
			sec = "0"+sec;			
		}
		
		$("p span").eq(0).text(hr);
		$("p span").eq(1).text(min);
		$("p span").eq(2).text(sec);
		
		
	},1000);
	
	var now = new Date();
	var hr = now.getHours();
	
	/*테마 변경 함수*/
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
} );

    
	


















