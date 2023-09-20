const sub = document.querySelector('.sub');

document.querySelector('.gnb>li>a').addEventListener('click',function(){
	!(sub.classList.contains('on')) ? sub.classList.add('on') : sub.classList.remove('on');
})
