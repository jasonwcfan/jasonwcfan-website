import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

/** Controller **/
var controller = new ScrollMagic.Controller();

/** Tweens Factory **/
var tweens = {
    // Move header to upper left
    headerMoveToUpperLeftTween: () => new TweenMax.to('#header', 1.5, {
        top: 0,
        left: 0
    }),
    // Disappear scroll icon
    disappearScrollIcon: () => new TweenMax.to('#scroll-icon', 1.5, {
        opacity: 0
    }),
    // Move header to center, slightly above middle
    headerMoveToCenterTween: () => new TweenMax.to('#header', 1.5, {
        left: '50%',
        top: '30%',
        xPercent: '-50',
        yPercent: '-50'
    }),
    // Make text fade in
    textFadeInTween: (selector) => new TweenMax.to(selector, 1.5, {
        opacity: 1
    })

}

/** Timelines Factory **/
var timelines = {
    // Timeline that coordinates text fade-ins
    textFadeInTimeline: (elements) => {
        var timeline = new TimelineMax();

        elements.each((idx, elem) => {
            timeline.add(tweens.textFadeInTween(`#${elem.id}`));
        });

        return timeline;
    },
    // Timeline that takes care of scrolling past the splash page
    scrollPastSplashTimeline: () => {
        var timeline = new TimelineMax()
        .add(tweens.headerMoveToUpperLeftTween())
        .add(tweens.disappearScrollIcon());

        return timeline;
    }
}

/** Scenes **/

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
.setTween(timelines.scrollPastSplashTimeline())
.addIndicators()
.addTo(controller);

// Move the header back to the center on the final page
var moveToCenterScene = new ScrollMagic.Scene({
    triggerElement: '#where'
})
.setTween(tweens.headerMoveToCenterTween())
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
    .setTween(timelines.textFadeInTimeline($(this).children()))
    .addIndicators()
    .addTo(controller);
})
