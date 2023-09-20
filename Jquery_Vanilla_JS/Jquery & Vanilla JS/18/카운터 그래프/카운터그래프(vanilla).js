var charts = document.querySelectorAll('section>div');
var _loop_1 = function (i) {
    var chartBar = charts[i].querySelector('.skill_g');
    chartBar.style.width = '0%';
    var pnum = charts[i].querySelector('.skill_p .num');
    var pdata = Number(pnum.innerText);
    pnum.innerText = '0';
    function percent() {
        var k = -90;
        function percentAnimate() {
            if (k > 90) {
                k = 90;
            }
            var easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;
            var now = pdata * easeUp;
            chartBar.style.width = now + "%";
            pnum.innerText = "" + Math.floor(now);
            k += 180 / (60 * 3);
            if (k > 90) {
                return clearInterval(id);
            }
        }
        var id = setInterval(percentAnimate, 1000 / 60);
    }
    setTimeout(percent, 300 * i);
};
for (var i = 0; i < charts.length; i++) {
    _loop_1(i);
}
