addEventListener('mousemove',function(e:MouseEvent){
  const x = e.clientX;
  const y = e.clientY;

  const m1:HTMLElement = document.querySelector('#m1');
  m1.style.top = `${y/2}px`;
  m1.style.left = `${x/3}px`;

  const m2:HTMLElement = document.querySelector('#m2');
  m2.style.right = `${x/5}px`

  const m3:HTMLElement = document.querySelector('#m3');
  m3.style.bottom = `${y/6}px`

  const cursor:HTMLElement = document.querySelector('#cursor');
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
})
