$(function() {    /* throttle / debounce */    (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);    $('a[href="#"]').click(function(e){      e.preventDefault();    });    autosize($('textarea'));    $('select').select2({      minimumResultsForSearch: Infinity    });    (function($) {        $.fn.eqHeights = function (options) {          var $el = $(this),            $window = $(window),            opts = $.extend({}, $.fn.eqHeights.defaults, options);          if ($el.length > 0 && !$el.data('eqHeights')) {            $(window).bind('resize.eqHeights', function () {              $el.eqHeights(opts);            });            $el.data('eqHeights', true);          }          return $el.each(function () {            var children = $(this).find(opts.childrenSelector);            if (!(opts.minWidth) || opts.minWidth < $window.width()) {              var curHighest = 0;              children.each(function () {                var $el = $(this),                  elHeight = $el.height('auto').height();                if (elHeight > curHighest) {                  curHighest = elHeight;                }              }).height(curHighest);            } else {              children.height('auto');            }          });        };        $.fn.eqHeights.defaults = {          childrenSelector: '*',          minWidth: ''        };        $('.equal-columns').eqHeights({          childrenSelector: '> .column',          minWidth: 400        });    }(jQuery));    function collapseFAQ() {      var $item = $('.m_faq .item .headling');      $item.on('click', function(){        $(this).parent().toggleClass('is-open');        $(this).next().slideToggle(300);      });    }    collapseFAQ();
    function collapseFooterMenu() {      $('.collapse-list').on('click', function(){        $(this).next().slideToggle(300);        $(this).toggleClass('is-open');      });    }    collapseFooterMenu();
    function headerMobileSearchClose() {      $('.btn-search-mobile').removeClass('is-open');    }    function headerMobileMenuClose() {      $('.menu-mobile').removeClass('is-open');    }    function headerMobileSearch() {      $('.btn-search-mobile').on('click', function() {        headerMobileMenuClose();        $(this).toggleClass('is-open');      });    }    headerMobileSearch();    function headerMobileMenu() {      $('.btn-mobile-menu').on('click', function() {        headerMobileSearchClose();        $(this).parent('.menu-mobile').toggleClass('is-open');      });    }    headerMobileMenu();
    function leadCarousel() {      $('.m_lead-carousel').slick({        fade: true      });    }    leadCarousel();
    function showCurrentRecipes() {      var currentType = $('.recipes-nav li a.current').attr('data-recipe-type');      var i = 0;      $('.recipes-list .item').each(function(){        if ( $(this).attr('data-item-type') === currentType ) {          $(this).addClass('current');          i++;          if ( i > 2) {            $(this).addClass('hide-mobile');          }        } else {          $(this).removeClass('hide-mobile current');        }      });    }    showCurrentRecipes();    function mobileSelectedItem() {      var result = $('.selected-recipe-collapse');      result.html($('.recipes-nav li a.current').text());    }    mobileSelectedItem();    function mobileToggleCollapse() {      $('.selected-recipe-collapse').on('click', function(){        $(this).toggleClass('is-open');      });    }    mobileToggleCollapse();    function changeCurrentRecipes() {      var recipesNavItem = $('.recipes-nav a');      recipesNavItem.on('click', function(){        if ( $(this).hasClass('current') ) {          return false        } else {          recipesNavItem.removeClass('current');          $(this).addClass('current');          showCurrentRecipes();          mobileSelectedItem();          $('.selected-recipe-collapse').removeClass('is-open');        }      });    }    changeCurrentRecipes();
    function showCurrentSecret() {      var currentType = $('.secret-nav li a.current').attr('data-secret-type');      var i = 0;      $('.secret-list .item').each(function(){        if ( $(this).attr('data-item-type') === currentType ) {          $(this).addClass('current');          i++;          if ( i > 2) {            $(this).addClass('hide-mobile');          }        } else {          $(this).removeClass('hide-mobile current');        }      });      $('.m_lead-secrets .details a').each(function(){        if ( $(this).attr('data-secret-type') === currentType ) {          $(this).addClass('current');        } else {          $(this).removeClass('current');        }      });    }    showCurrentSecret();    function mobileSelectedSecretItem() {      var result = $('.selected-secret-collapse');      result.html($('.secret-nav li a.current').text());    }    mobileSelectedSecretItem();    function mobileToggleCollapseSecret() {      $('.selected-secret-collapse').on('click', function(){        $(this).toggleClass('is-open');      });    }    mobileToggleCollapseSecret();    function changeCurrentSecret() {      var secretNavItem = $('.secret-nav a');      secretNavItem.on('click', function(){        if ( $(this).hasClass('current') ) {          return false        } else {          secretNavItem.removeClass('current');          $(this).addClass('current');          showCurrentSecret();          mobileSelectedSecretItem();          $('.selected-secret-collapse').removeClass('is-open');        }      });    }    changeCurrentSecret();
    $('.similar-carousel').slick({      slidesToShow: 2,      responsive: [        {          breakpoint: 660,          settings: {            slidesToShow: 1          }        }      ]    });
    function modals() {      $('.btn-modal').magnificPopup({        type: 'inline',        fixedContentPos: false,        fixedBgPos: true,        overflowY: 'auto',        closeBtnInside: true,        preloader: false,        midClick: true,        removalDelay: 300,        mainClass: 'my-mfp-zoom-in'      });    }    modals();
    $('.pagelist-btn').on('click', function(){      $('#pagelist').toggleClass('is-open');    });});