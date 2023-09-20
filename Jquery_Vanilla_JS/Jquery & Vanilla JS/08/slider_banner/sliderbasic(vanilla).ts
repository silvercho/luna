interface NodeListOf<TNode> extends Array<TNode> {}

const visual:NodeListOf<HTMLElement> = document.querySelectorAll('#brandVisual > ul > li'); //큰사진 li
const button = document.querySelectorAll('#buttonList > li'); //블릿(버튼) li
let current = 0; //현재
let intervalState = 0;

for(let i = 0 ; i < button.length ; i ++){
  button[i].addEventListener('click',function(){
    for(const item of button){
      item.classList.remove('on');
    }
    this.classList.add('on');
    //button[i].classList.add('on');
    move(i);
  })
}

timer();//timer() 한번실행;
function timer(){
  intervalState = setInterval(function(){
    let n = current + 1;
    if(n === 3){
      n = 0;
    }

    const e = document.createEvent('Event');
    e.initEvent('click',true,true);
    button[n].dispatchEvent(e);
    //컴퓨터가 버튼을 강제로 누른다(클릭).
    
  },3000)
}

const brandVisual = document.querySelector('#brandVisual');

brandVisual.addEventListener('mouseenter',function(){
  clearInterval(intervalState);
});

brandVisual.addEventListener('mouseleave',function(){
  timer();
});


function move(i){
  if(current === i) return;
  //현재있는 슬라이드 번호(인덱스번호) 와
  //클릭한 슬라이드번호가 같으면 빠져 나간다.
  const cu = visual[current];
  const ne = visual[i];

  cu.style.transition = 'none';
  cu.style.left = '0%';
  setTimeout(
    function(){
      cu.style.transition = 'left .3s';
      cu.style.left = '-100%';
    },50
  )

  ne.style.transition = 'none';
  ne.style.left = '100%';
  setTimeout(
    function(){
      ne.style.transition = 'left .3s';
      ne.style.left = '0%';
    },50
  )

  current = i;
}