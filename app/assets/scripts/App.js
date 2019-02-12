import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobilemenu = new MobileMenu();
new RevealOnScroll($('.testimonial__item'), "65%");
new RevealOnScroll($('.feature-item'), "80%"); 