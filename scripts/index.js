import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

/** Controller **/
var controller = new ScrollMagic.Controller();

/** Tweens **/
var tweens = {
    // Move title to upper left
    titleMoveToUpperLeftTween: () => new TweenMax.to('#title', 1.5, {
        top: 0,
        left: 0
    }),
    // Move title to center, slightly above middle
    titleMoveToCenterTween: () => new TweenMax.to('#title', 1.5, {
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

/** Timelines **/

// Timeline that coordinates text fade-ins
var textFadeInTimeline = new TimelineMax();
$('.body-text').each((idx, elem) => {
    console.log(`.${elem.id}`);
    textFadeInTimeline.add(tweens.textFadeInTween(`#${elem.id}`));
})
console.log(textFadeInTimeline.getChildren());

/** Scenes **/

// Pins the title to the screen
var containerScene = new ScrollMagic.Scene({

})
.setPin('#title')
.addIndicators()
.addTo(controller);

// Move the title from center to top left when scrolling past splash page
var moveToUpperLeftScene = new ScrollMagic.Scene({
    triggerElement: '#who',
    offset: '-100'
})
.setTween(tweens.titleMoveToUpperLeftTween())
.addIndicators()
.addTo(controller);

// Move the title back to the center on the final page
var moveToCenterScene = new ScrollMagic.Scene({
    triggerElement: '#where'
})
.setTween(tweens.titleMoveToCenterTween())
.addIndicators()
.addTo(controller);

// Have text fade in as the user scrolls
var textFadeInScene = new ScrollMagic.Scene({
    triggerElement: '#who',
    triggerHook: 0.1
})
.setPin('.body-text')
.setTween(textFadeInTimeline)
.addIndicators()
.addTo(controller);
