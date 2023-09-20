var box2 = document.querySelector('#box2');
document.querySelector('#rightBtn').addEventListener('click', function () {
    var leftStart = parseInt(getComputedStyle(box2).left);
    box2.style.left = leftStart + 100 + "px";
});
document.querySelector('#leftBtn').addEventListener('click', function () {
    var leftStart = parseInt(getComputedStyle(box2).left);
    box2.style.left = leftStart - 100 + "px";
});
