import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

/** Controller **/
var controller = new ScrollMagic.Controller();

/** Tweens **/
var titleTween = new TweenMax.to('#title', 1.5, {
    top: 0,
    left: 0
})

/** Scenes **/
var moveToTopScene = new ScrollMagic.Scene({
    triggerElement: '#who',
    offset: '-100'
})
.setTween(titleTween)
.addIndicators()
.addTo(controller);

var containerScene = new ScrollMagic.Scene({

})
.setPin('#title')
.addIndicators()
.addTo(controller);
