import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from'./modules/StickyHeader';
import Overlay from './modules/Overlay';
import $ from 'jquery';

var mobilemenu = new MobileMenu();
new RevealOnScroll($('.testimonial__item'), "65%");
new RevealOnScroll($('.feature-item'), "80%"); 
var stickyHeader = new StickyHeader();
new Overlay();