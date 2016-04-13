$('.header-toggle').on('click', function(e) {
      $('#header-toggle, #top-nav').toggleClass("is-active");
      e.preventDefault();
    });