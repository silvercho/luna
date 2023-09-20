interface NodeListOf<TNode> extends Array<TNode> {}

const sub:NodeListOf<HTMLElement> = document.querySelectorAll('.sub');

function slideUp(){
	for(const item of sub){
		item.style.height = '0px';
	}
}

document.querySelector('.m_btn a').addEventListener('click',function(){
	const menuRight = getComputedStyle(document.querySelector('.m_menu')).right;
	if(menuRight === '-150px'){
		document.querySelector('.m_btn a').classList.add('on');
		document.querySelector('.m_menu').classList.add('on');
	} else {
		document.querySelector('.m_btn a').classList.remove('on');
		document.querySelector('.m_menu').classList.remove('on');
		slideUp();
	}
})

slideUp();

const menuLiA = document.querySelectorAll('.m_menu>li>a');
for(const item of menuLiA){
	item.addEventListener('click',function(){
		const subHeight = getComputedStyle(this.nextElementSibling).height;
		if(subHeight === '0px'){
			slideUp();
			this.nextElementSibling.style.height = '120px';
		} else {
			this.nextElementSibling.style.height = '0px';
		}
	})
}
