interface NodeListOf < TNode > extends Array < TNode > {};

const gnbLi: NodeListOf < HTMLElement > = document.querySelectorAll('#gnb li');

for (const item of gnbLi) {
  item.addEventListener('click', function () {
    for (const item of gnbLi) {
      item.style.color = 'black';
    }
    this.style.color = 'red';
    ( < HTMLElement > this.parentElement.previousElementSibling).style.color = 'red';
  })
}
