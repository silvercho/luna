interface NodeListOf<TNode> extends Array<TNode> {}

const dd = document.querySelectorAll('dd');
const dt = document.querySelectorAll('dt');
let onTab = dt[0];

function ddHide(){
	for(const item of dd){
		item.style.display = 'none';
	}
}

ddHide();
dd[0].style.display = 'block';

function srcChange(obj,from,to){
	const imgcg = obj.querySelector('img').getAttribute('src').replace(from,to);
	obj.querySelector('img').setAttribute('src',imgcg);
}

for(const item of dt){
	item.addEventListener('click',function(){
		ddHide();
		(<HTMLElement>this.nextElementSibling).style.display = 'block';

		srcChange(onTab,'over','out');
		srcChange(this,'out','over');

		onTab = this;
	})
}