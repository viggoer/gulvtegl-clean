$(function () {

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    window.addEventListener("hashchange", function () {
        scrollBy(0, -250)
    });

});