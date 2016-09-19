/*global $, ScrollMagic, document*/
$((function() {



    function startup() {
        'use strict';
        console.log('ready');

        var controller;


        controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                duration: 500
            }
        });


        function setSceen(number, offset) {
            var zone, scene;
            zone = '.zone' + number;
            scene = new ScrollMagic.Scene({
                triggerElement: zone,
                offset: offset || 0
            });
            // .addIndicators(); // add indicators (requires plugin)
            scene.on('enter', function() {
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

        // build scene
        // var scene = new ScrollMagic.Scene({
        //         triggerElement: zone
        //     })
        //     // trigger a velocity opaticy animation
        //     .setVelocity(zone, {
        //         opacity: 0
        //     }, {
        //         duration: 400
        //     })
        //     .addIndicators() // add indicators (requires plugin)
        //     .addTo(controller);

        // slides = document.querySelectorAll("div.zone");
        // console.log(slides);
        // for (i = 0; i < slides.length; i += 1) {
        //     new ScrollMagic.Scene({
        //             triggerElement: slides[i]
        //         })
        //         .setPin(slides[i])
        //         .addIndicators() // add indicators (requires plugin)
        //         .addTo(controller);
        // }

        function setupAnchorScroll() {
            var $root = $('html, body');
            $('.menu a').click(function(e) {
                e.preventDefault();
                $root.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            });
        }

        setupAnchorScroll();

        $('a').on('click', function() {
            $('.menu').toggleClass('visible');
        });

        $('.zone1 .zone-end').on('click', function(e) {
            $('.zone1 .zone-bottom').addClass('fill-contact');
            e.preventDefault();
            return false;
        });

        $('.cancel-contact-form').on('click', function(e) {
            $('.zone1 .zone-bottom').removeClass('fill-contact');
            e.preventDefault();
            return false;
        });

        $('body').click('on', function() {
            if ($('.zone1 .zone-bottom').hasClass('fill-contact')) {
                $('.zone1 .zone-bottom').removeClass('fill-contact');
            }
        });

        $('.send-contact-form').on('click', function(e) {
            var d = {
                'authenticity_token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'contact[firstname]': $('#firstname').val(),
                'contact[lastname]': $('#lastname').val(),
                'contact[email]': $('#email').val(),
                'contact[telephone]': $('#telephone').val(),
                'contact[title]': $('#title').val(),
                'contact[comments]': $('#comments').val()
            };
            $('.send-contact-form').prop('disable', true);
            $.post('/contacts.json', d).success(function(res) {
                console.log(res);
                $('.send-contact-form').prop('disable', false);
                $('.fill-contact-form').html('<h1>Merci nous allons revenir vers vous rapidement.</h1>');
                setTimeout(function() {
                    $('.zone1 .zone-bottom').removeClass('fill-contact');
                }, 1500);
            });

            e.preventDefault();
            return false;
        });



    }

    setTimeout(startup, 100);

}()));
