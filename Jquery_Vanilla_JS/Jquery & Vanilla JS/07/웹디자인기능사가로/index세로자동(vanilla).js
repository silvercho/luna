var bannerLi = document.querySelectorAll('#banner li');
var banner = document.querySelector('#banner');
var he = bannerLi[0].offsetHeight;
var num = 0;
var total = bannerLi.length;
var copy1 = bannerLi[0].cloneNode(true);
banner.appendChild(copy1);
function vauto() {
    if (num === total) {
        num = 0;
        banner.style.transition = 'none';
        banner.style.marginTop = '0px';
    }
    setTimeout(function () {
        num++;
        banner.style.transition = 'margin-top .5s';
        banner.style.marginTop = -num * he + "px";
    }, 50);
}
setInterval(vauto, 3000);
