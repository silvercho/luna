interface NodeListOf<TNode> extends Array<TNode>{}

const content:HTMLElement = document.querySelector('.skills');
const charts = content.querySelectorAll('.skill');

addEventListener('scroll',function(){
	if(pageYOffset > 1500){
		zPercent();
	}
	if(600 < pageYOffset && pageYOffset < 1500){
		aPercent();
	}
})

const percentDatas = [];

for(const item of charts){
	percentDatas.push((<HTMLElement>item.querySelector('.skill_p .num')).innerText)
	// percentData 입력값들을 배열에 저장
}
	
console.log(percentDatas);





function aPercent(){
	if(!(content.classList.contains('active'))){
		content.style.transition = 'left 1.2s';
		content.style.left = '50%';

		for(let i = 0 ; i < charts.length ; i ++){
			const chart = charts[i];
			const chartBar:HTMLElement = chart.querySelector('.skill_g');
			chartBar.style.width = '0%';
			//챠트바의 넓이 0
			const percentNumber:HTMLElement = chart.querySelector('.skill_p .num');
			// html  지정한 퍼센트 숫자를 $percentNumber 대입
			const percentData = percentDatas[i];
			// 배열에 저장해 둔 percentData 입력값을 지정
			percentNumber.innerText = '0';

			percent();

			function percent(){
				let k = -90;
			
				function percentAnimate() {
					if (k > 90) {
						k = 90;
					}
			
					const easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;
			
					const now = percentData*easeUp;
			
					chartBar.style.width = `${now}%`;
					percentNumber.innerText = `${Math.floor(now)}`;
					//글씨가 0 부터 now까지 증가

					k += 180 / (60 * 3);
			
					if (k > 90) {
						return clearInterval(id);
					}
				}
				const id = setInterval(percentAnimate,1000/60);
			}
		}
	}

	content.classList.add('active');
	content.classList.remove('unactive');
}
	
function zPercent(){
	if(!(content.classList.contains('unactive'))){
		for(let i = 0 ; i < charts.length ; i ++){
			const chart = charts[i];
			const chartBar:HTMLElement = chart.querySelector('.skill_g');
			chartBar.style.width = '0%';
			//챠트바의 넓이 0
		}
	}
	content.classList.remove('active');
	content.classList.add('unactive');
}
	
	
	



	