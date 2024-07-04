(function ($) {
  "use strict";

  $('.offcanvas-content ul.mobile-menu > li:has(ul)').addClass("has-sub");
  $('.header-navigation-menu li:has(ul)').addClass("menu-item-has-children");

  $('.offcanvas-content ul.mobile-menu > li:has(ul) > a').after('<span class="caret"></span>');
  $(document).on('click', '.offcanvas-content ul.mobile-menu > li > .caret', function (e) {
    e.preventDefault();
    var checkElement = $(this).next();
    $('.offcanvas-content ul.mobile-menu > li').removeClass('menu-active');
    $(this).closest('li').addClass('menu-active');

    if ((checkElement.is('.submenu-inner')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('menu-active');
      checkElement.slideUp('normal');
    }

    if ((checkElement.is('.submenu-inner')) && (!checkElement.is(':visible'))) {
      $('.offcanvas-content ul.mobile-menu .submenu-inner:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }

    if (checkElement.is('.submenu-inner')) {
      return false;
    } else {
      return true;
    }
  })

  $(document).on('click', '.canvas-menu.gva-offcanvas > a.dropdown-toggle', function (e) {
    e.preventDefault();
    var $style = $(this).data('canvas');
    if ($('.offcanvas-content' + $style).hasClass('open')) {
      $('.offcanvas-content' + $style).removeClass('open');
      $('#site-overlay').removeClass('open');
      $('#wp-main-content').removeClass('blur');
    } else {
      $('.offcanvas-content' + $style).addClass('open');
      $('#site-overlay').addClass('open');
      $('#wp-main-content').addClass('blur');
    }
  });
  $(document).on('click', '#site-overlay', function (e) {
    e.preventDefault();
    $(this).removeClass('open');
    $('.offcanvas-content').removeClass('open');
    $('#wp-main-content').removeClass('blur');
  })
  $(document).on('click', '.close-canvas', function (e) {
    e.preventDefault();
    $('.offcanvas-content').removeClass('open');
    $('#site-overlay').removeClass('open');
    $('#wp-main-content').removeClass('blur');
  })
  jQuery(document).ready(function () {
    if ($(".full-bar-search-toggle").length) {
      $(document).on('click', '.full-bar-search-toggle', function () {
        $('.full-bar-search-wrap').toggleClass('active');
        return false;
      });
    }
    // 6. Background image 
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    // 8. FAQ accordian 
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').on('click', function (a) {
      var dropDown = $(this).closest('li').find('p');
      $(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).closest('.accordion').find('a.active').removeClass('active');
        $(this).addClass('active');
      }
      dropDown.stop(false, true).slideToggle(300);
      a.preventDefault();
    });
    // 9. Tabs 
    $('.tabs-block').tabslet({
      mouseevent: 'click',
      attribute: 'href',
      animation: true,
      active: 1
    });


    $('.counter-block').appear(function () {
      var $endNum = parseInt(jQuery(this).find('.count-number').text());
      jQuery(this).find('.count-number').countTo({
        from: 0,
        to: $endNum,
        speed: 5000,
        refreshInterval: 60,
        formatter: function (value, options) {
          value = value.toFixed(options.decimals);
          value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return value;
        }
      });
    }, {
      accX: 0,
      accY: 0
    });

    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function (itemElem) {
          var weight = $(itemElem).find('.weight').text();
          return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
      }
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50

      // show if name ends with -ium
      ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
      var sortByValue = $(this).attr('data-sort-by');
      $grid.isotope({
        sortBy: sortByValue
      });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });
    $('.testimonial-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      items: 1,
      navText: [$('.testimonials_slide-next'), $('.testimonials_slide-prev')],
      navContainer: '.testimonials_slider_nav',
    });
    $('.post-carousel').owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      dots: true,
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }

    });
    $('.scroll-top').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 900);
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 500) {
        $('.scroll-top').slideDown(450);
      } else {
        $('.scroll-top').slideUp(450);
      }
    });

    /* ===============================
    	***** Fixed Header on Scroll *****
    	================================*/
    $(window).on("scroll", function () {
      let navbar = $(".sticky-header-active");
      var scroll = $(window).scrollTop();
      if (scroll < 500) {
        navbar.removeClass('sticky-header');
      } else {
        if (window.innerWidth >= 768) {
          navbar.addClass('sticky-header');
        }
      }
    });
    $(window).on('load', function () {
      if ($(".page-loader").length) {
        $(".page-loader").fadeOut("slow");
      }
    });

    if ($('.main-slider').length) {
      $('.main-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 8000,
        navText: ['<span class="fal fa-chevron-left"></span>', '<span class="fal fa-chevron-right"></span>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      });
    }
  });


})(jQuery);