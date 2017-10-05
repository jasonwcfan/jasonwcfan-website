import { TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import Tweens from './tweens';

var Timelines = {
    // Timeline that coordinates text fade-ins
    textFadeInTimeline: (elements) => {
        var timeline = new TimelineMax();

        elements.each((idx, elem) => {
            timeline.add(Tweens.textFadeInTween(`#${elem.id}`));
        });

        return timeline;
    },
    // Timeline that takes care of scrolling past the splash page
    scrollPastSplashTimeline: () => {
        var timeline = new TimelineMax()
        .add([Tweens.headerMoveToUpperLeftTween(),
            Tweens.disappearScrollIcon()], null, 'start');

        return timeline;
    }
};

export default Timelines;
