;
var gnbLi = document.querySelectorAll('#gnb li');
for (var _i = 0, gnbLi_1 = gnbLi; _i < gnbLi_1.length; _i++) {
    var item = gnbLi_1[_i];
    item.addEventListener('click', function () {
        for (var _i = 0, gnbLi_2 = gnbLi; _i < gnbLi_2.length; _i++) {
            var item_1 = gnbLi_2[_i];
            item_1.style.color = 'black';
        }
        this.style.color = 'red';
        this.parentElement.previousElementSibling.style.color = 'red';
    });
}
