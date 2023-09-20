;
addEventListener('load', function () {
    var all = document.querySelectorAll('*');
    for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
        var item = all_1[_i];
        item.classList.add('size13');
    }
    document.querySelector('h1').classList.add('red');
    document.querySelector('#firstTitle').classList.add('green');
    document.querySelector('.nextTitle').classList.add('blue');
    var obj3Li = document.querySelectorAll('.obj3>li');
    for (var _a = 0, obj3Li_1 = obj3Li; _a < obj3Li_1.length; _a++) {
        var item = obj3Li_1[_a];
        item.classList.add('bold');
    }
    var obj3Children = Array.apply(null, document.querySelector('.obj3').children);
    for (var _b = 0, obj3Children_1 = obj3Children; _b < obj3Children_1.length; _b++) {
        var item = obj3Children_1[_b];
        item.classList.add('black');
    }
    ;
    document.querySelector('.obj3').querySelector('.theObj1').classList.add('purple');
    document.querySelector('.obj5').parentElement.classList.add('border2px');
    var wrapH3 = document.querySelectorAll('#wrap h3');
    for (var _c = 0, wrapH3_1 = wrapH3; _c < wrapH3_1.length; _c++) {
        var item = wrapH3_1[_c];
        item.classList.add('size20');
        item.classList.add('bgYellow');
    }
    document.querySelector('.obj4').nextElementSibling.classList.add('orange');
    document.querySelector('.obj5').previousElementSibling.classList.add('right');
    var obj6Siblings = Array.apply(null, document.querySelector('.obj6').parentElement.children);
    for (var _d = 0, obj6Siblings_1 = obj6Siblings; _d < obj6Siblings_1.length; _d++) {
        var item = obj6Siblings_1[_d];
        if (item !== document.querySelector('.obj6')) {
            item.classList.add('center');
        }
    }
    ;
    var inputText = document.querySelector('input[type=text]');
    inputText.classList.add('bgCcc');
    inputText.classList.add('border1px');
    inputText.classList.add('green');
});
