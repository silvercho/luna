var gnbLiA = document.querySelectorAll('.gnb li a');
var _loop_1 = function (item) {
    function change(from, to) {
        var imgcg = item.querySelector('img').getAttribute('src').replace(from, to);
        //menu01_from.png - menu01_to.png 파일명만 바꾼다.
        item.querySelector('img').setAttribute('src', imgcg);
    }
    item.addEventListener('mouseenter', function () {
        change('out', 'over');
    });
    item.addEventListener('mouseleave', function () {
        change('over', 'out');
    });
};
for (var _i = 0, gnbLiA_1 = gnbLiA; _i < gnbLiA_1.length; _i++) {
    var item = gnbLiA_1[_i];
    _loop_1(item);
}
