var sub = document.querySelectorAll('.sub');
function slideUp() {
    for (var _i = 0, sub_1 = sub; _i < sub_1.length; _i++) {
        var item = sub_1[_i];
        item.style.height = '0px';
    }
}
document.querySelector('.m_btn a').addEventListener('click', function () {
    var menuRight = getComputedStyle(document.querySelector('.m_menu')).right;
    if (menuRight === '-150px') {
        document.querySelector('.m_btn a').classList.add('on');
        document.querySelector('.m_menu').classList.add('on');
    }
    else {
        document.querySelector('.m_btn a').classList.remove('on');
        document.querySelector('.m_menu').classList.remove('on');
        slideUp();
    }
});
slideUp();
var menuLiA = document.querySelectorAll('.m_menu>li>a');
for (var _i = 0, menuLiA_1 = menuLiA; _i < menuLiA_1.length; _i++) {
    var item = menuLiA_1[_i];
    item.addEventListener('click', function () {
        var subHeight = getComputedStyle(this.nextElementSibling).height;
        if (subHeight === '0px') {
            slideUp();
            this.nextElementSibling.style.height = '120px';
        }
        else {
            this.nextElementSibling.style.height = '0px';
        }
    });
}
