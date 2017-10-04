import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

/** Controller **/
var controller = new ScrollMagic.Controller();

/** Tweens **/
var tweens = {
    titleMoveToUpperLeftTween: () => new TweenMax.to('#title', 1.5, {
        top: 0,
        left: 0
    }),
    titleMoveToCenterTween: () => new TweenMax.to('#title', 1.5, {
        left: '50%',
        top: '30%',
        xPercent: '-50',
        yPercent: '-50'
    })
}

/** Timelines **/


/** Scenes **/
var moveToUpperLeftScene = new ScrollMagic.Scene({
    triggerElement: '#who',
    offset: '-100'
})
.setTween(tweens.titleMoveToUpperLeftTween())
.addIndicators()
.addTo(controller);

var moveToCenterScene = new ScrollMagic.Scene({
    triggerElement: '#where'
})
.setTween(tweens.titleMoveToCenterTween())
.addIndicators()
.addTo(controller);

var containerScene = new ScrollMagic.Scene({

})
.setPin('#title')
.addIndicators()
.addTo(controller);
