const box1:HTMLElement = document.querySelector('.box1');
const box2:HTMLElement = document.querySelector('.box2');

document.querySelector('#btn1').addEventListener('click',function(){
  box1.style.transition = 'max-height .75s';
  box1.style.maxHeight = '0px'
})

document.querySelector('#btn2').addEventListener('click',function(){
  box1.style.transition = 'max-height 1s';
  box1.style.maxHeight = '40px'
})

document.querySelector('#btn3').addEventListener('click',function(){
  box2.style.transition = 'max-height .5s';
  
  if(!(getComputedStyle(box2).maxHeight === '0px')){
    box2.style.maxHeight = '0px';
  } else {
    box2.style.maxHeight = '40px';
  }
})

document.querySelector('#btn4').addEventListener('click',function(){
  this.parentNode.nextElementSibling.style.transition = 'max-height .5s';
  this.parentNode.nextElementSibling.style.maxHeight = '0px';
})

document.querySelector('#btn5').addEventListener('click',function(){
  this.parentNode.nextElementSibling.style.transition = 'max-height .25s';
  this.parentNode.nextElementSibling.style.maxHeight = '40px';
})

document.querySelector('#btn6').addEventListener('click',function(){
  const btn6ParentNext = this.parentNode.nextElementSibling;
  btn6ParentNext.style.transition = 'max-height .25s';

  if(!(getComputedStyle(btn6ParentNext).maxHeight === '0px')){
    btn6ParentNext.style.maxHeight = '0px';
  } else {
    btn6ParentNext.style.maxHeight = '40px';
  }
})

document.querySelector('#btn7').addEventListener('click',function(){
  const btn7ParentNextStyle = this.parentNode.nextElementSibling.style;
  btn7ParentNextStyle.transition = 'opacity 1s';
  btn7ParentNextStyle.opacity = '0';
  setTimeout(function(){
    btn7ParentNextStyle.display = 'none';
  },1000)
})

document.querySelector('#btn8').addEventListener('click',function(){
  const btn8ParentNextStyle = this.parentNode.nextElementSibling.style;
  btn8ParentNextStyle.display = 'block';
  setTimeout(function(){
    btn8ParentNextStyle.transition = 'opacity .75s';
    btn8ParentNextStyle.opacity = '1';
  },1)
})    

document.querySelector('#btn9').addEventListener('click',function(){
  const btn9ParentNext = this.parentNode.nextElementSibling;
  btn9ParentNext.style.transition = 'opacity .5s';
  
  if(!(getComputedStyle(btn9ParentNext).opacity === '0')){
    btn9ParentNext.style.opacity = '0';
    setTimeout(function(){
      btn9ParentNext.style.display = 'none';
    },500)
  } else {
    btn9ParentNext.style.display = 'block';
    setTimeout(function(){
      btn9ParentNext.style.opacity = '1';
    })
  }
})

document.querySelector('#btn10').addEventListener('click',function(){
  this.parentNode.nextElementSibling.style.transition = 'opacity .75s';
  this.parentNode.nextElementSibling.style.opacity = '.3';
})

document.querySelector('#btn11').addEventListener('click',function(){
  this.parentNode.nextElementSibling.style.transition = 'opacity .75s';
  this.parentNode.nextElementSibling.style.opacity = '1';
})
