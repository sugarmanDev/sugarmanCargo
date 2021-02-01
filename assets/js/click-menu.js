var mobileMenu = '<div class="mobile" id="mobile">';
mobileMenu += '<div class="container-fluid mobile-menu">';
mobileMenu += '  <button class="close-btn toggle-mobile-menu">';
mobileMenu += '    <span class="material-icons">';
mobileMenu += '      clear';
mobileMenu += '      </span>';
mobileMenu += '  </button>';
mobileMenu += '  <div class="mobile-menu-list">';
mobileMenu += '<ul>';
mobileMenu += '      <li><a href="./package.html">택배문의</a></li>';
mobileMenu += '      <li><a href="./branch_list.html">지점안내</a></li>';
mobileMenu += '      <li><a href="./franchise.html">가맹문의</a></li>';
mobileMenu += '    </ul>';
mobileMenu += '    <a href="./visit.html">';
mobileMenu += '      <button type="button">';
mobileMenu += '        방문예약';
mobileMenu += '      </button>';
mobileMenu += '    </a>';
mobileMenu += '  </div>';
mobileMenu += '</div>';
mobileMenu += '</div>';

$(document).on('click', '.toggle-mobile-menu', function() {
  $('.mobile-menu').toggle();

  $('html').toggleClass('prevent-scroll')
  $('body').toggleClass('prevent-scroll')
});

$(document).ready(function() {
  $('body').append(mobileMenu);
})

$(document).on('click', '.event-banner-btn', function() {
  $('.event-banner').remove();
  $('.top-nav').css('top', '0px')
});

var getDomain = window.location.hostname;

var targetDomain = '';

console.log(getDomain);

if (getDomain == 'sugarmancargo.com' || getDomain == 'sugarmandev.github.io') {
  targetDomain = 'http://gimyo.co.kr/cargo';
} else {
  targetDomain = 'http://localhost/cargo';
}