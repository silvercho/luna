var dd = document.querySelector('.dd');
var right = document.querySelector('.right');
var sub = document.querySelectorAll('.sub');
var ulGnbLi = document.querySelectorAll('ul.gnb>li');
var header = document.querySelector('header');
var shadow = document.querySelector('.shadow');
function gnbOn() {
    dd.classList.add('on');
    right.classList.add('on');
    for (var _i = 0, sub_1 = sub; _i < sub_1.length; _i++) {
        var item = sub_1[_i];
        item.classList.add('on');
    }
    for (var _a = 0, ulGnbLi_2 = ulGnbLi; _a < ulGnbLi_2.length; _a++) {
        var item = ulGnbLi_2[_a];
        item.classList.add('on');
    }
    header.classList.add('on');
    shadow.classList.add('on');
}
function gnbOff() {
    dd.classList.remove('on');
    right.classList.remove('on');
    for (var _i = 0, sub_2 = sub; _i < sub_2.length; _i++) {
        var item = sub_2[_i];
        item.classList.remove('on');
    }
    for (var _a = 0, ulGnbLi_3 = ulGnbLi; _a < ulGnbLi_3.length; _a++) {
        var item = ulGnbLi_3[_a];
        item.classList.remove('on');
    }
    header.classList.remove('on');
    shadow.classList.remove('on');
}
dd.addEventListener('click', function () {
    if (!(this.classList.contains('on'))) {
        gnbOn();
    }
    else {
        gnbOff();
    }
});
for (var _i = 0, ulGnbLi_1 = ulGnbLi; _i < ulGnbLi_1.length; _i++) {
    var item = ulGnbLi_1[_i];
    item.addEventListener('click', function () {
        if (!(this.classList.contains('on'))) {
            gnbOn();
        }
    });
}
header.addEventListener('mouseleave', function () {
    gnbOff();
});
var visual = document.querySelectorAll('#brandVisual>ul>li'); // 큰사진 li
var button = Array.apply(null, document.querySelectorAll('#buttonList>li')); // 블릿(버튼)li
// button에 쓸 indexOf 함수는 노드 리스트 형식이 아닌 단순 배열 형식에서만 가능하므로 단순 배열로 변환
var num1 = document.querySelector('.num1');
var current = 0;
var intervalState = 0;
var k = 0;
var i = 0;
for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
        i = button.indexOf(this);
        buttonOn();
        move('left_100', 'left100', 'left0');
        e.preventDefault();
    });
}
if (i === button.length)
    i = 0;
function buttonOn() {
    for (var _i = 0, button_1 = button; _i < button_1.length; _i++) {
        var item = button_1[_i];
        item.classList.remove('on');
    }
    button[i].classList.add('on');
    k = i + 1;
    num1.innerHTML = k + "&nbsp";
}
timer();
function timer() {
    intervalState = setInterval(function () {
        var n = current + 1;
        //length==갯수 (6)
        if (n === visual.length) {
            n = 0;
        }
        var e = document.createEvent('Event');
        e.initEvent('click', true, true);
        button[n].dispatchEvent(e);
        // 강제로 인덱스번호 n값을 누른다.(컴퓨터가 누름)
    }, 2000);
}
function move(cuTo, neFrom, neTo) {
    if (current === i)
        return;
    var cu = visual[current];
    var ne = visual[i];
    cu.style.transition = 'left .3s';
    cu.className = cuTo;
    setTimeout(function () {
        cu.style.transition = 'none';
    }, 300);
    ne.className = neFrom;
    setTimeout(function () {
        ne.style.transition = 'left .3s';
        ne.className = neTo;
    }, 50);
    current = i;
}
var brandVisualUl = document.querySelector('#brandVisual ul');
var buttonList = document.querySelector('#buttonList');
brandVisualUl.addEventListener('mouseenter', function () {
    clearInterval(intervalState);
});
buttonList.addEventListener('mouseenter', function () {
    clearInterval(intervalState);
});
brandVisualUl.addEventListener('mouseleave', function () {
    timer();
});
buttonList.addEventListener('mouseleave', function () {
    timer();
});
document.querySelector('.next').addEventListener('click', function (e) {
    i++;
    if (i === 6)
        i = 0;
    buttonOn();
    move('left_100', 'left100', 'left0');
    e.preventDefault();
});
document.querySelector('.prev').addEventListener('click', function (e) {
    i--;
    if (current === 0)
        i = 5;
    buttonOn();
    move('left100', 'left_100', 'left0');
    e.preventDefault();
});
document.querySelector('.play').addEventListener('click', function (e) {
    if (this.classList.contains('on')) {
        this.classList.remove('on');
        timer();
    }
    else {
        this.classList.add('on');
        clearInterval(intervalState);
    }
    e.preventDefault();
});
