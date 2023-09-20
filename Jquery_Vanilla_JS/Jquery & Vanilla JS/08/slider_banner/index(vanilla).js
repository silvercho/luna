var aLi = document.querySelectorAll('.a li');
var bLi = document.querySelectorAll('.b li');
var _loop_1 = function (i) {
    aLi[i].addEventListener('click', function () {
        for (var _i = 0, aLi_1 = aLi; _i < aLi_1.length; _i++) {
            var item = aLi_1[_i];
            item.classList.remove('on');
        }
        this.classList.add('on');
        for (var _a = 0, bLi_1 = bLi; _a < bLi_1.length; _a++) {
            var item = bLi_1[_a];
            item.classList.remove('on');
        }
        bLi[i].classList.add('on');
    });
};
for (var i = 0; i < aLi.length; i++) {
    _loop_1(i);
}
