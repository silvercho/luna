$(function () {
    $(".m_btn a").click(function () {
        var menuRight = $('.m_menu').css('right');

        if (menuRight == "-150px") {
            $(".m_btn a").addClass('on');
            $('.m_menu').addClass('on');
        }
        else {
            $(".m_btn a").removeClass('on');
            $('.m_menu').removeClass('on');
            $('.sub').css('display', 'none');
        }
    });
    $('.m_menu>li>ul').css('display', 'none');
    $('.m_menu>li>a').click(function () {
        var subDisplay = $(this).next('.sub').css('display');

        if (subDisplay == 'none') {
            $('.sub').slideUp();
            $(this).next().slideDown();
        }
        else {
            $(this).next().slideUp();
        }
    });
});
