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
        setSceen(7, -250);

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
    }

    setTimeout(startup, 0);

}()));