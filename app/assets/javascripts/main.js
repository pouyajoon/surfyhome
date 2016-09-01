/*global $, ScrollMagic, document*/
$((function () {



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
            scene.on("enter", function () {
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
            $('.menu a').click(function (e) {
                e.preventDefault();
                $root.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            });
        }

        setupAnchorScroll();


        console.log($('a'));
        $('a').on('click', function(){
            console.log('click');
            $('.menu').toggleClass('visible'); 
        });

    }

    setTimeout(startup, 100);

}()));