var _status = '';
function subSlideUp() {
    var sub = document.querySelectorAll('.mobile_nav .sub');
    for (var _i = 0, sub_1 = sub; _i < sub_1.length; _i++) {
        var item = sub_1[_i];
        item.style.maxHeight = '0px';
    }
}
function reset() {
    document.querySelector('.mobile_nav').classList.remove('active');
    subSlideUp();
    document.querySelector('.transparency').classList.remove('active');
    document.querySelector('.container').classList.remove('active');
}
addEventListener('resize', function () {
    if (innerWidth <= 850) {
        _status = 'mobile';
    }
    else {
        _status = 'pc';
        if (document.querySelector('.mobile_nav').classList.contains('active')) {
            reset();
        }
    }
});
var e = document.createEvent('Event');
e.initEvent('resize', true, true);
dispatchEvent(e);
var navUl = document.querySelectorAll('.nav ul');
for (var _i = 0, navUl_1 = navUl; _i < navUl_1.length; _i++) {
    var item = navUl_1[_i];
    item.addEventListener('mouseenter', function () {
        if (_status === 'pc') {
            this.classList.add('over');
        }
    });
    item.addEventListener('mouseleave', function () {
        if (_status === 'pc') {
            this.classList.remove('over');
        }
    });
}
document.querySelector('.mobile_tab').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.mobile_nav').classList.add('active');
    document.querySelector('.transparency').classList.add('active');
    document.querySelector('.container').classList.add('active');
});
var mobile_navUlLiA = document.querySelectorAll('.mobile_nav > ul > li > a');
for (var i = 0; i < mobile_navUlLiA.length; i++) {
    mobile_navUlLiA[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (_status === 'mobile') {
            if (getComputedStyle(this.nextElementSibling).maxHeight === '0px') {
                subSlideUp();
                this.nextElementSibling.style.maxHeight = '108px';
            }
            else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        }
    });
}
document.querySelector('.transparency').addEventListener('click', function () {
    reset();
});
