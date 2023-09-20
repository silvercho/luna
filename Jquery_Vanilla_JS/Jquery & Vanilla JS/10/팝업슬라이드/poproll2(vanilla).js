var list = document.querySelector('#banner');
var listLi = document.querySelectorAll('#banner>li');
var show_num = 3;
var total = listLi.length;
var li_width = listLi[0].offsetWidth;
for (var i = 0; i < show_num; i++) {
    var copyobj = listLi[i].cloneNode(true);
    list.appendChild(copyobj);
}
var num = 0;
document.querySelector('.next').addEventListener('click', function (e) {
    if (num === total) {
        num = 0;
        list.style.transition = 'none';
        list.style.marginLeft = '0%';
    }
    setTimeout(function () {
        num++;
        list.style.transition = 'margin-left .5s';
        list.style.marginLeft = -li_width * num + "px";
    }, 50);
    e.preventDefault();
});
document.querySelector('.prev').addEventListener('click', function (e) {
    if (num === 0) {
        num = total;
        list.style.transition = 'none';
        list.style.marginLeft = -li_width * num + "px";
    }
    setTimeout(function () {
        num--;
        list.style.transition = 'margin-left .5s';
        list.style.marginLeft = -li_width * num + "px";
    }, 50);
    e.preventDefault();
});
var popup = document.querySelector('#popup');
var bannerWrap = document.querySelector('#banner_wrap');
document.querySelector('#main a').addEventListener('click', function (e) {
    popup.classList.add('on');
    bannerWrap.classList.add('on');
    e.preventDefault();
});
document.querySelector('#btn').addEventListener('click', function (e) {
    popup.classList.remove('on');
    bannerWrap.classList.remove('on');
    e.preventDefault();
});
