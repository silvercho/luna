const sub:HTMLElement = document.querySelector('.sub');
sub.style.transition = 'height .5s';
sub.style.overflow = 'hidden';
sub.style.height = '0px';

document.querySelector('.gnb>li>a').addEventListener('click',function(){
  const kkk = this.nextElementSibling.style.height;
  if(kkk === '0px'){
    this.nextElementSibling.style.height = '100px';
  } else {
    this.nextElementSibling.style.height = '0px';
  }
})
