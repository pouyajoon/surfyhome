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


$(function() {



  $(window).on('scroll',function(){
    var scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    if (scrollTop > 315 - 30){
      $('#header').addClass('mini');
    } else {
      $('#header').removeClass('mini');
    }
  })

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
