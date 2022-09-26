$(document).ready(function () {
  /* navigation scroll */
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* For slider */
  $("#slider > div:gt(0)").hide();

  setInterval(function () {
    $("#slider > div:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(".slider");
  }, 3000);

  /* Mobile nav */

  const navBtn = document.querySelector(".mobile-nav-icon");
  const mainNav = document.querySelector(".main-nav");
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");

  navBtn.addEventListener("click", function () {
    console.log("click");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  /* Mobile Nav Dropdown */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times-circle-o");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times-circle-o");
    }
  });
});
