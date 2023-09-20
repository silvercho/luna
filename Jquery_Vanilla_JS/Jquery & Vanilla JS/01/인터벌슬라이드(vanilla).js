;
var i = 0;
var boxImgs = document.querySelectorAll('.box img');
function slide() {
    (i === boxImgs.length) && (i = 0);
    boxImgs[i].className = 'leftMinus400';
    boxImgs[(i + 1) % boxImgs.length].className = 'left0';
    boxImgs[(i + 2) % boxImgs.length].className = 'leftPlus400';
    i++;
}
setInterval(slide, 3000);
