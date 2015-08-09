// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require_tree .


/*global $*/
$(function() {
  'use strict';


  function registerScrollTop(scrollTop, id, animation, offset) {
    if (offset === undefined) {
      offset = 100;
    }
    var $e = $('#' + id);
    console.log(id, $e.length);
    if ($e.length > 0 && !$e.hasClass('animated') && scrollTop + $(window).height() - offset >= $e.offset().top) {
      $e.addClass('animated ' + animation);
      $e.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $e.find('ul:first > li').each(function(i, li) {
          setTimeout(function() {
            $(li).addClass('animated slideInLeft');
          }, i * 250);
        });
        $e.find('tr').each(function(i, li) {
          setTimeout(function() {
            $(li).addClass('animated flipInX');
          }, i * 250);
        });
      });
    }
  }


  function handleScroll() {
    var scrollTop = $(window).scrollTop();

    console.log('handleScroll', scrollTop);
    if (scrollTop > 40) {
      $('#menu_top_mini').addClass('move');
    } else {
      $('#menu_top_mini').removeClass('move');
    }

    registerScrollTop(scrollTop, 'surfy-how-help', 'bounceInLeft');
    registerScrollTop(scrollTop, 'security', 'bounceInLeft');
    registerScrollTop(scrollTop, 'references', 'bounceInLeft');


    registerScrollTop(scrollTop, 'optimize', 'fadeIn', 0);
    registerScrollTop(scrollTop, 'master-cost', 'bounceInLeft');
    registerScrollTop(scrollTop, 'decide', 'bounceInRight');
    registerScrollTop(scrollTop, 'simple-ui', 'bounceInLeft');


    registerScrollTop(scrollTop, 'services', 'fadeIn', 0);
    registerScrollTop(scrollTop, 'university', 'bounceInLeft');

    registerScrollTop(scrollTop, 'prices', 'fadeIn', 0);

registerScrollTop(scrollTop, 'contact', 'fadeIn', 0);

  }

  $(window).on('load', handleScroll);
  $(window).on('page:load', handleScroll);
  $(window).on('scroll', handleScroll);

  // setTimeout(function() {
  //   // console.log($('.flexslider').length);


  //   var options = {
  //     animation: "slide",
  //     directionNav: false,
  //     controlNav: true,
  //     slideshow: true,
  //     animationDuration: 1000,
  //     animationLoop: false
  //     // start: function(d) {
  //       // $("#footer-content a.readmore").bind("click", function() {
  //       //   d.flexAnimate(d.getTarget("next"))
  //       // })
  //     // }
  //   };

  //   $('.flexslider').flexslider(options);

  // }, 0);

}());
