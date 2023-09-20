document.querySelector('.gnb>li>a').addEventListener('click',function(){
  const kkk = this.nextElementSibling.classList.contains('on');
  if(!kkk){
    this.nextElementSibling.classList.add('on');
  } else {
    this.nextElementSibling.classList.remove('on');
  }
})
