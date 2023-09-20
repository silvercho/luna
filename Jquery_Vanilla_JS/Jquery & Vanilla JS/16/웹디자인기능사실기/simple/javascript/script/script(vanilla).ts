interface NodeListOf<TNode> extends Array<TNode>{}

const navLi = document.querySelectorAll('.nav>li');

for(let i = 1 ; i < 3 ; i ++){
	navLi[i].addEventListener('mouseenter',function(){
		this.lastElementChild.classList.add('on');
	})
	navLi[i].addEventListener('mouseleave',function(){
		this.lastElementChild.classList.remove('on');
	})
}

const imgs = 2;
let now = 0;
const imgsImg = document.querySelectorAll('.imgs>img');

const start = () => {
	for(let i = 1 ; i < imgsImg.length ; i++){
		imgsImg[i].className = 'marginLeft2000';
	}
	setInterval(slide,2000);
}

start();

function slide(){
	now = (now === imgs ? 0 : now += 1);
	if(now === 0){
		imgsImg[imgsImg.length - 1].className = 'marginLeft2000';
	} else {
		imgsImg[now - 1].className = 'marginLeft2000';
	}
	imgsImg[now].className = 'marginLeft0'
}

const as = document.querySelectorAll('a');

for(const item of as){
	item.addEventListener('focusin',function(){
		this.style.color = '#f00';
	})
	item.addEventListener('focusout',function(){
		this.style.color = 'inherit';
	})
}

const modal = document.querySelector('#modal');

const partnerImg = document.querySelectorAll('.partner img');

for(const item of partnerImg){
	item.addEventListener('click',function(){
		modal.classList.add('active');
	})
}

document.querySelector('#modal button').addEventListener('click',function(){
	modal.classList.remove('active');
})
