$(function () {

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // https://www.fourfront.us/blog/jquery-window-width-and-media-queries 
    $(document).ready(function () {
        checkSize();

        $(window).resize(checkSize);
    });

    function checkSize() {
        if ($(".sampleClass").css("float") == "none") {
            window.addEventListener("hashchange", function () {
                scrollBy(0, -250)
            });
        }
    };

});