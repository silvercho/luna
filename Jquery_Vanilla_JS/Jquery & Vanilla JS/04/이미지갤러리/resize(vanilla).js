addEventListener('resize', function () {
    var articles = document.querySelectorAll('article');
    for (var _i = 0, articles_1 = articles; _i < articles_1.length; _i++) {
        var item = articles_1[_i];
        item.style.height = innerHeight + "px";
    }
});
var e = document.createEvent('Event');
e.initEvent('resize', true, true);
dispatchEvent(e);
