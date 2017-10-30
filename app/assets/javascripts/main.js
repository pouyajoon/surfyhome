/*global $, ScrollMagic, document, angular*/
(function () {
  'use strict';

  $((function () {



    function startup() {
      var controller;
      controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          duration: 500
        }
      });

      $('.zone1-carousel').slick({
        infinite: true,
        dots: true,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });


      function setSceen(number, offset) {
        var zone, scene;
        zone = '.zone' + number;
        scene = new ScrollMagic.Scene({
          triggerElement: zone,
          offset: offset || 0
        });
        // .addIndicators(); // add indicators (requires plugin)
        scene.on('enter', function () {
          // $(zone + ' .zone-text h1').addClass('animated bounceInRight');
          $(zone + ' .zone-end-text h2').addClass('animated bounceInLeft');
          $(zone).addClass('doAnimation');
        });
        controller.addScene(scene);

      }

      setSceen(1);
      setSceen(2);
      setSceen(3);
      setSceen(4);
      setSceen(5);
      setSceen(6);
      setSceen(7, -400);

      function setupAnchorScroll() {
        var $root = $('html, body');
        $('.menu a').click(function (e) {
          e.preventDefault();
          $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
          }, 500);
          return false;
        });
      }

      setupAnchorScroll();

      $('a').on('click', function () {
        $('.menu').toggleClass('visible');
      });

      $('.zone1 .zone-end').on('click', function (e) {
        $('.zone1 .zone-bottom').addClass('fill-contact');
        e.preventDefault();
        return false;
      });

      $('.zone7 .zone-end').on('click', function (e) {
        $('.zone7 .zone-bottom').addClass('fill-contact');
        e.preventDefault();
        return false;
      });


      // $('.cancel-contact-form').on('click', function(e) {
      //   $('.fill-contact').removeClass('fill-contact');
      //   e.preventDefault();
      //   return false;
      // });

      $('body').click('on', function () {
        $('.fill-contact').removeClass('fill-contact');
      });
    }

    setTimeout(startup, 100);

  }()));


  var app = angular.module('SurfyHomeApp', []);
  app.run(function () {
    return false;
  });

  app.config(['$httpProvider',
    function (provider) {
      provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
  ]);

  app.controller('FormController', function ($scope, $http) {
    $scope.contact = {};
    $scope.form = {
      disable: false,
      sent: false
    };

    $scope.closeForm = function ($event) {
      $event.stopPropagation();
      $event.preventDefault();
      $('.fill-contact').removeClass('fill-contact');
    };
    $scope.contactSubmit = function (form) {
      $scope.valid = form.$valid;
      if (form.$valid === false) {
        return;
      }
      $scope.form.disable = true;
      $http.post('/contacts.json', $scope.contact).success(function (res) {
        $scope.form.disable = false;
        $scope.form.sent = true;
        setTimeout(function () {
          $('.zone1 .zone-bottom').removeClass('fill-contact');
        }, 2000);
      });
    };
  });

}());
