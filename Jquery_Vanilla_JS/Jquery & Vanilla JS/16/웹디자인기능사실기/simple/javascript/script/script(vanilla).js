var navLi = document.querySelectorAll('.nav>li');
for (var i = 1; i < 3; i++) {
    navLi[i].addEventListener('mouseenter', function () {
        this.lastElementChild.classList.add('on');
    });
    navLi[i].addEventListener('mouseleave', function () {
        this.lastElementChild.classList.remove('on');
    });
}
var imgs = 2;
var now = 0;
var imgsImg = document.querySelectorAll('.imgs>img');
var start = function () {
    for (var i = 1; i < imgsImg.length; i++) {
        imgsImg[i].className = 'marginLeft2000';
    }
    setInterval(slide, 2000);
};
start();
function slide() {
    now = (now === imgs ? 0 : now += 1);
    if (now === 0) {
        imgsImg[imgsImg.length - 1].className = 'marginLeft2000';
    }
    else {
        imgsImg[now - 1].className = 'marginLeft2000';
    }
    imgsImg[now].className = 'marginLeft0';
}
var as = document.querySelectorAll('a');
for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
    var item = as_1[_i];
    item.addEventListener('focusin', function () {
        this.style.color = '#f00';
    });
    item.addEventListener('focusout', function () {
        this.style.color = 'inherit';
    });
}
var modal = document.querySelector('#modal');
var partnerImg = document.querySelectorAll('.partner img');
for (var _a = 0, partnerImg_1 = partnerImg; _a < partnerImg_1.length; _a++) {
    var item = partnerImg_1[_a];
    item.addEventListener('click', function () {
        modal.classList.add('active');
    });
}
document.querySelector('#modal button').addEventListener('click', function () {
    modal.classList.remove('active');
});
