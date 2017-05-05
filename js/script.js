/* Dynamic top sidebar-nav positioning
 *
 */

var num = 100; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.legant_top').addClass('fixed-scroll');
        $('.legant_brand').addClass('brand-scroll');
        $('.legant_menu_list a').addClass('color-scroll');
    } else {
        $('.legant_top').removeClass('fixed-scroll');
        $('.legant_brand').removeClass('brand-scroll');
        $('.legant_menu_list a').removeClass('color-scroll');

    }
});