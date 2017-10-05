import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import Scenes from './animations/scenes';

/** Controller **/
var controller = new ScrollMagic.Controller();

/** Start the animations **/
Scenes.Run(controller);
