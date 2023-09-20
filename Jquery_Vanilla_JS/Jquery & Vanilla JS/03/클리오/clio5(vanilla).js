var tabLi = document.querySelectorAll('.tab>li');
for (var _i = 0, tabLi_1 = tabLi; _i < tabLi_1.length; _i++) {
    var item = tabLi_1[_i];
    item.addEventListener('click', function () {
        if (getComputedStyle(this.children[1]).display === 'none') {
            var tab1 = document.querySelectorAll('.tab1');
            var bestmenu = document.querySelectorAll('.bestmenu');
            var underline = document.querySelectorAll('.underline');
            for (var i = 0; i < tab1.length; i++) {
                tab1[i].classList.remove('on');
                bestmenu[i].classList.remove('on');
                underline[i].classList.remove('on');
            }
            this.children[1].classList.add('on');
            this.children[0].classList.add('on');
            this.children[0].children[0].classList.add('on');
        }
    });
}
