$(document).ready(function () {
  // плавное перемещение страницы к нужному блоку
  $(".tabs__item").click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });

  $(window).scroll(function () {
    var elem = '.js-company-info-tabs';
    if ($(this).scrollTop() > 204) {
      $(elem).addClass('sticky');
    }
    else {
      $(elem).removeClass('sticky');
    }
  });
});