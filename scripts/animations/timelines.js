import { TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import Tweens from './tweens';

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
        .add([Tweens.moveToUpperLeftTween('#header', 1.5),
            Tweens.fadeOutTween('#scroll-icon', 0.2)], null, 'start');

        return timeline;
    }
};

export default Timelines;
