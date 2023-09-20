interface NodeListOf<TNode> extends Array<TNode>{}

const gnbLiA = document.querySelectorAll('.gnb>li>a');

for(const item of gnbLiA){
  item.addEventListener('mouseenter',function(){
    this.nextElementSibling.style.maxHeight = '200px';
    this.nextElementSibling.style.borderWidth = '1px';
  })

  item.addEventListener('mouseleave',function(){
    this.nextElementSibling.style.maxHeight = '0px';
    this.nextElementSibling.style.borderWidth = '0px';
  })
}

  let i = 2;

  function slideInt(){
    const ads:NodeListOf<HTMLElement> = document.querySelectorAll('.ad1, .ad2, .ad3');
    ads[0].style.top = `${300 - (i * 300)}px`;
    ads[1].style.top = `${600 - (i * 300)}px`;
    ads[2].style.top = `${900 - (i * 300)}px`;
    i++;
    if (i === 4) i = 1;
  }
  setInterval(slideInt, 3000);

  const section2BBSUlLi:NodeListOf<HTMLElement> = document.querySelectorAll('.section2BBS>ul>li');
  const section2BBSUlLiUl:NodeListOf<HTMLElement> = document.querySelectorAll('.section2BBS>ul>li>ul');

  for(const item of section2BBSUlLi){
    item.addEventListener('click',function(){
      
      for(const item of section2BBSUlLiUl){
        item.style.display = 'none';
        (<HTMLElement>this.lastElementChild).style.display = 'block';
        
        for(const item of section2BBSUlLi){
          item.style.borderBottom = '3px solid #dfdfdf';
          this.style.borderBottom = '3px solid #222328';
        }
      }
    })
  }
