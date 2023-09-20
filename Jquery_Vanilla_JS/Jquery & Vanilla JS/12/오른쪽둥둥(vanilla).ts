interface NodeListOf<TNode> extends Array<TNode>{}

const article = document.querySelectorAll('article');
const fdiv:HTMLElement = document.querySelector('#fdiv');

const scv:HTMLElement = document.querySelector('.scv')

const header = document.querySelector('header');
const texts = document.querySelectorAll('.text1, .text2, .text3');


addEventListener('resize',function(){
  for(const item of article){
    item.style.height = `${innerHeight}px`;
  }
})
const e = document.createEvent('Event');
e.initEvent('resize',true,true);
dispatchEvent(e);

const dTop = fdiv.getBoundingClientRect().top;

addEventListener('scroll',function(){
  //스크롤의 위치(pageYOffset)

  scv.innerText = `${pageYOffset}`;
  
  if(pageYOffset >= 100){
    header.classList.add('fixed');
    texts[0].classList.add('on');
  } else {
    header.classList.remove('fixed');
    texts[0].classList.remove('on');
  }

  if(pageYOffset >= 700 && pageYOffset < 1000){
    texts[1].classList.add('on');
  } else {
    texts[1].classList.remove('on');
  }

  if(pageYOffset >= 1000 && pageYOffset < 1500){
    texts[2].classList.add('on');
  } else {
    texts[2].classList.remove('on');
	}
	
	fdiv.style.transition = 'top 1s';
	fdiv.style.top = `${pageYOffset+dTop}px`;

})



	for(let i = 0 ; i < article.length ; i ++){
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
	
	
				k += 180 / 60;
	
				if (k > 90) {
					return clearInterval(id);
				}
			}
	
			const id = setInterval(scrollToAnimate,1000/60);
		}

		const fdivUlLi = document.querySelectorAll('#fdiv ul li');

		fdivUlLi[i].addEventListener('click',function(){
			scrollToAni();
			for(const item of fdivUlLi){
				item.classList.remove('on');
			}
			this.classList.add('on');
		})
	}
	