interface NodeListOf<TNode> extends Array<TNode>{}

const gnbLi = document.querySelectorAll('#gnb li');

for(const item of gnbLi){
  item.addEventListener('mouseenter',function(){
    this.lastElementChild.style.maxHeight = '200px';
  })

  item.addEventListener('mouseleave',function(){
    this.lastElementChild.style.maxHeight = '0px';
  })
}
