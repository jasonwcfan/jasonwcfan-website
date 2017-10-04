import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

var controller = new ScrollMagic.Controller();

var blockTween = new TweenMax.to('#block', 1.5, {
    backgroundColor: 'red'
});

var containerScene = new ScrollMagic.Scene({
    triggerElement: '.container'
})
.setTween(blockTween)
.addIndicators()
.addTo(controller);

console.log(blockTween);
