var dd = document.querySelectorAll('dd');
var dt = document.querySelectorAll('dt');
var onTab = dt[0];
function ddHide() {
    for (var _i = 0, dd_1 = dd; _i < dd_1.length; _i++) {
        var item = dd_1[_i];
        item.style.display = 'none';
    }
}
ddHide();
dd[0].style.display = 'block';
function srcChange(obj, from, to) {
    var imgcg = obj.querySelector('img').getAttribute('src').replace(from, to);
    obj.querySelector('img').setAttribute('src', imgcg);
}
for (var _i = 0, dt_1 = dt; _i < dt_1.length; _i++) {
    var item = dt_1[_i];
    item.addEventListener('click', function () {
        ddHide();
        this.nextElementSibling.style.display = 'block';
        srcChange(onTab, 'over', 'out');
        srcChange(this, 'out', 'over');
        onTab = this;
    });
}
