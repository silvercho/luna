scrollTo(0, 0);
var contents = document.querySelectorAll('section div');
var menu = document.querySelectorAll('nav ul li');
var fdiv = document.querySelectorAll('#floatdiv>ul>li');
var floatdiv = document.querySelector('#floatdiv');
var dtop = floatdiv.getBoundingClientRect().top;
addEventListener('resize', function () {
    for (var _i = 0, contents_2 = contents; _i < contents_2.length; _i++) {
        var item = contents_2[_i];
        item.style.height = innerHeight + "px";
    }
    //높이를구한 innerHeight를  contents 대입
    //  contents 각각에   ex) 934를 700대신 입력
});
var e = document.createEvent('Event');
e.initEvent('resize', true, true);
dispatchEvent(e); //시작시 강제로 resize를 실행
var as = [];
for (var i = 0; i < contents.length; i++) {
    as.push(contents[i].getBoundingClientRect().top);
}
console.log(as);
var sTop = document.querySelector('#sTop');
var nav = document.querySelector('nav');
addEventListener('scroll', function (e) {
    sTop.innerText = "" + pageYOffset;
    if (pageYOffset > 100) {
        nav.classList.add('fixed');
    }
    else {
        nav.classList.remove('fixed');
    }
    floatdiv.style.transition = 'top 1s';
    floatdiv.style.top = pageYOffset + dtop + "px";
    for (var i = 0; i < contents.length; i++) {
        if (pageYOffset >= as[i]) {
            for (var i_1 = 0; i_1 < contents.length; i_1++) {
                menu[i_1].classList.remove('on');
                fdiv[i_1].classList.remove('on');
            }
            menu[i].classList.add('on');
            fdiv[i].classList.add('on');
        }
    }
    e.preventDefault();
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
    menu[i].addEventListener('click', function (e) {
        scrollToAni();
        e.preventDefault();
    });
    fdiv[i].addEventListener('click', function (e) {
        scrollToAni();
        e.preventDefault();
    });
};
for (var i = 0; i < contents.length; i++) {
    _loop_1(i);
}
var slideAniStatus = 0;
function slideAnimation(to) {
    var k = -90;
    var startScroll = pageYOffset;
    function scrollToAnimate() {
        if (k >= 0) {
            k = 0;
        }
        var easeUp = (Math.sin(k * Math.PI / 180)) + 1;
        var easeDown = (Math.sin((k + 180) * Math.PI / 180));
        scrollTo(0, startScroll * easeDown + to * easeUp); // scrollTo(x,y)
        k += 90 / (60 * .5);
        if (k > 0) {
            return clearInterval(id);
        }
    }
    var id = setInterval(scrollToAnimate, 1000 / 60);
}
function bouncing(plusMinus) {
    var k = 0;
    var startScroll = pageYOffset;
    function bouncingAnimate() {
        if (k >= 180) {
            k = 180;
        }
        var bounceDown = Math.round(plusMinus * (Math.abs(Math.sin(Math.pow((k * Math.PI / 180 + 2.26), 1.4)) / (Math.pow((k * Math.PI / 180 + 2.26), 2))) * 1500 - 48));
        // https://cdn.discordapp.com/attachments/517616714318479364/774204100602363904/bounceFunction.png
        scrollTo(0, startScroll + bounceDown); // scrollTo(x,y)
        k += 180 / (60 * .5);
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
                    var prev = pageYOffset + this.previousElementSibling.getBoundingClientRect().top;
                    slideAnimation(prev);
                    setTimeout(function () {
                        bouncing(1);
                    }, 600);
                    setTimeout(function () {
                        slideAniStatus = 0;
                    }, 1200);
                }
            }
        }
        if (e.deltaY > 0) {
            if (this.nextElementSibling) {
                if (slideAniStatus === 0) {
                    slideAniStatus = 1;
                    var next = pageYOffset + this.nextElementSibling.getBoundingClientRect().top;
                    slideAnimation(next);
                    setTimeout(function () {
                        bouncing(-1);
                    }, 600);
                    setTimeout(function () {
                        slideAniStatus = 0;
                    }, 1200);
                }
            }
        }
        e.preventDefault();
    });
}
