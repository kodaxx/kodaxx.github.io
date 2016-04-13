// clone original menu and hide until scroll
$('#menu').addClass('original').clone().insertAfter('#menu').addClass('cloned').addClass('hero').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

$(document).ready(function () {
    // $(document).on("scroll", onScroll);
    $(document).on("scroll");

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('is-active');
        })
        $(this).addClass('is-active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-70
        }, 500, 'swing', function () {
            window.location.hash = target;
            // $(document).on("scroll", onScroll);
            $(document).on("scroll");
        });
    });
});

/*
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#top-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#top-nav span a').removeClass("is-active");
            currLink.addClass("is-active");
        }
        else{
            currLink.removeClass("is-active");
        }
    });
}
*/

// mobile menu is-active toggle
$('.header-toggle').on('click', function(e) {
      $('#header-toggle, #top-nav').toggleClass("is-active");
      e.preventDefault();
    });
