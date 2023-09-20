$(function () {
    $('.gnb>li>a').hover(function () {
        $(this).next().stop().slideDown('fast');
    }, function () {
        $(this).next().stop().slideUp('fast');
    });

    $('.section1Banner').append($('.section1Banner a').eq(0).clone());
    var i = 1;

    function slideInt() {
        if (i === 4) {
            $('.section1Banner').css({
                marginTop: '0'
            });
            i = 1;
        }
        $('.section1Banner').animate({
            marginTop: String(-300 * i) + 'px'
        });
        i++;
    }
    var intervalID = setInterval(slideInt, 3000);
    $('.section1Banner').hover(function () {
        clearInterval(intervalID);
    }, function () {
        intervalID = setInterval(slideInt, 3000);
    });

    $('.section2BBS>ul>li').on('click', function () {
        $('.section2BBS>ul>li>ul').css('display', 'none');
        $(this).children().css('display', 'block');
        $('.section2BBS>ul>li').css('border-bottom', '3px solid #dfdfdf');
        $(this).css('border-bottom', '3px solid #222328');
    });
});
