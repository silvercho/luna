interface NodeListOf < TNode > extends Array < TNode > {};

const gnbLiA = document.querySelectorAll('.gnb>li>a');
for (const item of gnbLiA) {
  item.addEventListener('click', function () {
    const bbb = this.nextElementSibling.classList.contains('on');
    if (!bbb) {
      const allSub = document.querySelectorAll('.sub');
      for (const item of allSub) {
        item.classList.remove('on');
      }
      this.nextElementSibling.classList.add('on');
    } else {
      this.nextElementSibling.classList.remove('on');
    }
  })
}
