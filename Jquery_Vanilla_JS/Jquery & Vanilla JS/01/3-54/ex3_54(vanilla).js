;
addEventListener('load', function () {
    var all = document.querySelectorAll('*');
    for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
        var item = all_1[_i];
        item.style.fontSize = '13px';
    }
    ;
    var h1Element = document.querySelector('h1');
    h1Element.style.color = 'red';
    var firstTitle = document.querySelector('#firstTitle');
    firstTitle.style.color = 'green';
    var nextTitle = document.querySelector('.nextTitle');
    nextTitle.style.color = 'blue';
    var obj3Li = document.querySelectorAll('.obj3>li');
    for (var _a = 0, obj3Li_1 = obj3Li; _a < obj3Li_1.length; _a++) {
        var item = obj3Li_1[_a];
        item.style.fontWeight = 'bold';
    }
    ;
    var obj3Children = Array.apply(null, document.querySelector('.obj3').children);
    for (var _b = 0, obj3Children_1 = obj3Children; _b < obj3Children_1.length; _b++) {
        var item = obj3Children_1[_b];
        item.style.color = 'black';
    }
    ;
    var theObj1 = document.querySelector('.obj3').querySelector('.theObj1');
    theObj1.style.color = 'purple';
    var obj5Parent = document.querySelector('.obj5').parentElement;
    obj5Parent.style.border = "dashed 2px #f00";
    var wrapH3 = document.querySelectorAll('#wrap h3');
    for (var _c = 0, wrapH3_1 = wrapH3; _c < wrapH3_1.length; _c++) {
        var item = wrapH3_1[_c];
        item.style.fontSize = '20px';
        item.style.backgroundColor = 'yellow';
    }
    var obj4Next = document.querySelector('.obj4').nextElementSibling;
    obj4Next.style.color = 'orange';
    var obj5Prev = document.querySelector('.obj5').previousElementSibling;
    obj5Prev.style.textAlign = 'right';
    var obj6Siblings = Array.apply(null, document.querySelector('.obj6').parentElement.children);
    for (var _d = 0, obj6Siblings_1 = obj6Siblings; _d < obj6Siblings_1.length; _d++) {
        var item = obj6Siblings_1[_d];
        (item !== document.querySelector('.obj6')) && (item.style.textAlign = 'center');
    }
    var inputText = document.querySelector('input[type=text]');
    inputText.style.backgroundColor = '#ccc';
    inputText.style.border = '1px solid #000';
    inputText.style.color = 'green';
});
