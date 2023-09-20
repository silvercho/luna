interface NodeListOf<TNode> extends Array<TNode> {}

const dd = document.querySelector('.dd');
const right = document.querySelector('.right');
const sub = document.querySelectorAll('.sub');
const ulGnbLi = document.querySelectorAll('ul.gnb>li');
const header = document.querySelector('header');
const shadow = document.querySelector('.shadow');

function gnbOn(){
	dd.classList.add('on');
	right.classList.add('on');

	for(const item of sub){
		item.classList.add('on');
	}

	for(const item of ulGnbLi){
		item.classList.add('on');
	}

	header.classList.add('on');
	shadow.classList.add('on');
}

function gnbOff(){
	dd.classList.remove('on');
	right.classList.remove('on');

	for(const item of sub){
		item.classList.remove('on');
	}

	for(const item of ulGnbLi){
		item.classList.remove('on');
	}

	header.classList.remove('on');
	shadow.classList.remove('on');
}

dd.addEventListener('click',function(){
	if(!(this.classList.contains('on'))){
		gnbOn()
	} else {
		gnbOff()
	}
})

for(const item of ulGnbLi){
	item.addEventListener('click',function(){
		if(!(this.classList.contains('on'))){
			gnbOn()
		}
	})
}

header.addEventListener('mouseleave',function(){
	gnbOff();
})




const visual:NodeListOf<HTMLElement> = document.querySelectorAll('#brandVisual>ul>li'); // 큰사진 li
const button = Array.apply(null,document.querySelectorAll('#buttonList>li')); // 블릿(버튼)li
// button에 쓸 indexOf 함수는 노드 리스트 형식이 아닌 단순 배열 형식에서만 가능하므로 단순 배열로 변환
const num1:HTMLElement = document.querySelector('.num1');

let current = 0;
let intervalState = 0;
let k = 0;
let i = 0;

for(i = 0 ; i < button.length ; i ++){
	button[i].addEventListener('click',function(e){
		i = button.indexOf(this);
		buttonOn();
		move('left_100','left100','left0');
		e.preventDefault();
	})
}

if (i === button.length) i = 0;

function buttonOn(){
	for(const item of button){
		item.classList.remove('on');
	}
	button[i].classList.add('on');
	k = i + 1;
	num1.innerHTML = `${k}&nbsp`;
}

timer();
function timer(){
	intervalState = setInterval(function(){
		let n = current + 1;
		//length==갯수 (6)
		if(n === visual.length){
			n = 0;
		}

		let e = document.createEvent('Event');
		e.initEvent('click',true,true);
		button[n].dispatchEvent(e);
		// 강제로 인덱스번호 n값을 누른다.(컴퓨터가 누름)
	},2000);
}
	
	function move(cuTo,neFrom,neTo){
		if(current === i) return;
		const cu = visual[current];
		const ne = visual[i];
		
		cu.style.transition = 'left .3s';
		cu.className = cuTo;
		setTimeout(function(){
			cu.style.transition = 'none';
		},300);

		ne.className = neFrom;
		setTimeout(function(){
			ne.style.transition = 'left .3s';
			ne.className = neTo;
		},50)

		current = i;
	}
	
const brandVisualUl = document.querySelector('#brandVisual ul');
const buttonList = document.querySelector('#buttonList');

	brandVisualUl.addEventListener('mouseenter',function(){
		clearInterval(intervalState);
	})

	buttonList.addEventListener('mouseenter',function(){
		clearInterval(intervalState);
	})

	brandVisualUl.addEventListener('mouseleave',function(){
		timer();
	})

	buttonList.addEventListener('mouseleave',function(){
		timer();
	})

	document.querySelector('.next').addEventListener('click',function(e){
		i ++;
		if(i === 6) i = 0;
		buttonOn();
		move('left_100','left100','left0');
		e.preventDefault();
	})

	document.querySelector('.prev').addEventListener('click',function(e){
		i --;
		if(current === 0) i = 5;
		buttonOn();
		move('left100','left_100','left0');
		e.preventDefault();
	})

	document.querySelector('.play').addEventListener('click',function(e){
		if(this.classList.contains('on')){
			this.classList.remove('on');
			timer();
		} else {
			this.classList.add('on');
			clearInterval(intervalState);
		}
		e.preventDefault();
	})
