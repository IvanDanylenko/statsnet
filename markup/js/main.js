$(document).ready(function () {
  // плавное перемещение страницы к нужному блоку
  $(".tabs__item").click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });

  // Tabs switch
  (function () {
    var targetIds = [];
    $(".tabs__item").each(function () {
      targetIds.push($(this).attr('href'));
    });

    var breakpoints = [];
    breakpoints = targetIds.map((item) => {
      var offset = $(item).offset().top - 60;
      return [item, offset]
    });

    $(window).scroll(function () {
      var elem = '.js-company-info-tabs';
      wscroll = $(this).scrollTop();
      if (wscroll > 204) {
        $(elem).addClass('sticky');

        console.log($('.tabs__item[href="#_contacts"]'));

        $(".tabs__item").removeClass('active');
        for (var i = 0; i < breakpoints.length - 1; i++) {
          if (wscroll > breakpoints[i][1] && wscroll < breakpoints[i + 1][1] ) {
            $(`.tabs__item[href="${breakpoints[i][0]}"]`).addClass('active');
          } else if (wscroll > breakpoints[breakpoints.length - 1][1]) {
            $(`.tabs__item[href="${breakpoints[breakpoints.length - 1][0]}"]`).addClass('active');
          }
        }
      }
      else {
        $(elem).removeClass('sticky');
        $('.tabs__item').removeClass('active');
        $('.tabs__item[href="#_contacts"]').addClass('active');
      }
    });
  })();
});