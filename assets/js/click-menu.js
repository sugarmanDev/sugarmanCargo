var mobileMenu = '<div class="mobile" id="mobile">';
mobileMenu += '<div class="container-fluid mobile-menu">';
mobileMenu += '  <button class="close-btn toggle-mobile-menu">';
mobileMenu += '    <span class="material-icons">';
mobileMenu += '      clear';
mobileMenu += '      </span>';
mobileMenu += '  </button>';
mobileMenu += '  <div class="mobile-menu-list">';
mobileMenu += '<ul>';
mobileMenu += '      <li><a href="./about.html">슈가맨카고</a></li>';
mobileMenu += '      <li><a href="./event.html">이벤트</a></li>';
mobileMenu += '      <li><a href="./branch.html">지점</a></li>';
mobileMenu += '      <li><a href="./inquiry.html">가맹</a></li>';
mobileMenu += '      <li><a href="./qna.html">문의</a></li>';
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
});

$(document).ready(function(){
  $('body').append(mobileMenu);
})

var getDomain = window.location.hostname;
var targetDomain = '';

if(getDomain =='sugarmanCargo.com') {
  targetDomain = 'http://api.sugarmanwork.com/cargo';
}
else {
  targetDomain = 'http://localhost/cargo';
}

