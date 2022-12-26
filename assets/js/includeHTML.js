// [참고] https://www.w3schools.com/howto/howto_html_include.asp

function includeHTML(callback) {
  var z, i, elmnt, file, xhr;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("include-html");
          includeHTML(callback);
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      return;
    }
  }
  setTimeout(function () {
    callback();
  }, 0);
}

function stripBannerDisplay() {
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    let innerHeight = $(document).height() - 1300;

    if (scrollTop >= innerHeight) {
      $(".fixed-bottom").css("display", "none");
    } else {
      $(".fixed-bottom").css("display", "block");
    }
  });
}
