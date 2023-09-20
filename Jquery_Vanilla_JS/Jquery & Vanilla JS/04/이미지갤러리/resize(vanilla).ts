interface NodeListOf<TNode> extends Array<TNode> {}

addEventListener('resize',function(){
  const articles = document.querySelectorAll('article');
  for(const item of articles){
    item.style.height = `${innerHeight}px`;
  }
})

const e = document.createEvent('Event');
e.initEvent('resize',true,true);
dispatchEvent(e);

