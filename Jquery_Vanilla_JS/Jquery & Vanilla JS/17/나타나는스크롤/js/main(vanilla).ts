const gap = 300;

const areas = document.querySelectorAll('.container > div');

const tops = [];

for(let i = 0 ; i < areas.length ; i ++){
	tops.push(areas[i].getBoundingClientRect().top);
	console.log(tops[i]);
}

const titleSpan:HTMLElement = document.querySelector('.title span');

addEventListener('scroll',function(){
	titleSpan.innerText = `${pageYOffset}`;

	for(let i = 0 ; i < areas.length - 1 ; i++){
		if(tops[i] - gap <= pageYOffset && pageYOffset < tops[i+1] - gap){
			areas[i].classList.add('on');
		}
	}

	if(tops[4] - gap <= pageYOffset){
		areas[4].classList.add('on');
	}
})