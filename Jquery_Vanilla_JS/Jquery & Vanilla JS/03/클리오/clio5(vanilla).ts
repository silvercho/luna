interface NodeListOf<TNode> extends Array<TNode>{}

const tabLi = document.querySelectorAll('.tab>li');

for(const item of tabLi){
  item.addEventListener('click',function(){
    if(getComputedStyle(this.children[1]).display === 'none'){
      
      const tab1 = document.querySelectorAll('.tab1');
      const bestmenu = document.querySelectorAll('.bestmenu');
      const underline = document.querySelectorAll('.underline');

      for(let i = 0 ; i < tab1.length ; i++){
        tab1[i].classList.remove('on');
        bestmenu[i].classList.remove('on');
        underline[i].classList.remove('on');
      }

      this.children[1].classList.add('on');
      this.children[0].classList.add('on');
      this.children[0].children[0].classList.add('on');

    }
  })
}
