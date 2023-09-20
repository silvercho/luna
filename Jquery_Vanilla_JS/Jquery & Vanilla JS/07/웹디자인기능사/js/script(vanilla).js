var gnbLiA = document.querySelectorAll('.gnb>li>a');
for (var _i = 0, gnbLiA_1 = gnbLiA; _i < gnbLiA_1.length; _i++) {
    var item = gnbLiA_1[_i];
    item.nextElementSibling.style.transition = 'max-height .25s, border-width .25s';
    item.addEventListener('mouseenter', function () {
        this.nextElementSibling.style.maxHeight = '200px';
        this.nextElementSibling.style.borderWidth = '1px';
    });
    item.addEventListener('mouseleave', function () {
        this.nextElementSibling.style.maxHeight = '0px';
        this.nextElementSibling.style.borderWidth = '0px';
    });
}
var section1Banner = document.querySelector('.section1Banner');
section1Banner.appendChild(document.querySelector('.section1Banner a').cloneNode(true));
var i = 1;
function slideInt() {
    if (i === 4) {
        section1Banner.style.transition = 'none';
        section1Banner.style.marginTop = '0px';
        i = 1;
    }
    setTimeout(function () {
        section1Banner.style.transition = 'margin-top .3s';
        section1Banner.style.marginTop = -300 * i + "px";
        i++;
    }, 50);
}
var intervalID = setInterval(slideInt, 3000);
section1Banner.addEventListener('mouseenter', function () {
    clearInterval(intervalID);
});
section1Banner.addEventListener('mouseleave', function () {
    intervalID = setInterval(slideInt, 3000);
});
var section2BBSUlLi = document.querySelectorAll('.section2BBS>ul>li');
var section2BBSUlLiUl = document.querySelectorAll('.section2BBS>ul>li>ul');
for (var _a = 0, section2BBSUlLi_1 = section2BBSUlLi; _a < section2BBSUlLi_1.length; _a++) {
    var item = section2BBSUlLi_1[_a];
    item.addEventListener('click', function () {
        for (var _i = 0, section2BBSUlLiUl_1 = section2BBSUlLiUl; _i < section2BBSUlLiUl_1.length; _i++) {
            var item_1 = section2BBSUlLiUl_1[_i];
            item_1.style.display = 'none';
            this.lastElementChild.style.display = 'block';
            for (var _a = 0, section2BBSUlLi_2 = section2BBSUlLi; _a < section2BBSUlLi_2.length; _a++) {
                var item_2 = section2BBSUlLi_2[_a];
                item_2.style.borderBottom = '3px solid #dfdfdf';
                this.style.borderBottom = '3px solid #222328';
            }
        }
    });
}
