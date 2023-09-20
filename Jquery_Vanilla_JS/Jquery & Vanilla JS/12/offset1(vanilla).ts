const box = document.querySelector('#box');
const top1 = parseInt(getComputedStyle(box).top);
const top2 = box.getBoundingClientRect().top;

const ts:NodeListOf<HTMLElement> = document.querySelectorAll('#t1, #t2');
ts[0].innerText = `${top1}`;
ts[1].innerText = `${top2}`;
