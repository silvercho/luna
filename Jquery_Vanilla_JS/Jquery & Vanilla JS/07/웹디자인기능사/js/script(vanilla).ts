interface NodeListOf<TNode> extends Array<TNode>{}

const gnbLiA = document.querySelectorAll('.gnb>li>a');

for(const item of gnbLiA){
(<HTMLElement>item.nextElementSibling).style.transition = 'max-height .25s, border-width .25s';

  item.addEventListener('mouseenter',function(){
    this.nextElementSibling.style.maxHeight = '200px';
    this.nextElementSibling.style.borderWidth = '1px';
  })

  item.addEventListener('mouseleave',function(){
    this.nextElementSibling.style.maxHeight = '0px';
    this.nextElementSibling.style.borderWidth = '0px';
  })
}

const section1Banner:HTMLElement = document.querySelector('.section1Banner');

section1Banner.appendChild(
    document.querySelector('.section1Banner a').cloneNode(true)
)

let i = 1;

function slideInt(){
    if(i === 4){
        section1Banner.style.transition = 'none';
        section1Banner.style.marginTop = '0px';
        i = 1;
    }
    setTimeout(
        function(){
            section1Banner.style.transition = 'margin-top .3s';
            section1Banner.style.marginTop = `${-300*i}px`;
            i++;
        },50
    )
}

let intervalID = setInterval(slideInt, 3000);
section1Banner.addEventListener('mouseenter',function(){
    clearInterval(intervalID);
});
section1Banner.addEventListener('mouseleave',function(){
    intervalID = setInterval(slideInt, 3000);
});

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
