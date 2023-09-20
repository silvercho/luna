interface NodeListOf<TNode> extends Array<TNode> {}

let k = 0;
const header = document.querySelector('header');
const gnbLi = document.querySelectorAll('.gnb>li');

function addOn(){
  header.classList.add('on');
  for(const item of gnbLi){
    item.classList.add('on');
  }
}

function removeOn(){
  header.classList.remove('on');
  for(const item of gnbLi){
    item.classList.remove('on');
  }
}

addEventListener('scroll',function(){
  if(pageYOffset > 0){
    addOn();
  } else {
    if(k === 0){
      removeOn();
    }
  }
})

for(const item of gnbLi){
  item.addEventListener('mouseenter',function(){
    addOn();
    k = 1;
  })
  item.addEventListener('mouseleave',function(){
    if(pageYOffset <= 100){
      removeOn();
    }
    k = 0;
  })
}