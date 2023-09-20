interface NodeListOf < TNode > extends Array < TNode > {};

const tabMenuLi = document.querySelectorAll('.tab_menu li');
const tabListUl = document.querySelectorAll('.tab_list ul');

for (let i = 0; i < tabMenuLi.length; i++) {
	tabMenuLi[i].addEventListener('click', function () {
		for (let i = 0; i < tabMenuLi.length; i++) {
			tabMenuLi[i].classList.remove('on');
			tabListUl[i].classList.remove('on');
		}
		tabMenuLi[i].classList.add('on');
		tabListUl[i].classList.add('on');
	})
}
