;
var gnbLiA = document.querySelectorAll('.gnb>li>a');
for (var _i = 0, gnbLiA_1 = gnbLiA; _i < gnbLiA_1.length; _i++) {
    var item = gnbLiA_1[_i];
    item.addEventListener('click', function () {
        var bbb = this.nextElementSibling.classList.contains('on');
        if (!bbb) {
            var allSub = document.querySelectorAll('.sub');
            for (var _i = 0, allSub_1 = allSub; _i < allSub_1.length; _i++) {
                var item_1 = allSub_1[_i];
                item_1.classList.remove('on');
            }
            this.nextElementSibling.classList.add('on');
        }
        else {
            this.nextElementSibling.classList.remove('on');
        }
    });
}
