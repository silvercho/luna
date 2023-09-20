interface NodeListOf<TNode> extends Array<TNode>{}

const navLiA:NodeListOf<HTMLElement> = document.querySelectorAll('#nav li a');
for(const item of navLiA){
  item.addEventListener('click',function(e:Event){

    const img_url = this.getAttribute('href');

    document.querySelector('#window img').setAttribute('src',img_url);
    
    for(const item of navLiA){
      item.classList.remove('active');
    }
    this.classList.add('active');
    e.preventDefault();
    //고유에 a href 기능인 링크 기능을 차단한다. - 링크금지
  })
}
