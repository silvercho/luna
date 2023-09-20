var gnbLi = document.querySelectorAll('#gnb li');
for (var _i = 0, gnbLi_1 = gnbLi; _i < gnbLi_1.length; _i++) {
    var item = gnbLi_1[_i];
    item.addEventListener('mouseenter', function () {
        this.lastElementChild.style.maxHeight = '200px';
    });
    item.addEventListener('mouseleave', function () {
        this.lastElementChild.style.maxHeight = '0px';
    });
}
