interface NodeListOf < TNode > extends Array < TNode > {};

const tabMenuLi = document.querySelectorAll('.tab_menu li');
const tabListUl = document.querySelectorAll('.tab_list ul');

for (let i = 0; i < tabMenuLi.length; i++) {
  tabMenuLi[i].addEventListener('click', function () {
    tabMenuLi[i].classList.add('on');
    tabListUl[i].classList.add('on');
  })
}