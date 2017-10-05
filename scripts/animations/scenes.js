import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import Tweens from './tweens';
import Timelines from './timelines';

var Scenes = {
    Run: (controller) => {
        // Pins the header to the screen
        var containerScene = new ScrollMagic.Scene({

        })
        .setPin('#header')
        .addIndicators()
        .addTo(controller);

        // Move the header from center to top left when scrolling past splash page
        var moveToUpperLeftScene = new ScrollMagic.Scene({
            triggerElement: '#who',
            offset: '-100'
        })
        .setTween(Timelines.scrollPastSplashTimeline())
        .addIndicators()
        .addTo(controller);

        // Move the header back to the center on the final page
        var moveToCenterScene = new ScrollMagic.Scene({
            triggerElement: '#where'
        })
        .setTween(Tweens.headerMoveToCenterTween())
        .addIndicators()
        .addTo(controller);

        // Have text fade in as the user scrolls
        $('.page-text').each(function () {
            var id = $(this).attr('id');
            var textFadeInScene = new ScrollMagic.Scene({
                triggerElement: `#${id}`,
                // Exception for the final page, so the text stays fixed
                // until the bottom of the page
                triggerHook: id === 'page-text4' ? 0 : 0.1,
                duration: id === 'page-text4' ? '300%' :'300%'
            })
            .setPin(`#${id}`)
            .setTween(Timelines.textFadeInTimeline($(this).children()))
            .addIndicators()
            .addTo(controller);
        })
    }
}

export default Scenes;
