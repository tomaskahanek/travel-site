import $ from 'jquery'

class MobileMenu {
    constructor() {
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.events();    
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this)); //.bind použiju, aby jsem navázal hodnotu this a použil ji v metodě toggleTheMenu, kde bude mít stejnou hodnotu; jinak to hází chybu undefined
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}

export default MobileMenu;