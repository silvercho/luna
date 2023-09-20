var wi = 960;
var num = 0;
var bannerLi = document.querySelectorAll('#banner li');
var banner = document.querySelector('#banner');
var total = bannerLi.length;
var copy1 = bannerLi[0].cloneNode(true);
banner.appendChild(copy1);
function auto() {
    if (num === total) {
        num = 0;
        banner.style.transition = 'none';
        banner.style.marginLeft = '0px';
    }
    setTimeout(function () {
        num++;
        banner.style.transition = 'margin-left .5s';
        banner.style.marginLeft = -num * wi + "px";
    }, 50);
}
setInterval(auto, 3000);
