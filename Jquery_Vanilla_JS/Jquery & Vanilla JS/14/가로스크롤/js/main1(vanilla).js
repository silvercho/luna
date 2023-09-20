var contents = document.querySelectorAll('.section');
var wrap = document.querySelector('#wrap');
addEventListener('resize', function () {
    for (var _i = 0, contents_2 = contents; _i < contents_2.length; _i++) {
        var item = contents_2[_i];
        item.style.height = innerHeight + "px";
        item.style.width = innerWidth + "px";
    }
    wrap.style.height = innerHeight + "px";
});
var e = document.createEvent('Event');
e.initEvent('resize', true, true);
dispatchEvent(e);
var left1 = pageXOffset + contents[0].getBoundingClientRect().left;
function scrollToAni(to) {
    var k = -90;
    var startScroll = pageXOffset;
    function scrollToAnimate() {
        if (k > 90) {
            k = 90;
        }
        var easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;
        var easeDown = ((Math.sin((k + 180) * Math.PI / 180)) + 1) / 2;
        scrollTo(startScroll * easeDown + to * easeUp, 0); // scrollTo(x,y)
        k += 180 / (60 * 1.3);
        if (k > 90) {
            return clearInterval(id);
        }
    }
    var id = setInterval(scrollToAnimate, 1000 / 60);
}
document.querySelector('.top_logo').addEventListener('click', function (e) {
    scrollToAni(left1);
    e.preventDefault();
});
var lnbLi = document.querySelectorAll('.lnb > li');
var _loop_1 = function (i) {
    lnbLi[i].addEventListener('click', function (e) {
        var nowLeft = i * innerWidth;
        scrollToAni(nowLeft);
        e.preventDefault();
    });
};
for (var i = 0; i < lnbLi.length; i++) {
    _loop_1(i);
}
var slideAniStatus = 0;
function slideAnimation(to) {
    var k = -90;
    var startScroll = pageXOffset;
    function scrollToAnimate() {
        if (k >= 0) {
            k = 0;
        }
        var easeUp = (Math.sin(k * Math.PI / 180)) + 1;
        var easeDown = (Math.sin((k + 180) * Math.PI / 180));
        scrollTo(startScroll * easeDown + to * easeUp, 0); // scrollTo(x,y)
        k += 90 / (60 * .65);
        if (k > 0) {
            return clearInterval(id);
        }
    }
    var id = setInterval(scrollToAnimate, 1000 / 60);
}
function bouncing(plusMinus) {
    var k = 0;
    var startScroll = pageXOffset;
    function bouncingAnimate() {
        if (k >= 180) {
            k = 180;
        }
        var bounceDown = Math.round(plusMinus * (Math.abs(Math.sin(Math.pow((k * Math.PI / 180 + 2.26), 1.4)) / (Math.pow((k * Math.PI / 180 + 2.26), 2))) * 1500 - 48));
        scrollTo(startScroll + bounceDown, 0); // scrollTo(x,y)
        k += 180 / (60 * .65);
        if (k > 180) {
            return clearInterval(id);
        }
    }
    var id = setInterval(bouncingAnimate, 1000 / 60);
}
for (var _i = 0, contents_1 = contents; _i < contents_1.length; _i++) {
    var item = contents_1[_i];
    item.addEventListener('wheel', function (e) {
        if (e.deltaY < 0) {
            if (this.previousElementSibling) {
                if (slideAniStatus === 0) {
                    slideAniStatus = 1;
                    var prev = pageXOffset + this.previousElementSibling.getBoundingClientRect().left;
                    slideAnimation(prev);
                    setTimeout(function () {
                        bouncing(1);
                    }, 700);
                    setTimeout(function () {
                        slideAniStatus = 0;
                    }, 1400);
                }
            }
        }
        if (e.deltaY > 0) {
            if (this.nextElementSibling) {
                if (slideAniStatus === 0) {
                    slideAniStatus = 1;
                    var next = pageXOffset + this.nextElementSibling.getBoundingClientRect().left;
                    slideAnimation(next);
                    setTimeout(function () {
                        bouncing(-1);
                    }, 700);
                    setTimeout(function () {
                        slideAniStatus = 0;
                    }, 1400);
                }
            }
        }
        e.preventDefault();
    });
}
