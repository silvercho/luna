interface NodeListOf<TNode> extends Array<TNode> {}

const gnbLiA = document.querySelectorAll('.gnb li a');
for(const item of gnbLiA){
  
  function change(from,to){
    const imgcg = item.querySelector('img').getAttribute('src').replace(from,to);
    //menu01_from.png - menu01_to.png 파일명만 바꾼다.
    item.querySelector('img').setAttribute('src', imgcg);
  }

  item.addEventListener('mouseenter',function(){
    change('out','over');
  });

  item.addEventListener('mouseleave',function(){
    change('over','out');
  });
  
}
