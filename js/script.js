/* Dynamic top sidebar-nav positioning
 *
 */

var num = 100; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.legant__top').addClass('fixed-scroll');
        $('.legant__logo').addClass('logo-scroll');
        $('.legant__menu__list a').addClass('color-scroll');
    } else {
        $('.legant__top').removeClass('fixed-scroll');
        $('.legant__logo').removeClass('logo-scroll');
        $('.legant__menu__list a').removeClass('color-scroll');

    }
});