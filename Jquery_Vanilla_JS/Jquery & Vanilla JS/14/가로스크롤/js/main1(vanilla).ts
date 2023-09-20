interface NodeListOf<TNode> extends Array<TNode> {}

const contents:NodeListOf<HTMLElement> = document.querySelectorAll('.section');
const wrap:HTMLElement = document.querySelector('#wrap');

addEventListener('resize',function(){
	for(const item of contents){
		item.style.height = `${innerHeight}px`;
		item.style.width = `${innerWidth}px`;
	}
	wrap.style.height = `${innerHeight}px`;
})

const e = document.createEvent('Event');
e.initEvent('resize',true,true);
dispatchEvent(e);

const left1 = pageXOffset + contents[0].getBoundingClientRect().left;


function scrollToAni(to){
	let k = -90;

	const startScroll = pageXOffset;

	function scrollToAnimate() {
		if (k > 90) {
			k = 90;
		}

		const easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;
		const easeDown = ((Math.sin((k + 180) * Math.PI / 180)) + 1) / 2;

		scrollTo(startScroll*easeDown + to*easeUp, 0); // scrollTo(x,y)

		k += 180 / (60 * 1.3);

		if (k > 90) {
			return clearInterval(id);
		}
	}

	const id = setInterval(scrollToAnimate,1000/60);

}

document.querySelector('.top_logo').addEventListener('click',function(e){
	scrollToAni(left1);
	e.preventDefault();
})

const lnbLi = document.querySelectorAll('.lnb > li');

for(let i = 0 ; i < lnbLi.length ; i ++){
	lnbLi[i].addEventListener('click',function(e){
		const nowLeft = i * innerWidth;
		scrollToAni(nowLeft);
		e.preventDefault();
	})

}
	


let slideAniStatus = 0;

function slideAnimation(to){

	let k = -90;

	const startScroll = pageXOffset;

	function scrollToAnimate() {
		if (k >= 0){
			k = 0;
		}

		const easeUp = (Math.sin(k * Math.PI / 180)) + 1;
		const easeDown = (Math.sin((k + 180) * Math.PI / 180));


		scrollTo(startScroll*easeDown + to*easeUp, 0); // scrollTo(x,y)

		k += 90 / (60 *.65);

		if (k > 0) {
			return clearInterval(id);
		}

	}

	const id = setInterval(scrollToAnimate,1000/60);
}


function bouncing(plusMinus){
	let k = 0;

	const startScroll = pageXOffset;

	function bouncingAnimate() {
		if (k >= 180){
			k = 180;
		}

		const bounceDown = Math.round(plusMinus*(Math.abs(Math.sin((k * Math.PI / 180 + 2.26)**1.4)/((k * Math.PI / 180 + 2.26)**2)) * 1500 - 48));

		scrollTo(startScroll + bounceDown, 0); // scrollTo(x,y)

		k += 180 / (60 *.65);

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
					const prev = pageXOffset + this.previousElementSibling.getBoundingClientRect().left;
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
					const next = pageXOffset + this.nextElementSibling.getBoundingClientRect().left;
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
	
	
	



