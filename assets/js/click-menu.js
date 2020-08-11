$(document).on('click', '.mobile-menu-place', function() {
  $('#mobile').toggle();

  $('html').toggleClass('prevent-scroll')
  $('body').toggleClass('prevent-scroll')
});