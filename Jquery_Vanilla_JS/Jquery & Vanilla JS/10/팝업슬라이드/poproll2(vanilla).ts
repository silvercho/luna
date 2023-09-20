const list:HTMLElement = document.querySelector('#banner');
const listLi:NodeListOf<HTMLElement> = document.querySelectorAll('#banner>li');
const show_num = 3;
const total = listLi.length;
const li_width = listLi[0].offsetWidth;
for (let i = 0 ; i < show_num ; i ++){
  const copyobj = listLi[i].cloneNode(true);
  list.appendChild(copyobj);
}

let num = 0;

document.querySelector('.next').addEventListener('click',function(e){
  if(num === total){
    num = 0;
    list.style.transition = 'none';
    list.style.marginLeft = '0%';
  }
  setTimeout(
    function(){
      num ++;
      list.style.transition = 'margin-left .5s';
      list.style.marginLeft = `${-li_width*num}px`;
    }, 50
  )

  e.preventDefault();
})



document.querySelector('.prev').addEventListener('click',function(e){
  if(num === 0){
    num = total;
    list.style.transition = 'none';
    list.style.marginLeft = `${-li_width*num}px`;
  }
  setTimeout(
    function(){
      num --;
      list.style.transition = 'margin-left .5s';
      list.style.marginLeft = `${-li_width*num}px`;
    }, 50
  )

  e.preventDefault();
})

  
const popup = document.querySelector('#popup');
const bannerWrap = document.querySelector('#banner_wrap');

document.querySelector('#main a').addEventListener('click',function(e){
  popup.classList.add('on');
  bannerWrap.classList.add('on');
  e.preventDefault();
})

document.querySelector('#btn').addEventListener('click',function(e){
  popup.classList.remove('on');
  bannerWrap.classList.remove('on');
  e.preventDefault();
})
