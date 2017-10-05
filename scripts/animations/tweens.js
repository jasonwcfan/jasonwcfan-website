import { TweenMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

var Tweens = {
    // Move header to upper left
    headerMoveToUpperLeftTween: () => new TweenMax.to('#header', 1.5, {
        top: 0,
        left: 0
    }),
    // Disappear scroll icon
    disappearScrollIcon: () => new TweenMax.to('#scroll-icon', 0.2, {
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

};

export default Tweens;
