var box = document.querySelector('#box');
var top1 = parseInt(getComputedStyle(box).top);
var top2 = box.getBoundingClientRect().top;
var ts = document.querySelectorAll('#t1, #t2');
ts[0].innerText = "" + top1;
ts[1].innerText = "" + top2;
