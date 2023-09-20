var box1 = document.querySelector('.box1');
setTimeout(function () {
    box1.style.left = '500px';
    box1.style.width = '200px';
    box1.style.height = '200px';
    box1.style.opacity = '.5';
}, 1);
//setTimeout으로 0.001초 늦게 css를 주어야 IE에서 transition 값을 0.001초 사이에 받아온다.
