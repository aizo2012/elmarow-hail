
  (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 66
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);

  $('document').ready(function() {
    // Back to top
    var backTop = $(".back-to-top");
    
    $(window).scroll(function() {
      if($(document).scrollTop() > 400) {
        backTop.css('visibility', 'visible');
      }
      else if($(document).scrollTop() < 400) {
        backTop.css('visibility', 'hidden');
      }
    });
    
    backTop.click(function() {
      $('html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });
  
