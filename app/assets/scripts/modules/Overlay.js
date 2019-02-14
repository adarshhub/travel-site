import $ from 'jquery';

class Overlay{
    constructor(){
        this.openingElement = $('.open-overlay');
        this.overlay = $('.overlay');
        this.closingElement = $('.overlay__close');
        this.events();
    }

    events(){
        this.openingElement.click(this.openOverlay.bind(this));
        this.closingElement.click(this.closeOverlay.bind(this));
        $(document).keyup(this.keyHandler.bind(this));
    }

    keyHandler(e){
        if(e.keyCode == 27){
            this.closeOverlay();
        }
    }

    openOverlay(){
        console.log("open ovelay clicked");
        this.overlay.addClass('overlay__is-visible');
        return false;
    }

    closeOverlay(){
        this.overlay.removeClass('overlay__is-visible');
    }
}

export default Overlay;