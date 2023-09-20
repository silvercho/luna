var list = document.querySelector('#banner');
var listLi = document.querySelectorAll('#banner li');
var show_num = 3;
var total = listLi.length;
var li_width = parseInt(getComputedStyle(listLi[0]).width);
for (var i = 0; i < 3; i++) {
    var copyobj = listLi[i].cloneNode(true);
    list.appendChild(copyobj);
}
var num = 0;
function autoplay() {
    if (num === 5) {
        num = 0;
        list.style.transition = 'none';
        list.style.marginLeft = '0px';
    }
    setTimeout(function () {
        num++;
        list.style.transition = 'margin-left .5s';
        list.style.marginLeft = -li_width * num + "px";
    }, 50);
}
setInterval(autoplay, 3000);
