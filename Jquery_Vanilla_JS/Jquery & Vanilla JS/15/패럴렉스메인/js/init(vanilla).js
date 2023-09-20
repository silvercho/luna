var section = document.querySelectorAll('section');
addEventListener('resize', function () {
    for (var _i = 0, section_3 = section; _i < section_3.length; _i++) {
        var item = section_3[_i];
        item.style.height = innerHeight + "px";
        //현재의 브라우저 높이값(innerHeight) 가져와서 컨텐츠영역(section)의 높이에 대입
    }
});
//브라우저의 리사이즈 발생시 화면이 뒤틀리는 문제점해결
var e = document.createEvent('Event');
e.initEvent('resize', true, true);
dispatchEvent(e);
//맨처음 강제로 리사이즈를 해줘서 처음한번실행
var menuLi = document.querySelectorAll('#menu li');
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
            k += 180 / (60 * 1.3);
            if (k > 90) {
                return clearInterval(id);
            }
        }
        var id = setInterval(scrollToAnimate, 1000 / 60);
    }
    menuLi[i].addEventListener('click', function (e) {
        scrollToAni();
        e.preventDefault();
    });
};
for (var i = 0; i < menuLi.length; i++) {
    _loop_1(i);
}
addEventListener('scroll', function () {
    for (var i = 0; i < 4; i++) {
        if (pageYOffset >= innerHeight * i && pageYOffset < innerWidth * (i + 1)) {
            for (var _i = 0, menuLi_1 = menuLi; _i < menuLi_1.length; _i++) {
                var item = menuLi_1[_i];
                item.classList.remove('on');
            }
            menuLi[i].classList.add('on');
        }
    }
});
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
        k += 90 / (60 * .65);
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
        scrollTo(0, startScroll + bounceDown); // scrollTo(x,y)
        k += 180 / (60 * .65);
        if (k > 180) {
            return clearInterval(id);
        }
    }
    var id = setInterval(bouncingAnimate, 1000 / 60);
}
for (var _i = 0, section_1 = section; _i < section_1.length; _i++) {
    var item = section_1[_i];
    item.addEventListener('wheel', function (e) {
        if (e.deltaY < 0) {
            if (this.previousElementSibling) {
                if (slideAniStatus === 0) {
                    slideAniStatus = 1;
                    var prev = pageYOffset + this.previousElementSibling.getBoundingClientRect().top;
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
                    var next = pageYOffset + this.nextElementSibling.getBoundingClientRect().top;
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
for (var _a = 0, section_2 = section; _a < section_2.length; _a++) {
    var item = section_2[_a];
    item.addEventListener('mousemove', function (e) {
        function parallax(obj, rightStart, rightTimes, bottomStart, bottomTimes) {
            var objElement = document.querySelector(obj);
            objElement.style.right = rightStart + (e.pageX * rightTimes) + "px";
            objElement.style.bottom = bottomStart + (e.pageY * bottomTimes) + "px";
        }
        //1페이지
        parallax('.p11', 20, -1 / 30, 20, -1 / 30);
        parallax('.p12', 130, 1 / 20, -40, 1 / 20);
        var p13 = document.querySelector('.p13');
        p13.style.right = 60 + e.pageX * 1 / 20 + "px";
        p13.style.top = 180 + e.pageY * 1 / 20 + "px";
        //2페이지
        parallax('.p21', -180, -1 / 30, -480, -1 / 30);
        parallax('.p22', 130, 1 / 50, -40, 1 / 50);
        //3페이지
        parallax('.p31', 280, -1 / 30, 30, -1 / 30);
        parallax('.p32', 110, 1 / 20, -270, 1 / 20);
        parallax('.p33', -70, 1 / 20, -130, 1 / 20);
        //4페이지
        parallax('.p41', 20, -1 / 30, -120, -1 / 30);
        parallax('.p42', 0, -1 / 20, -180, -1 / 20);
    });
}
