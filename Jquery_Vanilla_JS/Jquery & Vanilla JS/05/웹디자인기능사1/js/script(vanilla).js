var gnbLiA = document.querySelectorAll('.gnb>li>a');
for (var _i = 0, gnbLiA_1 = gnbLiA; _i < gnbLiA_1.length; _i++) {
    var item = gnbLiA_1[_i];
    item.addEventListener('mouseenter', function () {
        this.nextElementSibling.style.maxHeight = '200px';
        this.nextElementSibling.style.borderWidth = '1px';
    });
    item.addEventListener('mouseleave', function () {
        this.nextElementSibling.style.maxHeight = '0px';
        this.nextElementSibling.style.borderWidth = '0px';
    });
}
var i = 2;
function slideInt() {
    var ads = document.querySelectorAll('.ad1, .ad2, .ad3');
    ads[0].style.top = 300 - (i * 300) + "px";
    ads[1].style.top = 600 - (i * 300) + "px";
    ads[2].style.top = 900 - (i * 300) + "px";
    i++;
    if (i === 4)
        i = 1;
}
setInterval(slideInt, 3000);
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
