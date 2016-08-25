/*global $, ScrollMagic, document*/
$((function () {

    function startup() {
        'use strict';
        console.log('ready');

        var controller, slides, i;


        // init controller
        // controller = new ScrollMagic.Controller({
        //     // globalSceneOptions: {
        //     //     triggerHook: 'onLeave'
        //     // }
        // });

        controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                duration: 200
            }
        });


        var zone = $('#zone1 .zone-action img');


        new ScrollMagic.Scene({
                triggerElement: "#img1"
            })
            .setClassToggle("#zone1", "active") // add class toggle
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
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