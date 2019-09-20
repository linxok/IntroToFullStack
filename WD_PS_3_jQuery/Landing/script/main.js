$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on( 'click', function () {
        $('body,html').animate({scrollTop: 0}, 1500);
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href');
        const top = $(id).offset().top - ($(window).height() /2);

        $("body,html").animate({scrollTop: top}, 1500);
    });
});

