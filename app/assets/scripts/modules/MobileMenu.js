import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.header = $('.site-header');
        this.menu_btn = $('.site-header__menu-btn');
        this.menu = $('.site-header__menu');
        this.events();
    }

    events(){
        this.menu_btn.click(this.showHideMenu.bind(this));
    }

    showHideMenu(){
        this.menu.toggleClass('site-header__menu--is-visible');
        this.menu.toggleClass('site-header__mobile-menu-visible');
        this.menu_btn.toggleClass('site-header__menu-btn--close-x');
    }
}

export default MobileMenu;