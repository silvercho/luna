var article = document.querySelectorAll('article');
var fdiv = document.querySelector('#fdiv');
var scv = document.querySelector('.scv');
var header = document.querySelector('header');
var texts = document.querySelectorAll('.text1, .text2, .text3');
addEventListener('resize', function () {
    for (var _i = 0, article_1 = article; _i < article_1.length; _i++) {
        var item = article_1[_i];
        item.style.height = innerHeight + "px";
    }
});
var e = document.createEvent('Event');
e.initEvent('resize', true, true);
dispatchEvent(e);
var dTop = fdiv.getBoundingClientRect().top;
addEventListener('scroll', function () {
    //스크롤의 위치(pageYOffset)
    scv.innerText = "" + pageYOffset;
    if (pageYOffset >= 100) {
        header.classList.add('fixed');
        texts[0].classList.add('on');
    }
    else {
        header.classList.remove('fixed');
        texts[0].classList.remove('on');
    }
    if (pageYOffset >= 700 && pageYOffset < 1000) {
        texts[1].classList.add('on');
    }
    else {
        texts[1].classList.remove('on');
    }
    if (pageYOffset >= 1000 && pageYOffset < 1500) {
        texts[2].classList.add('on');
    }
    else {
        texts[2].classList.remove('on');
    }
    fdiv.style.transition = 'top 1s';
    fdiv.style.top = pageYOffset + dTop + "px";
});
var _loop_1 = function (i) {
    function scrollToAni() {
        var k = -90;
        var startScroll = pageYOffset;
        function scrollToAnimate() {
            if (k > 90) {
                k = 90;
            }
            var easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;
            var easeDown = ((Math.sin((k + 180) * Math.PI / 180)) + 1) / 2;
            scrollTo(0, startScroll * easeDown + i * innerHeight * easeUp); // scrollTo(x,y)
            k += 180 / 60;
            if (k > 90) {
                return clearInterval(id);
            }
        }
        var id = setInterval(scrollToAnimate, 1000 / 60);
    }
    var fdivUlLi = document.querySelectorAll('#fdiv ul li');
    fdivUlLi[i].addEventListener('click', function () {
        scrollToAni();
        for (var _i = 0, fdivUlLi_1 = fdivUlLi; _i < fdivUlLi_1.length; _i++) {
            var item = fdivUlLi_1[_i];
            item.classList.remove('on');
        }
        this.classList.add('on');
    });
};
for (var i = 0; i < article.length; i++) {
    _loop_1(i);
}
