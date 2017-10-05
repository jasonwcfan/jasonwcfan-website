import { TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import Tweens from './tweens';

/**
 * Factory for creating timelines as they are needed
 * @type {Object}
 */
var Timelines = {
    // Timeline that coordinates text fade-ins
    textFadeInTimeline: (elements) => {
        var timeline = new TimelineMax();

        elements.each((idx, elem) => {
            timeline.add(Tweens.fadeInTween(`#${elem.id}`, 1.5));
        });

        return timeline;
    },
    // Timeline that takes care of scrolling past the splash page
    scrollPastSplashTimeline: () => {
        var timeline = new TimelineMax()
        .add([
            Tweens.moveToUpperLeftTween('#header', 1.5),
            Tweens.fadeOutTween('#scroll-icon', 0.2),
            Tweens.changeTextColourTween('#header', 1.5, '#000000')
        ], null, 'start');

        return timeline;
    },
    // Timeline for animating the scroll icon
    animateScrollIconTimeline: () => {
        var timeline = new TimelineMax()
        .add(Tweens.animateScrollIconTween());

        return timeline;
    }
};

export default Timelines;
