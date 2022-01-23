(function($) {

    var $window = $(window),
        $body = $('body');


    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });


    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });


    if (browser.mobile)
        $body.addClass('is-mobile');
    else {

        breakpoints.on('>medium', function() {
            $body.removeClass('is-mobile');
        });

        breakpoints.on('<=medium', function() {
            $body.addClass('is-mobile');
        });

    }


    $('.scrolly')
        .scrolly({
            speed: 1500
        });

})(jQuery);