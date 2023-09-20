const box2:HTMLElement = document.querySelector('#box2');

document.querySelector('#rightBtn').addEventListener('click',function(){
  const leftStart = parseInt( getComputedStyle(box2).left );
  box2.style.left = `${leftStart+100}px`;
})

document.querySelector('#leftBtn').addEventListener('click',function(){
  const leftStart = parseInt( getComputedStyle(box2).left );
  box2.style.left = `${leftStart-100}px`;
})