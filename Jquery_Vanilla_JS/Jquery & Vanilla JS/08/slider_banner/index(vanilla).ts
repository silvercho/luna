interface NodeListOf<TNode> extends Array<TNode> {}

const aLi = document.querySelectorAll('.a li');
const bLi = document.querySelectorAll('.b li');

for(let i = 0 ; i < aLi.length ; i ++){
  aLi[i].addEventListener('click',function(){

    for(const item of aLi){
      item.classList.remove('on');
    }

    this.classList.add('on');

    for(const item of bLi){
      item.classList.remove('on');
    }

    bLi[i].classList.add('on');
    
  })
}