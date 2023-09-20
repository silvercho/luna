addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var m1 = document.querySelector('#m1');
    m1.style.top = y / 2 + "px";
    m1.style.left = x / 3 + "px";
    var m2 = document.querySelector('#m2');
    m2.style.right = x / 5 + "px";
    var m3 = document.querySelector('#m3');
    m3.style.bottom = y / 6 + "px";
    var cursor = document.querySelector('#cursor');
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});
