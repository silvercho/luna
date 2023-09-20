var navLiA = document.querySelectorAll('#nav li a');
for (var _i = 0, navLiA_1 = navLiA; _i < navLiA_1.length; _i++) {
    var item = navLiA_1[_i];
    item.addEventListener('click', function (e) {
        var img_url = this.getAttribute('href');
        document.querySelector('#window img').setAttribute('src', img_url);
        for (var _i = 0, navLiA_2 = navLiA; _i < navLiA_2.length; _i++) {
            var item_1 = navLiA_2[_i];
            item_1.classList.remove('active');
        }
        this.classList.add('active');
        e.preventDefault();
        //고유에 a href 기능인 링크 기능을 차단한다. - 링크금지
    });
}
