$('.photo-box').bind('click', function() {
    $('.front-page').addClass('active');
});

$('.close').bind('click', function() {
    $('.front-page').removeClass('active');
});