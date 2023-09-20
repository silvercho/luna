interface NodeListOf<TNode> extends Array<TNode> {}

const section = document.querySelectorAll('section');

addEventListener('resize',function(){
	for(const item of section){
		item.style.height = `${innerHeight}px`;
	//현재의 브라우저 높이값(innerHeight) 가져와서 컨텐츠영역(section)의 높이에 대입
	}
})
	//브라우저의 리사이즈 발생시 화면이 뒤틀리는 문제점해결

const e = document.createEvent('Event');
e.initEvent('resize',true,true);
dispatchEvent(e);
  //맨처음 강제로 리사이즈를 해줘서 처음한번실행

const menuLi = document.querySelectorAll('#menu li');


for(let i = 0 ; i < menuLi.length ; i ++){

	function scrollToAni(){
    let k = -90;

    const startScroll = pageYOffset;

    function scrollToAnimate() {
      if (k > 90) {
				k = 90;
			}

      const easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;
      const easeDown = ((Math.sin((k + 180) * Math.PI / 180)) + 1) / 2;

      scrollTo(0, startScroll*easeDown + i*innerHeight*easeUp); // scrollTo(x,y)

      k += 180 / (60 * 1.3);

      if (k > 90) {
        return clearInterval(id);
      }
    }

    const id = setInterval(scrollToAnimate,1000/60);

	}

	menuLi[i].addEventListener('click',function(e){
		scrollToAni();
		e.preventDefault();
	})
}

addEventListener('scroll',function(){
	for (let i = 0 ; i < 4 ; i ++){
		if(pageYOffset >= innerHeight * i && pageYOffset < innerWidth * (i+1)){
			for(const item of menuLi){
				item.classList.remove('on');
			}
			menuLi[i].classList.add('on');
		}
	}
})

	

let slideAniStatus = 0;

function slideAnimation(to){

	let k = -90;

	const startScroll = pageYOffset;

	function scrollToAnimate() {
		if (k >= 0){
			k = 0;
		}

		const easeUp = (Math.sin(k * Math.PI / 180)) + 1;
		const easeDown = (Math.sin((k + 180) * Math.PI / 180));


		scrollTo(0, startScroll*easeDown + to*easeUp); // scrollTo(x,y)

		k += 90 / (60 *.65);

		if (k > 0) {
			return clearInterval(id);
		}

	}

	const id = setInterval(scrollToAnimate,1000/60);
}


function bouncing(plusMinus){
	let k = 0;

	const startScroll = pageYOffset;

	function bouncingAnimate() {
		if (k >= 180){
			k = 180;
		}

		const bounceDown = Math.round(plusMinus*(Math.abs(Math.sin((k * Math.PI / 180 + 2.26)**1.4)/((k * Math.PI / 180 + 2.26)**2)) * 1500 - 48));

		scrollTo(0, startScroll + bounceDown); // scrollTo(x,y)

		k += 180 / (60 *.65);

		if (k > 180) {
			return clearInterval(id);
		}

	}

	const id = setInterval(bouncingAnimate,1000/60);
}



for(const item of section){
	item.addEventListener('wheel',function(e){

		if(e.deltaY < 0){
			if(this.previousElementSibling){
				if(slideAniStatus === 0){
					slideAniStatus = 1;
					const prev = pageYOffset + this.previousElementSibling.getBoundingClientRect().top;
					slideAnimation(prev);
					setTimeout(function(){
						bouncing(1)
					},700);
					setTimeout(function(){
						slideAniStatus = 0;
					},1400);
				}
			}
		}
		if(e.deltaY > 0){
			if(this.nextElementSibling){
				if(slideAniStatus === 0){
					slideAniStatus = 1;
					const next = pageYOffset + this.nextElementSibling.getBoundingClientRect().top;
					slideAnimation(next);
					setTimeout(function(){
						bouncing(-1)
					},700);
					setTimeout(function(){
						slideAniStatus = 0;
					},1400);
				}
			}
		}

		e.preventDefault();
	})
}
	



for(const item of section){
	item.addEventListener('mousemove',function(e){

		function parallax(obj,rightStart,rightTimes,bottomStart,bottomTimes){
			const objElement = document.querySelector(obj);
			objElement.style.right = `${rightStart + (e.pageX * rightTimes)}px`
			objElement.style.bottom = `${bottomStart + (e.pageY * bottomTimes)}px`
		}

		 //1페이지
		parallax('.p11', 20 ,-1/30, 20, -1/30);
		parallax('.p12', 130 ,1/20, -40, 1/20);
		const p13:HTMLElement = document.querySelector('.p13');
		p13.style.right = `${60 + e.pageX * 1/20}px`;
		p13.style.top = `${180 + e.pageY * 1/20}px`;

		//2페이지
		parallax('.p21', -180 ,-1/30, -480, -1/30);
		parallax('.p22', 130 ,1/50, -40, 1/50);

		//3페이지
		parallax('.p31', 280 ,-1/30, 30, -1/30);
		parallax('.p32', 110 ,1/20, -270, 1/20);
		parallax('.p33', -70 ,1/20, -130, 1/20);

		//4페이지
		parallax('.p41', 20, -1/30, -120, -1/30);
		parallax('.p42', 0 , -1/20, -180, -1/20);
	})
}


   
