

$(document).ready(function () {
  const TIME_ANIMATE = 1500;
  const WINDOW_POSITION =2; // 2- position center window

    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on( 'click', function () {
        $('body,html').animate({scrollTop: 0}, TIME_ANIMATE);
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href');
        const top = $(id).offset().top - ($(window).height() / WINDOW_POSITION);

        $("body,html").animate({scrollTop: top}, TIME_ANIMATE);
    });
});

