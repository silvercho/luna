var gap = 300;
var areas = document.querySelectorAll('.container > div');
var tops = [];
for (var i = 0; i < areas.length; i++) {
    tops.push(areas[i].getBoundingClientRect().top);
    console.log(tops[i]);
}
var titleSpan = document.querySelector('.title span');
addEventListener('scroll', function () {
    titleSpan.innerText = "" + pageYOffset;
    for (var i = 0; i < areas.length - 1; i++) {
        if (tops[i] - gap <= pageYOffset && pageYOffset < tops[i + 1] - gap) {
            areas[i].classList.add('on');
        }
    }
    if (tops[4] - gap <= pageYOffset) {
        areas[4].classList.add('on');
    }
});
