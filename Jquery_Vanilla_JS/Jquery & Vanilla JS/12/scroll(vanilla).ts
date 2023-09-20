const scv:HTMLElement = document.querySelector('.scv')
const header = document.querySelector('header');
const texts = document.querySelectorAll('.text1, .text2, .text3');

addEventListener('scroll',function(){
  //스크롤의 위치(pageYOffset)

  scv.innerText = `${pageYOffset}`;

  if(pageYOffset >= 100){
    header.classList.add('fixed');
    texts[0].classList.add('on');
  } else {
    header.classList.remove('fixed');
    texts[0].classList.remove('on');
  }

  if(pageYOffset >= 700 && pageYOffset < 1000){
    texts[1].classList.add('on');
  } else {
    texts[1].classList.remove('on');
  }

  if(pageYOffset >= 1000 && pageYOffset < 1500){
    texts[2].classList.add('on');
  } else {
    texts[2].classList.remove('on');
  }

})
