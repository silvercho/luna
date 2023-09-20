$(function () {
    $('.gnb>li>a').hover(function () {
        $(this).next().stop().slideDown('fast');
    }, function () {
        $(this).next().stop().slideUp('fast');
    });

    var i = 2;

    function slideInt() {
        $('.ad1').css('top', 300 - (i * 300))
        $('.ad2').css('top', 600 - (i * 300))
        $('.ad3').css('top', 900 - (i * 300))
        i++;
        if (i === 4)
            i = 1;
    }
    setInterval(slideInt, 3000);

    $('.section2BBS>ul>li').on('click', function () {
        $('.section2BBS>ul>li>ul').css('display', 'none');
        $(this).children().css('display', 'block');
        $('.section2BBS>ul>li').css('border-bottom', '3px solid #dfdfdf');
        $(this).css('border-bottom', '3px solid #222328');
    });
});
