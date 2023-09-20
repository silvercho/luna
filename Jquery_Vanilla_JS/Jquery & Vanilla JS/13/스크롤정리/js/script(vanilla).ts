interface NodeListOf<TNode> extends Array<TNode> {}

scrollTo(0,0);

const contents:NodeListOf<HTMLElement> = document.querySelectorAll('section div');
const menu = document.querySelectorAll('nav ul li');
const fdiv = document.querySelectorAll('#floatdiv>ul>li');
const floatdiv:HTMLElement = document.querySelector('#floatdiv');
const dtop = floatdiv.getBoundingClientRect().top;

addEventListener('resize',function(){
	for(const item of contents){
		item.style.height = `${innerHeight}px`;
	}
	//높이를구한 innerHeight를  contents 대입
	//  contents 각각에   ex) 934를 700대신 입력
})

const e = document.createEvent('Event');
e.initEvent('resize',true,true);
dispatchEvent(e); //시작시 강제로 resize를 실행

let as = [];

for(let i = 0 ; i < contents.length ; i ++){
	as.push(
		contents[i].getBoundingClientRect().top
		)
}

console.log(as);

const sTop:HTMLElement = document.querySelector('#sTop');
const nav = document.querySelector('nav');

addEventListener('scroll',function(e){
	sTop.innerText = `${pageYOffset}`;
	if(pageYOffset > 100){
		nav.classList.add('fixed');
	} else {
		nav.classList.remove('fixed');
	}

	floatdiv.style.transition = 'top 1s';
	floatdiv.style.top = `${pageYOffset+dtop}px`;

	for(let i = 0 ; i < contents.length ; i ++){
		if(pageYOffset >= as[i]){
			for(let i = 0 ; i < contents.length ; i ++){
				menu[i].classList.remove('on');
				fdiv[i].classList.remove('on');
			}
			menu[i].classList.add('on');
			fdiv[i].classList.add('on');
		}
	}

	e.preventDefault();
})


for(let i = 0 ; i < contents.length ; i ++){

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

	menu[i].addEventListener('click',function(e){
		scrollToAni();
		e.preventDefault();
	})

	fdiv[i].addEventListener('click',function(e){
		scrollToAni();
		e.preventDefault();
	})
}



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

		k += 90 / (60 *.5);

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
		// https://cdn.discordapp.com/attachments/517616714318479364/774204100602363904/bounceFunction.png

		scrollTo(0, startScroll + bounceDown); // scrollTo(x,y)

		k += 180 / (60 *.5);

		if (k > 180) {
			return clearInterval(id);
		}

	}

	const id = setInterval(bouncingAnimate,1000/60);
}



for(const item of contents){
	item.addEventListener('wheel',function(e){

		if(e.deltaY < 0){
			if(this.previousElementSibling){
				if(slideAniStatus === 0){
					slideAniStatus = 1;
					const prev = pageYOffset + this.previousElementSibling.getBoundingClientRect().top;
					slideAnimation(prev);
					setTimeout(function(){
						bouncing(1)
					},600);
					setTimeout(function(){
						slideAniStatus = 0;
					},1200);
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
					},600);
					setTimeout(function(){
						slideAniStatus = 0;
					},1200);
				}
			}
		}

		e.preventDefault();
	})
}
	









