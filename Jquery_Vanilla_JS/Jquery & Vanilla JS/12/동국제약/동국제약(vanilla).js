var k = 0;
var header = document.querySelector('header');
var gnbLi = document.querySelectorAll('.gnb>li');
function addOn() {
    header.classList.add('on');
    for (var _i = 0, gnbLi_2 = gnbLi; _i < gnbLi_2.length; _i++) {
        var item = gnbLi_2[_i];
        item.classList.add('on');
    }
}
function removeOn() {
    header.classList.remove('on');
    for (var _i = 0, gnbLi_3 = gnbLi; _i < gnbLi_3.length; _i++) {
        var item = gnbLi_3[_i];
        item.classList.remove('on');
    }
}
addEventListener('scroll', function () {
    if (pageYOffset > 0) {
        addOn();
    }
    else {
        if (k === 0) {
            removeOn();
        }
    }
});
for (var _i = 0, gnbLi_1 = gnbLi; _i < gnbLi_1.length; _i++) {
    var item = gnbLi_1[_i];
    item.addEventListener('mouseenter', function () {
        addOn();
        k = 1;
    });
    item.addEventListener('mouseleave', function () {
        if (pageYOffset <= 100) {
            removeOn();
        }
        k = 0;
    });
}
