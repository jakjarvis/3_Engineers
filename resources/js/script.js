$(document).ready(function () {
  /* Navigation scroll */
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
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");
  const header = document.querySelector("header");

  navBtn.addEventListener("click", function () {
    console.log("click");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    header.classList.toggle("open");
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

  /* Sticky Nav */
  const sectionSplash = document.querySelector(".section-splash");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);
      if (ent.isIntersecting === false) {
        document.querySelector(".header").classList.add("sticky");
        sectionSplash.classList.add("sticky");
      }
      if (ent.isIntersecting === true) {
        document.querySelector(".header").classList.remove("sticky");
        sectionSplash.classList.remove("sticky");
      }
    },
    {
      // Looking inside the viewport
      root: null,
      // When 0% of the section is in the viewport
      threshold: 0,
      rootMargin: "-5px",
    }
  );
  obs.observe(sectionSplash);
});
